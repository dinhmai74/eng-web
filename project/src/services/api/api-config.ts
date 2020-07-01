import { strings } from "tools"

export const ROOT_URL = "https://localhost:5001"
export const API_VERSION = "/api/v1/"
export const ROOT_URL_WITH_API_VERSION = ROOT_URL + API_VERSION
// const ROOT_URL = "https://jsonplaceholder.typicode.com/"

type Method = "POST" | "GET" | "DELETE" | "PUT"
const TOKEN = strings.token

const logout = () => {
  localStorage.removeItem(TOKEN)
}

const handleResponse = async (response: any) => {
  try {
    const text = await response.text()
    const data = text && JSON.parse(text)
    if (!response.ok || (data && data.error)) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return Promise.resolve(data!.data)
  } catch (error) {
    console.log("error request not handle yet", error)

    return Promise.reject(error.message)
  }
}

const request = async (method: Method, endpoint: string, data: any) => {
  const url = ROOT_URL + API_VERSION + endpoint

  const params: any = {
    url,
    method,
  }
  params.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }

  if (method === "POST") {
    params.body = JSON.stringify(data)
  }

  const idToken = localStorage.getItem(TOKEN)
  if (idToken) {
    params.headers = { ...params.headers, authorization: "Bearer " + idToken }
  }

  return fetch(params.url, params).then(handleResponse)
}

const get = async (url: string, data?: any) => {
  return await request("GET", url, data)
}

const post = async (url: string, data?: any) => {
  return await request("POST", url, data)
}

const deleteAPI = async (url: string, data?: any) => {
  return await request("DELETE", url, data)
}

export const AppAPI = {
  get,
  post,
  delete: deleteAPI,
}
