import { combineReducers } from 'redux'
import account from './account/reducer'
import product from './product/reducer'
import cart from './cart/reducer'
import banner from './banner/reducer'

export default combineReducers({
  account,
  product,
  cart,
  banner
})