import axios from 'axios'
import { BASE_URL } from 'config'

export const limit = (page, count) => `page=${page ? page * count : 0}&size=${count}`

export default function () {
  const config = {
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const token = window.sessionStorage.getItem('jwt')
  if (token && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`
  }
  let http = axios.create(config)

  return http
}