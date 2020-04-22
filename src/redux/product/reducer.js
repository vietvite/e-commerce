import { FETCHING, UPDATE_LIST_PRODUCT, LOAD_MORE } from "./constants";

const initState = {
  list: [],
  fetching: false,
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
    default:
      return state;
  }
};
