import { CartService } from "api/cart";
import { fetchCart, addCart, removeCart, updateQuantity, addFavorite, replaceListFavorite, removeFavorite, replaceListOrderLater, addOrderLater, addBackToCart, removeOrderLater } from "./action";
import { FavoriteService } from "api/favorite";
import { OrderLaterService } from "api/orderlater";

export const getAllCartProduct = () =>
  dispatch => {
    CartService.getAll()
      .then(res =>
        dispatch(fetchCart([...res.data])))
  }

export const addCartRequest = (productId, product) => (dispatch, getState) => {
  const [productExisted] = getState().cart.list.filter(product => product.id === productId)
  if (productExisted) {
    CartService.updateQuantityById(productExisted.id, productExisted.quantity + 1).then(res => {
      if (res.data.code === 1) {
        dispatch(updateQuantity(productId, productExisted.quantity + 1))
      }
    })
  } else {
    CartService.addOneById(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(addCart({ ...product, quantity: 1 }))
        }
      })
  }
}

export const removeCartRequest = (productId) =>
  dispatch =>
    CartService.removeOneById(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(removeCart(productId))
        }
      })

export const changeQuantityCartRequest = (productId, quantity) =>
  dispatch =>
    CartService.updateQuantityById(productId, quantity)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(updateQuantity(productId, quantity))
        }
      })

export const fetchCartIfNeeded = () =>
  (dispatch, getStore) =>
    shouldFetch(getStore().cart.list) && dispatch(getAllCartProduct())

/**
 * Favorite
 */
export const getAllFavorites = () =>
  dispatch =>
    FavoriteService.getAll()
      .then(res =>
        dispatch(replaceListFavorite([...res.data])))

export const addFavoriteRequest = (productId, product) =>
  dispatch =>
    FavoriteService.addOneById(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(addFavorite(product))
        }
      })

export const removeFavoriteRequest = (productId) =>
  dispatch =>
    FavoriteService.removeOneById(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(removeFavorite(productId))
        }
      })

export const fetchFavoriteIfNeeded = () =>
  (dispatch, getStore) =>
    shouldFetch(getStore().cart.favorites) && dispatch(getAllFavorites())

/**
 * Order later
 */
export const getAllOrderLater = () =>
  dispatch =>
    OrderLaterService.getAll()
      .then(res =>
        dispatch(replaceListOrderLater([...res.data])))

export const addOrderLaterRequest = (productId, product) =>
  dispatch =>
    OrderLaterService.addOneById(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(addOrderLater(product))
        } else if (res.data.code === -1) {
          return dispatch(removeCart(productId))
        }
      })

export const addBackToCartRequest = (productId, product) =>
  (dispatch, getState) => {
    const [productExisted] = getState().cart.list.filter(product => product.id === productId)

    if (productExisted) {
      return CartService.updateQuantityById(productId, productExisted.quantity + 1)
        .then(res => {
          if (res.data.code === 1) {
            dispatch(updateQuantity(productId, productExisted.quantity + 1))
            dispatch(removeOrderLater(productId))
          }
        })
    }
    return OrderLaterService.addBackToCart(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(addBackToCart({ ...product, quantity: 1 }))
        }
      })
  }

export const removeOrderLaterRequest = (productId) =>
  dispatch =>
    OrderLaterService.removeOneById(productId)
      .then(res => {
        if (res.data.code === 1) {
          return dispatch(removeOrderLater(productId))
        }
      })

export const fetchOrderLaterIfNeeded = () =>
  (dispatch, getStore) =>
    shouldFetch(getStore().cart.orderLater) && dispatch(getAllOrderLater())


function shouldFetch(store) {
  return store.length ? false : true
}
