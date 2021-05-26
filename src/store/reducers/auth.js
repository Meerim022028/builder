import { AUTH_FAIL, AUTH_SUCCESS, AUTH_START, AUTH_LOGOUT } from "../actions/types";

const initialState = {
  id: null,
  token: null,
  error: null,
  loading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...initialState,
        loading: true
      };
    case AUTH_SUCCESS:
      return {
        token: action.token,
        id: action.id,
        loading: false
      };
    case AUTH_FAIL:
      return {
        error: action.error.message,
        loading: false
      };
    case AUTH_LOGOUT:
      return {
        token: null,
        id: null
      };
  
    default:
      return state;
  }
}

export default auth;