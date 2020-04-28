import { SET_ADDRESS, SET_ACCOUNT_DETAIL, SET_PENDING_BILL, SET_PAID_BILL, SET_DELIVERY_INFO } from "./constants";

export const setAddress = address => ({
  type: SET_ADDRESS,
  address
})

export const setAccountDetail = account => ({
  type: SET_ACCOUNT_DETAIL,
  account
})

export const setDeliveryInfo = info => ({
  type: SET_DELIVERY_INFO,
  payload: info
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
