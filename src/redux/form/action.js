import { TOGGLE_FORM, SHOW_FORM_LOGIN, SHOW_FORM_SIGNUP, SHOW_FORM_SELLER, HIDE_FORM_SELLER } from "./constants";

export const toggleForm = () => {
  return {
    type: TOGGLE_FORM,
  };
};

export const showFormLogin = () => {
  return {
    type: SHOW_FORM_LOGIN,
  };
};

export const showFormSignup = () => {
  return {
    type: SHOW_FORM_SIGNUP,
  };
};

export const showFormSeller = () => {
  return {
    type: SHOW_FORM_SELLER,
  }
}

export const hideFormSeller = () => {
  return {
    type: HIDE_FORM_SELLER
  }
}
