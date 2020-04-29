import React from "react";
import style from "./FormLogin.module.scss";
import FormInput from "../../BaseComponents/FormInput/FormInput";
import ButtonBackground from "../../BaseComponents/ButtonBackground/ButtonBackground";
import { Mail, Key } from "react-feather";
import { connect } from "react-redux";
import { login } from "../../../redux/account/actionCreator";
import { PASSWORD_REGEX, EMAIL_REGEX } from "../../../commons";

class FormLogin extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: {}
    }
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.pushErrorMessage = this.pushErrorMessage.bind(this)
    this.validate = this.validate.bind(this)
  }
  textChangeHandler({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }
  pushErrorMessage(messageObject) {
    this.setState((Object.assign({}, this.state, {
      error: messageObject
    })))
  }
  loginHandler(e) {
    e.preventDefault()

    const error = this.validate()
    if (Object.keys(error).length !== 0) {
      return this.pushErrorMessage(error)
    }

    const credentials = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.login(credentials)
  }
  validate() {
    const error = {}
    if (!this.state.email) {
      error.email = 'Vui lòng nhập email'
    }
    if (this.state.email && !EMAIL_REGEX.test(this.state.email)) {
      error.email = 'Email không hợp lệ'
    }
    if (!this.state.password) {
      error.password = 'Vui lòng nhập mật khẩu'
    }
    if (!PASSWORD_REGEX.test(!this.state.password)) {
      error.password = 'Mật khẩu phải từ 4 đến 10 ký tự'
    }

    return error
  }
  render() {
    return (
      <div className={style.formLogin}>
        <h1>ĐĂNG NHẬP</h1>
        <span>{this.props.errors.message}</span>
        <form>
          <div className={style.formGroupBody}>
            <div className={style.formGroup}>
              <div className={style.formGroupItem}>
                <Mail />
              </div>
              <div className={style.formGroupInfo}>
                <FormInput
                  value={this.state.email}
                  textChangeHandler={this.textChangeHandler}
                  tooltipMessage={this.state.error.email}
                  name='email'
                  type='email'
                  placeholder="Nhập địa chỉ email" />
              </div>
            </div>
            <div className={style.formGroup}>
              <div className={style.formGroupItem}>
                <Key />
              </div>
              <div className={style.formGroupInfo}>
                <FormInput
                  value={this.state.password}
                  textChangeHandler={this.textChangeHandler}
                  tooltipMessage={this.state.error.password}
                  name='password'
                  type="password"
                  placeholder="Nhập mật khẩu ">
                  Password
                </FormInput>
              </div>
            </div>
            <p className={style.formForgot}>Quên mật khẩu?</p>
            <div className={style.btnSubmitWrap}>
              <ButtonBackground
                disabled={this.props.disableButton}
                onClick={this.loginHandler}>Đăng nhập</ButtonBackground>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

const mapStateToProps = state => ({
  disableButton: state.account.requesting,
  errors: state.account.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)
