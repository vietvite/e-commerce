import { combineReducers } from 'redux'
import account from './account/reducer'
import product from './product/reducer'
import cart from './cart/reducer'
import banner from './banner/reducer'
import favorite from './favorite/reducer'
import { connectRouter } from 'connected-react-router'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  account,
  product,
  cart,
  favorite,
  banner
})

export default createRootReducer
