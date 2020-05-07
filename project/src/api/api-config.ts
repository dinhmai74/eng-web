// const ROOT_URL = "https://localhost:5001/"
// const ROOT_URL = "https://jsonplaceholder.typicode.com/"

type Method = "POST" | "GET"

function handleResponse(response: any) {
  return response.text().then((text: any) => {
    const data = text && JSON.parse(text)
    if (!response.ok || (data && data.error)) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

const request = async (method: Method, url: string, data: any) => {
  // const url = ROOT_URL + endpoint

  const params: any = {
    url,
    method,
  }

  if (method === "GET") {
    params.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  } else if (method === "POST") {
    params.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    }

    params.body = JSON.stringify(data)
    console.log("body req", JSON.stringify(params.body))
  }

  // const idToken = localStorage.getItem(strings.token)
  // if (idToken) {
  // params.headers = { ...params.headers, authorization: "Bearer " + idToken }
  // }

  return await fetch(params.url, params).then(handleResponse)
}

const get = async (url: string, data?: any) => {
  return await request("GET", url, data)
}

const post = async (url: string, data?: any) => {
  return await request("POST", url, data)
}

export const API = {
  get,
  post,
}

