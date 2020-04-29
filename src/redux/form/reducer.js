import { TOGGLE_FORM, SHOW_FORM_LOGIN, SHOW_FORM_SIGNUP, SHOW_FORM_SELLER, HIDE_FORM_SELLER } from "./constants";

const initialState = {
  showModal: false,
  /**
   * 1: show form login
   * 2: show form signup
   */
  form: 1,
  /**
   * 1: form login and signup for customer
   * 2: form signup for seller
   */
  type: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FORM:
      return Object.assign({}, state, { showModal: !state.showModal });
    case SHOW_FORM_LOGIN:
      return Object.assign({}, state, { form: 1 , type: 1});
    case SHOW_FORM_SIGNUP:
      return Object.assign({}, state, { form: 2, type: 1 });
    case SHOW_FORM_SELLER:
      return Object.assign({}, state, { type: 2, form: 2 });
    case HIDE_FORM_SELLER:
      return Object.assign({}, state, { type: 1 });
    default:
      return state;
  }
};
