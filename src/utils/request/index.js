export const REQUEST = async (url, method = 'GET', body = {}) => {
  const params = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  }
  if (Object.keys(body).length) {
    Object.assign(params, { body: JSON.stringify(body) })
  }
  const response = await fetch(url, params)
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
