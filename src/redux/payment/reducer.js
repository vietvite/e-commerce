import moment from 'moment'
import 'moment/locale/vi'
import { SET_ADDRESS, SET_ACCOUNT_DETAIL, SET_DELIVERY_INFO } from "./constants";

const initState = {
  freeShippingThreshold: 250000,
  shippingFee: 20000,
  deliveryInfo: {
    deliveryDate: moment().add(3, 'days').format('L')
  }
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

    default:
      return state
  }
}