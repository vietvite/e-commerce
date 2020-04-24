import { REMOVE_FAVORITE, ADD_FAVORITE } from "./constants";

export const addFavorite = item => ({
  type: ADD_FAVORITE,
  payload: item
})

export const removeFavorite = id => ({
  type: REMOVE_FAVORITE,
  payload: id
})