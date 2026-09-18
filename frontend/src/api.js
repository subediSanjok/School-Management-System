const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081'

export async function getJson(path) {
  const headers = {}
  const token = localStorage.getItem('token')
  if (token) headers['Authorization'] = `Bearer ${token}`
  const response = await fetch(`${API_BASE_URL}${path}`, { headers })
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  return response.json()
}

async function requestJson(path, method, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  })

  if (!response.ok) {
    const message = await response.text().catch(() => '')
    throw new Error(message || `Request failed with status ${response.status}`)
  }

  const text = await response.text()
  if (!text) {
    return null
  }

  return JSON.parse(text)
}

export function postJson(path, body) {
  return requestJson(path, 'POST', body)
}

export function putJson(path, body) {
  return requestJson(path, 'PUT', body)
}

export function deleteJson(path) {
  return requestJson(path, 'DELETE')
}
