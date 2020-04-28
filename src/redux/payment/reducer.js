import { SET_ADDRESS, SET_ACCOUNT_DETAIL, SET_PENDING_BILL, SET_PAID_BILL } from "./constants";

const initState = {
  freeShippingThreshold: 250000,
  shippingFee: 20000,
  address: {},
  account: {},
  pendingBill: [],
  bill: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return Object.assign({}, state, {
        address: action.address
      })
    case SET_ACCOUNT_DETAIL:
      return Object.assign({}, state, {
        account: action.account
      })

    case SET_PENDING_BILL:
      return Object.assign({}, state, { pendingBill: action.payload.pendingBill })
    case SET_PAID_BILL:
      return Object.assign({}, state, {bill: action.payload.paidBill})
    default:
      return state
  }
}
