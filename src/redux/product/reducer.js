import {
  FETCHING,
  UPDATE_LIST_PRODUCT,
  LOAD_MORE,
  GET_SORT_CONDITION,
  SORT_PRODUCT,
} from "./constants";

const initState = {
  list: [],
  fetching: false,
  sortCondition: {
    sortBy: "title",
    sortDirection: "ascending",
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
      if (list.length == 0 || typeof list == undefined) {
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
    default:
      return state;
  }
};
