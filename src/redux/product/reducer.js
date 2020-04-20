import { FETCHING, UPDATE_LIST_PRODUCT } from "./constants";

const initState = {
  list: [],
  fetching: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, action.payload)
    case UPDATE_LIST_PRODUCT:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}