import { SET_ADDRESS, SET_ACCOUNT_DETAIL } from "./constants";

const initState = {
  freeShippingThreshold: 250000,
  shippingFee: 20000,
  address: {},
  account: {}
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

    default:
      return state
  }
}