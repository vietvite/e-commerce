import { AUTH_SUCCESS, LOGOUT_SUCCESS, REQUESTING_AUTH, END_REQUEST } from "./constants";

export const setUser = (user) => ({
  type: AUTH_SUCCESS,
  payload: {
    user,
    requesting: false
  }
})

export const removeUser = () => ({
  type: LOGOUT_SUCCESS,
  payload: {
    user: null
  }
})

export const requesting = () => ({
  type: REQUESTING_AUTH,
  requesting: true
})
export const endRequest = () => ({
  type: END_REQUEST,
  requesting: false
})
