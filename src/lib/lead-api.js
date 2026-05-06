const leadEndpoint = new URL(
  `${import.meta.env.BASE_URL}api/submit-lead.php`,
  window.location.origin,
).toString()

export async function submitLead(payload) {
  const response = await fetch(leadEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data = null

  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok || !data?.ok) {
    throw new Error(data?.error || 'Не удалось отправить заявку.')
  }

  return data
}
