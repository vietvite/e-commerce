import { combineReducers } from 'redux'
import account from './account/reducer'
import product from './product/reducer'

export default combineReducers({
  account,
  product
})