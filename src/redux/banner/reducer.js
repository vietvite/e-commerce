import { REFRESH_BANNER } from "./constants";

export default (state = [], action) => {
  switch (action.type) {
    case REFRESH_BANNER:
      return action.payload

    default:
      return state
  }
}