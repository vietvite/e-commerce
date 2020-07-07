import React from "react";
import ButtonOutline from "components/ButtonOutline/ButtonOutline";
import ButtonTransparent from "components/ButtonTransparent/ButtonTransparent";
import { connect } from "react-redux";
import {
  showFormLogin,
  showFormSignup,
  toggleForm,
} from "../../../redux/form/action";

class AuthGroupButton extends React.Component {
  render() {
    return (
      <>
        <ButtonTransparent toggleFormModal={this.props.showFormLogin}>
          Đăng nhập
        </ButtonTransparent>
        <ButtonOutline toggleFormModal={this.props.showFormSignup}>
          Đăng ký
        </ButtonOutline>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showFormLogin: () => {
      dispatch(toggleForm());
      dispatch(showFormLogin());
    },
    showFormSignup: () => {
      dispatch(toggleForm());
      dispatch(showFormSignup());
    },
  };
};

export default connect(null, mapDispatchToProps)(AuthGroupButton);
