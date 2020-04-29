import http from "./http";

export const OrderLaterService = {
  getAll: () => http().get(`/orderlater`),
  addOneById: productId => http().post(`/orderlater/${productId}`),
  addBackToCart: productId => http().post(`/orderlater/backtocart/${productId}`),
  removeOneById: productId => http().delete(`/orderlater/${productId}`)
}
