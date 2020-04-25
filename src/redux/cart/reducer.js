import { ADD_CART, REMOVE_CART, UPDATE_QUANTITY, UPDATE_LIST_CART } from "./constants";

const initState = {
  list: [],
  favorites: [],
  orderLater: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, {
        list: [
          action.payload,
          ...state.list
        ]
      })

    case UPDATE_QUANTITY:
      return Object.assign({}, state, {
        list: state.list.map(
          product =>
            product.id === action.id
              ? { ...product, quantity: action.quantity }
              : product)
      })

    case REMOVE_CART:
      return Object.assign({}, state, {
        list: state.list.filter(product => product.id !== action.id)
      })

    case UPDATE_LIST_CART:
      return Object.assign({}, state, {
        list: action.payload
      })

    default:
      return state
  }
}