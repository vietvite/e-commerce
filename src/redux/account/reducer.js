import { AUTH_SUCCESS, LOGOUT_SUCCESS, REQUESTING_AUTH } from "./constants"

const initState = {
  user: null,
  requesting: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS || LOGOUT_SUCCESS:
      console.log('LOUTTTTTTTTTTTTTTTTTTTTTTT');

      return Object.assign({}, state, action.payload)

    case REQUESTING_AUTH:
      return Object.assign({}, state, {
        requesting: action.requesting
      })

    default:
      return state
  }
}