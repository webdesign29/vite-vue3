const baseURL = 'https://pokeapi.co/api/v2'

export default async function client<T>(
  endpoint: string,
  customConfig?: RequestInit
): Promise<T>

export default async function client(
  endpoint: string,
  customConfig: RequestInit = {}
) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  const response = await window.fetch(`${baseURL}/${endpoint}`, config)
  const data = await response.json()

  if (response.ok) {
    return data
  } else {
    return Promise.reject(data)
  }
}
