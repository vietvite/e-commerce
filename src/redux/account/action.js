import { AUTH_SUCCESS, LOGOUT_SUCCESS, REQUESTING, END_REQUEST } from "./constants";

export const setUser = (user) => ({
  type: AUTH_SUCCESS,
  payload: {
    user,
    requesting: false
  }
})

export const removeUser = () => ({
  type: LOGOUT_SUCCESS,
  user: null,
  requesting: false
})

export const requesting = () => ({
  type: REQUESTING,
  requesting: true
})
export const endRequest = () => ({
  type: END_REQUEST,
  requesting: false
})
