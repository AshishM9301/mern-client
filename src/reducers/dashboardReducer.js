import { GET_PROFILE, GET_PAYMENT } from '../actions/types';

const initialstate = {
  id: null,
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        id: action.payload.id,
      };
    case GET_PAYMENT:
      return {
        id: action.payload.id,
      };
    default:
      return state;
  }
}
