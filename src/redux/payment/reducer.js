import moment from 'moment'
import 'moment/locale/vi'
import { SET_ADDRESS, SET_ACCOUNT_DETAIL, SET_DELIVERY_INFO, SET_PENDING_BILL, SET_PAID_BILL } from "./constants";

const initState = {
  freeShippingThreshold: 250000,
  shippingFee: 20000,
  deliveryInfo: {
    deliveryDate: moment().add(3, 'days').format('L')
  },
  address: {},
  account: {},
  pendingBill: [],
  bill: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return Object.assign({}, state, {
        deliveryInfo: { ...state.deliveryInfo, ...action.address }
      })
    case SET_ACCOUNT_DETAIL:
      return Object.assign({}, state, {
        deliveryInfo: {
          ...state.deliveryInfo,
          fullname: action.account.fullname,
          email: action.account.email,
          phoneNumber: action.account.phoneNumber,
        }
      })
    case SET_DELIVERY_INFO:
      const { payload } = action
      return Object.assign({}, state, {
        deliveryInfo: {
          ...state.deliveryInfo,
          ...payload
        }
      })

    case SET_PENDING_BILL:
      return Object.assign({}, state, { pendingBill: action.payload.pendingBill })
    case SET_PAID_BILL:
      return Object.assign({}, state, { bill: action.payload.paidBill })
    default:
      return state
  }
}
