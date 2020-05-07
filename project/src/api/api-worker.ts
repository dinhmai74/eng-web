import { API } from "./api-config"

const getBooks = async () => {
  return await API.get("https://www.googleapis.com/books/v1/volumes?q='english'")
}

export const apiWorker = {
  getBooks,
}
