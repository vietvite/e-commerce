import { requesting, setUser, endRequest, setError } from "./action"
import { AuthService } from '../../api/auth'
import { push } from 'connected-react-router'

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
  phoneNumber
}) => dispatch => {
  dispatch(requesting())
  return AuthService.signup({ email, fullname, password, phoneNumber })
    .then(resSuccessHandler(dispatch))
    .catch(resErrorHandler(dispatch))
}

/**
 * Handle response function
 */

function resSuccessHandler(dispatch) {
  return function (res) {
    if (res.status === 200) {
      dispatch(setUser(res.data))
      console.log({ token: res.data.token });

      window.sessionStorage.setItem('jwt', res.data.token)

      dispatch(push('/'))
      dispatch(setError({}))
    }
  }
}

function resErrorHandler(dispatch) {
  return function (err) {
    dispatch(endRequest())

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
    if (message) {
      return dispatch(setError({ email: message }))
    }
  }
}