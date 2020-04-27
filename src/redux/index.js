import { combineReducers } from 'redux'
import account from './account/reducer'
import product from './product/reducer'
import cart from './cart/reducer'
import banner from './banner/reducer'
import category from './category/reducer'
import { connectRouter } from 'connected-react-router'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  account,
  product,
  cart,
  banner,
  category,
})

export default createRootReducer
