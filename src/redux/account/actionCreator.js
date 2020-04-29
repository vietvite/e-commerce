import { requesting, setUser, endRequest, setError, removeUser } from "./action"
import { AuthService } from '../../api/auth'
import { push } from 'connected-react-router'
import { destroyCart } from "../cart/action"

export const login = (credentials) =>
  dispatch => {
    dispatch(requesting())
    return AuthService.login(credentials)
      .then(resSuccessHandler(dispatch))
      .catch(resErrorHandler(dispatch))
  }

export const signup = ({
  email,
  fullname,
  password,
  phoneNumber,
  role
}) => dispatch => {
  dispatch(requesting())
  return AuthService.signup({ email, fullname, password, phoneNumber, role })
    .then(resSuccessHandler(dispatch))
    .catch(resErrorHandler(dispatch))
}

export const logout = () =>
  dispatch => {
    dispatch(removeUser())
    dispatch(destroyCart())

    sessionStorage.removeItem('jwt')
    sessionStorage.removeItem('cart')
  }

/**
 * Handle response function
 */

function resSuccessHandler(dispatch) {
  return function (res) {
    if (res.status === 200) {
      dispatch(setUser(res.data))
      window.sessionStorage.setItem('jwt', res.data.token)
      if (res.data.role === 'ROLE_SELLER') {
        dispatch(push('/shop/product'));
      } else {
        dispatch(push('/'))
      }
      dispatch(setError({}))
    }
  }
}

function resErrorHandler(dispatch) {
  return function (err) {
    dispatch(endRequest())
    dispatch(setError({ email: err.response.data.message }))
    if (!err.response) {
      return dispatch(setError({ message: 'Không có kết nối' }))
    }
    const errors = err.response.data.errors || []
    if (errors.length !== 0) {
      return dispatch(setError(
        errors.map(error => ({
          field: error.field,
          message: error.defaultMessage
        }))
      ))
    }
    const message = err.response.data.message
    if (message && err.response.status === 401) {
      return dispatch(setError({ message: message }))
    }
  }
}
