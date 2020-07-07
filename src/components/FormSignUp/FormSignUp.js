import React from "react";
import style from "./FormSignUp.module.scss";
import FormInput from "components/FormInput/FormInput";
import { Mail, Key, Users, Phone } from "react-feather";
import { connect } from "react-redux";
import { signup } from "redux/account/actionCreator";
import { setError } from "redux/account/action";
import { PHONENUMBER_REGEX, EMAIL_REGEX, PASSWORD_REGEX, FULLNAME_REGEX } from "commons";

class FormSignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      fullname: '',
      password: '',
      reTypePassword: '',
      phoneNumber: '',
      error: {}
    }
    this.textChangeHandler = this.textChangeHandler.bind(this)
    this.signupHandler = this.signupHandler.bind(this)
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

  signupHandler(e) {
    e.preventDefault()

    const error = this.validate()
    if (Object.keys(error).length !== 0) {
      return this.props.setError(error)
    }

    const credentials = {
      email: this.state.email,
      fullname: this.state.fullname,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
    }
    this.props.setError({})
    // true: signup for seller, false: signup for customer
    if (this.props.type === 2) {
      credentials.role = 'ROLE_SELLER';
    }
    this.props.signup(credentials)
  }
  validate() {
    const error = {}
    if (!this.state.fullname) {
      error.fullname = 'Vui lòng nhập họ và tên'
    }
    if (this.state.fullname && !FULLNAME_REGEX.test(this.state.fullname)) {
      error.fullname = 'Họ tên phải dài từ 5 đến không quá 50 ký tự'
    }
    if (!this.state.phoneNumber) {
      error.phoneNumber = 'Vui lòng nhập số điện thoại'
    }
    if (this.state.phoneNumber && !PHONENUMBER_REGEX.test(this.state.phoneNumber)) {
      error.phoneNumber = 'Số điện thoại không hợp lệ'
    }
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
    if (this.state.password !== this.state.reTypePassword) {
      error.reTypePassword = 'Nhập lại mật khẩu không trùng khớp'
    }

    return error
  }
  componentWillUnmount() {
    this.props.setError({})
  }
  render() {
    return (
      <div className={style.formSignUp}>
        <h1>{this.props.type === 1 ? "ĐĂNG KÝ" : "ĐĂNG KÝ MỞ SHOP"}</h1>
        <span>{this.props.errors.message}</span>
        <form>
          <div className={style.formGroupBody}>
            <div className={style.formGroup}>
              <div className={style.formGroupItem}>
                <Users />
              </div>
              <div className={style.formGroupInfo}>
                <FormInput
                  value={this.state.fullname}
                  textChangeHandler={this.textChangeHandler}
                  tooltipMessage={this.props.errors.fullname}
                  name='fullname'
                  type='text'
                  placeholder="Nhập họ và tên"></FormInput>
              </div>
            </div>
            <div className={style.formGroup}>
              <div className={style.formGroupItem}>
                <Mail />
              </div>
              <div className={style.formGroupInfo}>
                <FormInput
                  value={this.state.email}
                  textChangeHandler={this.textChangeHandler}
                  tooltipMessage={this.props.errors.email}
                  name='email'
                  type='email'
                  placeholder="Nhập địa chỉ email" />
              </div>
            </div>
            <div className={style.formGroup}>
              <div className={style.formGroupItem}>
                <Phone />
              </div>
              <div className={style.formGroupInfo}>
                <FormInput
                  value={this.state.phoneNumber}
                  textChangeHandler={this.textChangeHandler}
                  tooltipMessage={this.props.errors.phoneNumber}
                  name='phoneNumber'
                  type='text'
                  placeholder="Nhập số điện thoại" />
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
                  tooltipMessage={this.props.errors.password}
                  name='password'
                  type='password'
                  placeholder="Nhập mật khẩu" />
              </div>
            </div>
            <div className={style.formGroup}>
              <div className={style.formGroupItem}></div>
              <div className={style.formGroupInfo}>
                <FormInput
                  value={this.state.reTypePassword}
                  textChangeHandler={this.textChangeHandler}
                  tooltipMessage={this.props.errors.reTypePassword}
                  name='reTypePassword'
                  type='password'
                  placeholder="Nhập lại mật khẩu" />
              </div>
            </div>
            <div className={style.btnSubmitWrap}>
              <button
                onClick={this.signupHandler}
                disabled={this.props.disableSignup}
                className={style.buttonBackground}>
                Đăng kí
              </button>
            </div>
          </div>
        </form>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  disableSignup: state.account.requesting,
  errors: state.account.errors
})

const mapDispatchToProps = (dispatch, { push }) => ({
  signup: (credentials) => dispatch(signup(credentials)),
  successRedirect: () => push('/'),
  setError: error => dispatch(setError(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);
