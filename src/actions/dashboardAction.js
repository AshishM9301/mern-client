import { GET_PAYMENT, GET_PROFILE } from './types';

export const clickedProfileButton = (id = null) => {
  return {
    type: GET_PROFILE,
    payload: { id },
  };
};

export const clickedPaymentButton = (id = null) => {
  return {
    type: GET_PAYMENT,
    payload: { id },
  };
};
