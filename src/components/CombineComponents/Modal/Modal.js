import React from "react";
import FormSignUp from "../FormSignUp/FormSignUp";
import FormLogin from "../FormLogin/FormLogin";
import style from "./Modal.module.scss";
import { showFormLogin, showFormSignup, hideFormSeller } from "../../../redux/form/action";
import { connect } from "react-redux";

class Modal extends React.Component {
  toggleFormModal = (event) => {
    const target = event.target;
    const container = document.getElementById("formModal");
    if (target === container) {
      this.props.toggleFormModal();
      this.props.hideSellerForm();
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
            {this.props.form.type === 1 ? (
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
            ) : (
              ""
            )}

            <div className={style.tabContent}>
              {this.props.form.form === 1 ? <FormLogin /> : <FormSignUp type={this.props.form.type} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
