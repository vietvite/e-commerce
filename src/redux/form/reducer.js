import { TOGGLE_FORM, SHOW_FORM_LOGIN, SHOW_FORM_SIGNUP } from "./constants";

const initialState = {
  showModal: false,
  /**
   * 1: show form login
   * 2: show form signup
   */
  form: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FORM:
      return Object.assign({}, state, { showModal: !state.showModal });
    case SHOW_FORM_LOGIN:
      return Object.assign({}, state, { form: 1 });
    case SHOW_FORM_SIGNUP:
      return Object.assign({}, state, { form: 2 });
    default:
      return state;
  }
};
