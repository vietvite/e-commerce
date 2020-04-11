import * as constants from './constants'

const initState = { user: null }

export default (state = initState, action) => {
  switch (action) {
    case constants.LOGIN_SUCCESS
      || constants.LOGOUT_SUCCESS:
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}