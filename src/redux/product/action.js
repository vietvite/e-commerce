import { UPDATE_LIST_PRODUCT, FETCHING } from "./constants"

export const sendingRequest = () => ({
  type: FETCHING,
  payload: {
    fetching: true
  }
})
export const receiveListProduct = (listProduct) => ({
  type: UPDATE_LIST_PRODUCT,
  payload: {
    list: listProduct,
    fetching: false
  }
})
