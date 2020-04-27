import React from "react";
import FormSignUp from "../FormSignUp/FormSignUp";
import FormLogin from "../FormLogin/FormLogin";
import style from "./Modal.module.scss";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = { showLogin: true };
    this.showSignUp = this.showSignUp.bind(this);
    this.showLogin = this.showLogin.bind(this);
  }

  componentDidMount() {
    let form = this.props.form;
    form === 1
      ? this.setState({ showLogin: true })
      : this.setState({ showLogin: false });
  }

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

  showSignUp() {
    this.setState({
      showLogin: false,
    });
  }

  showLogin() {
    this.setState({
      showLogin: true,
    });
  }

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
              <li className={style.tabActive} onClick={this.showLogin}>
                Đăng nhập
              </li>
              <li className={style.tab} onClick={this.showSignUp}>
                Đăng ký
              </li>
            </ul>
            <div className={style.tabContent}>
              {this.state.showLogin ? <FormLogin /> : <FormSignUp />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
