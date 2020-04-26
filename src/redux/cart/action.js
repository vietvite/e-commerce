import {
  ADD_CART,
  REMOVE_CART,
  ADD_FAVORITE,
  UPDATE_QUANTITY,
  CART_TO_ORDERLATER,
} from "./constants";

export const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  id,
});

export const cartToOrderLater = (id) => ({
  type: CART_TO_ORDERLATER,
  id,
});

export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  id: productId,
  quantity,
});

export const addFavorite = (product) => ({
  type: ADD_FAVORITE,
  payload: product,
});

export const fetchCart = (listProduct) => ({
  type: UPDATE_LIST_CART,
  payload: listProduct,
});
