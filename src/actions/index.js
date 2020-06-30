import {
  ERROR_DELETE,
  ERROR_FETCH,
  ERROR_SHOW,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_OUT,
  GET_ERROR,
  CLEAR_ERROR,
  REGISTERSUCCESS,
} from './types';

import { returnError } from './errorAction';

import connect from '../routes/connect';
import Axios from 'axios';
import { getMessage } from './msgAction';

export const signIn = (formValues) => {
  return (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(formValues);
    Axios.post('http://localhost:5000/api/users/login', body, config)
      .then((res) => {
        dispatch(getMessage(res.data.message, 'LOGIN_SUCCESS'));
        dispatch({
          type: LOGIN_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch(returnError(err.response.data.errorMessage, 'LOGIN_FAIL'));
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };
};

export const register = (formValues) => {
  return (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(formValues);
    if (formValues.password !== formValues.repassword) {
      dispatch(returnError('Password did not Match', 'REGISTER_FAIL'));
      dispatch({
        type: REGISTER_FAIL,
      });
    } else {
      Axios.post('http://localhost:5000/api/users/register', body, config)
        .then((res) => {
          dispatch(getMessage(res.data.message, 'REGISTERSUCCESS'));
          dispatch({
            type: REGISTERSUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch(
            returnError(err.response.data.errorMessage, 'REGISTER_FAIL')
          );
          dispatch({
            type: REGISTER_FAIL,
          });
        });
    }
  };
};
