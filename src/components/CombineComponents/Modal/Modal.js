import React from "react";
import FormSignUp from "../FormSignUp/FormSignUp";
import FormLogin from "../FormLogin/FormLogin";
import style from "./Modal.module.scss";
import { showFormLogin, showFormSignup } from "../../../redux/form/action";
import { connect } from "react-redux";

class Modal extends React.Component {
  toggleFormModal = (event) => {
    const target = event.target;
    const container = document.getElementById("formModal");
    if (target === container) {
      this.props.toggleFormModal();
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div
        className={style.modal}
        id="formModal"
        onClick={this.toggleFormModal}
      >
        <div className={style.formAll} onSubmit={this.handleSubmit}>
          <div className={style.formImage}></div>
          <div className={style.tabGroupAllInfo}>
            <ul className={style.tabGroup}>
              <li
                className={style.tabActive}
                onClick={this.props.showFormLogin}
              >
                Đăng nhập
              </li>
              <li className={style.tab} onClick={this.props.showFormSignup}>
                Đăng ký
              </li>
            </ul>
            <div className={style.tabContent}>
              {this.props.form === 1 ? <FormLogin /> : <FormSignUp />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.form.form,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
