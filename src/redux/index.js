import { combineReducers } from 'redux'
import account from './account/reducer'
import product from './product/reducer'
import cart from './cart/reducer'

export default combineReducers({
  account,
  product,
  cart,
})