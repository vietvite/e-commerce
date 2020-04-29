import { combineReducers } from 'redux'
import account from './account/reducer'
import product from './product/reducer'
import cart from './cart/reducer'
import banner from './banner/reducer'
import category from './category/reducer'
import payment from './payment/reducer'
import form from './form/reducer'
import bill from './bill/reducer'
import { connectRouter } from 'connected-react-router'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  account,
  product,
  cart,
  banner,
  category,
  payment,
  form,
  bill
})

export default createRootReducer
