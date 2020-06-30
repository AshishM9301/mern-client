import {
  REGISTERSUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isRegistered: false,
  user: null,
  success: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTERSUCCESS:
      return {
        ...state,
        success: true,
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return {
        ...state,
        msg: null,
        success: false,
      };
    default:
      return state;
  }
}
