import {
  ERROR_DELETE,
  ERROR_FETCH,
  ERROR_SHOW,
  REGISTER_FAIL,
  SIGN_IN,
  SIGN_OUT,
  GET_ERROR,
  CLEAR_ERROR,
  REGISTERSUCCESS,
} from './types';
import connect from '../routes/connect';
import { Register } from '../components/Header/Register';
import Axios from 'axios';

export const getError = (error) => {
  return {
    type: GET_ERROR,
    payload: error,
  };
};

export const clearError = (error) => {
  return {
    type: CLEAR_ERROR,
  };
};

export const signIn = (dispatch, getState) => {
  return {
    type: SIGN_IN,
  };
};

export const register = (formValues) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formValues);

    const response = await Axios.post(
      'http://localhost:5000/api/users/register',
      body,
      config
    )
      .then((res) => {
        dispatch({
          type: REGISTERSUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(console.log(err), { type: REGISTER_FAIL });
      });
  };
};
