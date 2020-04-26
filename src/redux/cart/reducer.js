import {
  ADD_CART,
  REMOVE_CART,
  UPDATE_QUANTITY,
  UPDATE_LIST_CART,
  CART_TO_ORDERLATER,
  DESTROY_CART,
} from "./constants";

const initState = {
  list: [],
  favorites: [],
  orderLater: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_CART:
      return Object.assign({}, state, {
        list: [action.payload, ...state.list],
      });

    case UPDATE_QUANTITY:
      return Object.assign({}, state, {
        list: state.list.map((product) =>
          product.id === action.id
            ? { ...product, quantity: action.quantity }
            : product
        ),
      });

    case REMOVE_CART:
      return Object.assign({}, state, {
        list: state.list.filter((product) => product.id !== action.id),
      });

    case CART_TO_ORDERLATER:
      function moveCartToOrderLater(id, list, orderLater) {
        const index = list.findIndex((product) => product.id === id);

        const moveProduct = list.splice(index, 1);

        orderLater.push(...orderLater, ...moveProduct);
        return { list, orderLater };
      }
      const newstate = moveCartToOrderLater(
        action.id,
        state.list,
        state.orderLater
      );
      return Object.assign({}, state, {
        list: [...newstate.list],
        orderLater: [...newstate.orderLater],
      });

    case UPDATE_LIST_CART:
      return Object.assign({}, state, {
        list: action.payload,
      });

    case DESTROY_CART:
      return {
        list: [],
        favorites: [],
        orderLater: [],
      };

    default:
      return state;
  }
};
