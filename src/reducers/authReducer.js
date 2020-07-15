import {
  REGISTERSUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  SIGN_OUT,
  USER_LOADING,
  USER_LOADED,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  isSignedIn: null,
  isAuthenticated: false,
  user: {},
  googleUserId: null,
  success: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case GOOGLE_SIGN_IN:
    case REGISTERSUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isSignedIn: true,
        googleUserId: action.payload,
        isAuthenticated: true,
        isLoading: false,
        success: true,
      };
    case AUTH_ERROR:
    case GOOGLE_SIGN_OUT:
    case SIGN_OUT:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        msg: null,
        token: null,
        user: null,
        isSignedIn: false,
        googleUserId: null,
        isAuthenticated: false,
        isLoading: false,
        success: false,
      };
    default:
      return state;
  }
}
