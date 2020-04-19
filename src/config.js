const isDev = true

const LOCAL_URL = 'http://localhost:8080'
const SERVER_URL = 'https://e-commerce-server-mock.herokuapp.com'

export default {
  baseURL: isDev ? LOCAL_URL : SERVER_URL
}