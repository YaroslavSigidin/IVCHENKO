const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

async function handleSubmitLead(request, env) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 })
  }

  if (request.method === 'GET') {
    const url = new URL(request.url)
    if (!url.searchParams.has('health')) {
      return json({ ok: false, error: 'Method not allowed.' }, 405)
    }

    return json({
      ok: true,
      runtime: 'cloudflare-worker',
      hasTelegramToken: Boolean(env.TELEGRAM_BOT_TOKEN),
      hasTelegramChatId: Boolean(env.TELEGRAM_CHAT_ID),
    })
  }

  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed.' }, 405)
  }

  const token = env.TELEGRAM_BOT_TOKEN
  const chatId = env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return json(
      {
        ok: false,
        error:
          'Telegram credentials are not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Cloudflare.',
      },
      500,
    )
  }

  let payload
  try {
    payload = await request.json()
  } catch {
    return json({ ok: false, error: 'Invalid payload.' }, 400)
  }

  if (!payload || typeof payload !== 'object') {
    return json({ ok: false, error: 'Invalid payload.' }, 400)
  }

  const honeypot = String(payload.website || '').trim()
  if (honeypot) {
    return json({ ok: true })
  }

  const name = String(payload.name || '').trim()
  const email = String(payload.email || '').trim()
  const messenger = String(payload.messenger || '').trim()
  const comment = String(payload.comment || '').trim()
  const plan = String(payload.plan || '').trim()
  const formType = String(payload.formType || 'Заявка').trim()
  const submittedAt = String(payload.submittedAt || '').trim()
  const pageUrl = String(payload.pageUrl || '').trim()

  if (!name || !email || !messenger) {
    return json({ ok: false, error: 'Заполните обязательные поля.' }, 422)
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Некорректный email.' }, 422)
  }

  const lines = [
    '🔥 <b>Новая заявка</b>',
    '',
    `Форма: <b>${escapeHtml(formType)}</b>`,
    `Тариф: <b>${escapeHtml(plan || 'Не выбран')}</b>`,
    `Имя: <b>${escapeHtml(name)}</b>`,
    `Email: <b>${escapeHtml(email)}</b>`,
    `Telegram / WhatsApp: <b>${escapeHtml(messenger)}</b>`,
  ]

  if (comment) lines.push(`Комментарий: ${escapeHtml(comment)}`)
  if (submittedAt) lines.push(`Время: ${escapeHtml(submittedAt)}`)
  if (pageUrl) lines.push(`Страница: ${escapeHtml(pageUrl)}`)

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    },
  )

  const telegramData = await telegramResponse.json().catch(() => null)

  if (!telegramResponse.ok || !telegramData?.ok) {
    return json(
      {
        ok: false,
        error:
          telegramData?.description ||
          `Telegram delivery failed. HTTP ${telegramResponse.status}`,
      },
      502,
    )
  }

  return json({ ok: true })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/submit-lead' || url.pathname === '/api/submit-lead/') {
      return handleSubmitLead(request, env)
    }

    return env.ASSETS.fetch(request)
  },
}
