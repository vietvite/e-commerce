import { ADD_CART, REMOVE_CART, ADD_FAVORITE, UPDATE_QUANTITY, UPDATE_LIST_CART, DESTROY_CART, REMOVE_FAVORITE, REPLACE_LIST_FAVORITE, REPLACE_LIST_ORDER_LATER, ADD_ORDER_LATER, ADD_BACKTO_CART, REMOVE_ORDER_LATER } from "./constants";

export const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  id,
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  id: productId,
  quantity,
});

export const fetchCart = listProduct => ({
  type: UPDATE_LIST_CART,
  payload: listProduct || []
})

export const destroyCart = () => ({
  type: DESTROY_CART,
})

export const addFavorite = product => ({
  type: ADD_FAVORITE,
  payload: product,
});

export const removeFavorite = id => ({
  type: REMOVE_FAVORITE,
  id
})

export const replaceListFavorite = listProduct => ({
  type: REPLACE_LIST_FAVORITE,
  payload: listProduct
})

export const replaceListOrderLater = listProduct => ({
  type: REPLACE_LIST_ORDER_LATER,
  payload: listProduct
})

export const addOrderLater = product => ({
  type: ADD_ORDER_LATER,
  product
})

export const addBackToCart = product => ({
  type: ADD_BACKTO_CART,
  product
})

export const removeOrderLater = id => ({
  type: REMOVE_ORDER_LATER,
  id
})