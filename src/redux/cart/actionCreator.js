import { CartService } from "../../api/cart";
import { fetchCart, addCart, removeCart, updateQuantity } from "./action";

export const getAllCartProduct = () =>
  dispatch =>
    CartService.getAll()
      .then(res =>
        dispatch(fetchCart([...res.data])))

export const addCartRequest = (productId, product) =>
  dispatch =>
    CartService.addOneById(productId)
      .then(res => {
        if (res.data.success) {
          return dispatch(addCart({ ...product, quantity: 1 }))
        }
      })

export const removeCartRequest = (productId) =>
  dispatch =>
    CartService.removeOneById(productId)
      .then(res => {
        if (res.data.success) {
          return dispatch(removeCart(productId))
        }
      })

export const changeQuantityCartRequest = (productId, quantity) =>
  dispatch =>
    CartService.updateQuantityById(productId, quantity)
      .then(res => {
        if (res.data.success) {
          return dispatch(updateQuantity(productId, quantity))
        }
      })



export const fetchCartIfNeeded = () =>
  (dispatch, getStore) => {
    shouldFetchCart(getStore().cart.list) && dispatch(getAllCartProduct())
  }

function shouldFetchCart(store) {
  return store.length ? false : true
}