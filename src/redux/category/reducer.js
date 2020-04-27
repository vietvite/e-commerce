import { REPLACE_LIST_CATEGORY } from "./constants";

export default (state = [], action) => {
  switch (action.type) {
    case REPLACE_LIST_CATEGORY:
      return action.payload

    default:
      return state
  }
}
