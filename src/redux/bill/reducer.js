import { SET_BILL } from "./constants";

export default (state = [], action) => {
  switch (action.type) {
    case SET_BILL:
      return action.listBill

    default:
      return state
  }
}