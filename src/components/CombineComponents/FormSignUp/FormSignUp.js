import React from "react";
import style from "./FormSignUp.module.scss";
import FormInput from "../../BaseComponents/FormInput/FormInput";
import ButtonBackground from "../../BaseComponents/ButtonBackground/ButtonBackground";
import { Mail, Key, Users, Phone } from "react-feather";
import { connect } from "react-redux";
import { signup } from "../../../redux/account/actionCreator";

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
      return this.pushErrorMessage(error)
    }

    const credentials = {
      email: this.state.email,
      fullname: this.state.fullname,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
    }
    this.props.signup(credentials)
      .then(error => {
        if (!error) {
          return
        }
        if (error instanceof Array) {
          this.pushErrorMessage(arrayToObj(error))
          function arrayToObj(array = []) {
            return array.reduce((rs, { field, message }) => ({
              ...rs,
              [field]: message
            }), {})
          }
        } else {
          this.pushErrorMessage(error)
        }
      })
  }
  validate() {
    const PHONENUMBER_REGEX = /((09|03|07|08|05)+([0-9]{8})\b)/g
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const PASSWORD_REGEX = /^.{4,10}$/
    const FULLNAME_REGEX = /^.{4,50}$/

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
  render() {
    return (
      <div className={style.formSignUp}>
        <h1>ĐĂNG KÝ</h1>
        <span>{this.state.error.message}</span>
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
                  tooltipMessage={this.state.error.fullname}
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
                  tooltipMessage={this.state.error.email}
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
                  tooltipMessage={this.state.error.phoneNumber}
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
                  tooltipMessage={this.state.error.password}
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
                  tooltipMessage={this.state.error.reTypePassword}
                  name='reTypePassword'
                  type='password'
                  placeholder="Nhập lại mật khẩu" />
              </div>
            </div>
            <div className={style.btnSubmitWrap}>
              <ButtonBackground
                disabled={this.props.disableSignup}
                onClick={this.signupHandler}>Đăng kí</ButtonBackground>
            </div>
          </div>
        </form>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  disableSignup: state.account.requesting
})

const mapDispatchToProps = (dispatch, { push }) => ({
  signup: (credentials) => dispatch(signup(credentials)),
  successRedirect: () => push('/')
})

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp);
