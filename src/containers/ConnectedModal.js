import Modal from "components/Modal/Modal";
import { showFormLogin, showFormSignup, hideFormSeller } from "redux/form/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showFormLogin: () => {
      dispatch(showFormLogin());
    },
    showFormSignup: () => {
      dispatch(showFormSignup());
    },
    hideSellerForm: () => {
      dispatch(hideFormSeller())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);