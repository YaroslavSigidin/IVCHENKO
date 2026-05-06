const TELEGRAM_BOT_TOKEN = '8551729344:AAE69EOihjjc-JF02TqsfRv60arDZwGKA54'
const TELEGRAM_CHAT_ID = '-5107045462'

function buildLeadMessage(payload) {
  const lines = [
    '🔥 Новая заявка',
    '',
    `Форма: ${payload.formType || 'Заявка'}`,
    `Тариф: ${payload.plan || 'Не выбран'}`,
    `Имя: ${payload.name || '-'}`,
    `Email: ${payload.email || '-'}`,
    `Telegram / WhatsApp: ${payload.messenger || '-'}`,
  ]

  if (payload.comment) {
    lines.push(`Комментарий: ${payload.comment}`)
  }

  if (payload.submittedAt) {
    lines.push(`Время: ${payload.submittedAt}`)
  }

  if (payload.pageUrl) {
    lines.push(`Страница: ${payload.pageUrl}`)
  }

  return lines.join('\n')
}

async function submitLeadDirectlyToTelegram(payload) {
  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: new URLSearchParams({
        chat_id: TELEGRAM_CHAT_ID,
        text: buildLeadMessage(payload),
        disable_web_page_preview: 'true',
      }),
    },
  )

  const data = await response.json().catch(() => null)

  if (!response.ok || !data?.ok) {
    throw new Error(data?.description || 'Не удалось отправить заявку в Telegram.')
  }

  return data
}

export async function submitLead(payload) {
  const leadEndpoint = new URL(
    `${import.meta.env.BASE_URL}api/submit-lead.php`,
    window.location.origin,
  ).toString()

  let response

  try {
    response = await fetch(leadEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    return submitLeadDirectlyToTelegram(payload)
  }

  const rawText = await response.text()
  let data = null

  try {
    data = rawText ? JSON.parse(rawText) : null
  } catch {
    data = null
  }

  if (response.ok && data?.ok) {
    return data
  }

  try {
    return await submitLeadDirectlyToTelegram(payload)
  } catch (telegramError) {
    const fallbackMessage =
      rawText?.trim() || `Не удалось отправить заявку. HTTP ${response.status}`

    throw new Error(data?.error || telegramError.message || fallbackMessage)
  }
}
