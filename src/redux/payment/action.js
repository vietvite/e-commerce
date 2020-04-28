import { SET_ADDRESS, SET_ACCOUNT_DETAIL } from "./constants";

export const setAddress = address => ({
  type: SET_ADDRESS,
  address
})

export const setAccountDetail = account => ({
  type: SET_ACCOUNT_DETAIL,
  account
})