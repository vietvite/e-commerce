import { AUTH_SUCCESS, LOGOUT_SUCCESS, REQUESTING_AUTH, END_REQUEST, SET_ERROR } from "./constants"

const initState = {
  user: null,
  requesting: false,
  errors: {},
}

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, action.payload)
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, action.payload)
    case REQUESTING_AUTH:
      return Object.assign({}, state, {
        requesting: action.requesting
      })
    case END_REQUEST:
      return Object.assign({}, state, {
        requesting: action.requesting
      })
    case SET_ERROR:
      return Object.assign({}, state, {
        errors: { ...action.payload }
      })

    default:
      return state
  }
}