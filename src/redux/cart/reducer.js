import { ADD_CART, REMOVE_CART, UPDATE_QUANTITY, UPDATE_LIST_CART, DESTROY_CART, ADD_FAVORITE, REMOVE_FAVORITE, REPLACE_LIST_FAVORITE, REPLACE_LIST_ORDER_LATER, ADD_ORDER_LATER, ADD_BACKTO_CART, REMOVE_ORDER_LATER } from "./constants";

const initState = {
  list: [],
  favorites: [],
  orderLater: []
}

export default (state = initState, action) => {
  switch (action.type) {
    /**
     * CART
     */
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

    case DESTROY_CART:
      return {
        list: [],
        favorites: [],
        orderLater: []
      }

    /**
     * FAVORITE
     */
    case ADD_FAVORITE:
      return Object.assign({}, state, {
        favorites: [
          action.payload,
          ...state.favorites
        ]
      })

    case REMOVE_FAVORITE:
      return Object.assign({}, state, {
        favorites: state.favorites.filter(product => product.id !== action.id)
      })

    case REPLACE_LIST_FAVORITE:
      return Object.assign({}, state, {
        favorites: action.payload
      })

    /**
     * ORDER LATER
     */
    case REPLACE_LIST_ORDER_LATER:
      return Object.assign({}, state, {
        orderLater: action.payload
      })
    case ADD_ORDER_LATER:
      return Object.assign({}, state, {
        list: state.list.filter(product => product.id !== action.product.id),
        orderLater: [
          action.product,
          ...state.orderLater
        ]
      })
    case ADD_BACKTO_CART:
      return Object.assign({}, state, {
        list: [action.product, ...state.list],
        orderLater: state.orderLater.filter(product => product.id !== action.product.id)
      })

    case REMOVE_ORDER_LATER:
      return Object.assign({}, state, {
        orderLater: state.orderLater.filter(product => product.id !== action.id)
      })

    default:
      return state
  }
}