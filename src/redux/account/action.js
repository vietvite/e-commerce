import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants";

export const setUser = (user) => ({
  type: LOGIN_SUCCESS,
  user
})

export const removeUser = () => ({
  type: LOGOUT_SUCCESS,
  user: null
})