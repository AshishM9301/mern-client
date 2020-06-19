import { REGISTERSUCCESS } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isRegistered: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTERSUCCESS:
      return {
        ...state,
        ...action.payload,
        isRegistered: true,
      };
    default:
      return state;
  }
}
