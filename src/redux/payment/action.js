import { SET_ADDRESS, SET_ACCOUNT_DETAIL, SET_PENDING_BILL, SET_PAID_BILL } from "./constants";

export const setAddress = address => ({
  type: SET_ADDRESS,
  address
})

export const setAccountDetail = account => ({
  type: SET_ACCOUNT_DETAIL,
  account
})

export const setPendingBill = (pendingBill) => ({
  type: SET_PENDING_BILL,
  payload: {
    pendingBill
  }
})

export const setPaidBill = (paidBill) => ({
  type: SET_PAID_BILL,
  payload: paidBill
})
