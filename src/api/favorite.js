import http from "./http";

export const FavoriteService = {
  getAll: () => http().get(`/favorite`),
  addOneById: productId => http().post(`/favorite/${productId}`),
  removeOneById: productId => http().delete(`/favorite/${productId}`),
}