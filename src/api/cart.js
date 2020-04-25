import http from "./http";

export const CartService = {
  getAll: () => http().get(`/cart`),
  addOneById: productId => http().post(`/cart/${productId}`),
  removeOneById: productId => http().delete(`/cart/${productId}`),
  updateQuantityById: (productId, quantity) => http().put(`/cart/${productId}?quantity=${quantity}`),
}
