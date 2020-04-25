import {
  FETCHING,
  UPDATE_LIST_PRODUCT,
  LOAD_MORE,
  GET_SORT_CONDITION,
  SORT_PRODUCT,
  SET_FILTER,
  GET_PRODUCT_DETAIL,
} from "./constants";
import { infinityNumber } from "../../commons/index";
const initState = {
  list: [],
  product: "",
  fetching: false,
  sortCondition: {
    sortBy: "title",
    sortDirection: "ascending",
  },
  filter: {
    title: "",
    categoryId: "",
    priceFrom: 0,
    priceTo: infinityNumber(),
    reviewStar: 0,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, action.payload);
    case UPDATE_LIST_PRODUCT:
      return Object.assign({}, state, action.payload);
    case LOAD_MORE:
      let list = action.payload.list;
      if (list.length === 0 || typeof list === undefined) {
        return state;
      } else {
        return Object.assign(
          {},
          state,
          { list: [...state.list, ...list] },
          { fetching: action.payload.fetching }
        );
      }
    case GET_SORT_CONDITION:
      return state;
    case SORT_PRODUCT:
      return Object.assign({}, state, action.payload);
    case SET_FILTER:
      return Object.assign({}, state, action.payload);
    case GET_PRODUCT_DETAIL:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
