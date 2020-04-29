import axios from 'axios'
import loadedConfig from '../config'

export const limit = (page, count) => `page=${page ? page * count : 0}&size=${count}`

export default function () {
  const config = {
    baseURL: loadedConfig.baseURL,
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