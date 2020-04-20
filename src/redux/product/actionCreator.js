import ProductService from '../../api/product'
import { receiveListProduct, sendingRequest } from './action'

export const searchProduct = (title) =>
  dispatch => {
    dispatch(sendingRequest())
    return ProductService
      .findByTitle(title)
      .then(res =>
        dispatch(receiveListProduct([...res.data])))
  }