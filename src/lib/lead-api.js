export async function submitLead(payload) {
  const leadEndpoint = new URL(
    `${import.meta.env.BASE_URL}api/submit-lead.php`,
    window.location.origin,
  ).toString()

  const response = await fetch(leadEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const rawText = await response.text()
  let data = null

  try {
    data = rawText ? JSON.parse(rawText) : null
  } catch {
    data = null
  }

  if (!response.ok || !data?.ok) {
    const fallbackMessage =
      rawText?.trim() || `Не удалось отправить заявку. HTTP ${response.status}`

    throw new Error(data?.error || fallbackMessage)
  }

  return data
}
