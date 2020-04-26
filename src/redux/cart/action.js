import {
  ADD_CART,
  EDIT_CART,
  REMOVE_CART,
  ADD_FAVORITE,
  UPDATE_QUANTITY,
  CART_TO_ORDERLATER,
} from "./constants";

export const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});

export const editCart = (editedCart) => ({
  type: EDIT_CART,
  payload: editedCart,
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
