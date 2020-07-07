// export const NODE_ENV = 'production'
export const NODE_ENV = 'development'

const BASE_URL_DEV = "http://localhost:8080";
const BASE_URL_PROD = "https://e-commerce-server-mock.herokuapp.com";

export const BASE_URL = NODE_ENV === 'production' ? BASE_URL_PROD : BASE_URL_DEV