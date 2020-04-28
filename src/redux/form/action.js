import { TOGGLE_FORM, SHOW_FORM_LOGIN, SHOW_FORM_SIGNUP } from "./constants";

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
