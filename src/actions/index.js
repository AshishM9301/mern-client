import {
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGN_OUT,
  REGISTERSUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
} from './types';

import { returnError } from './errorAction';

import connect from '../routes/connect';
import Axios from 'axios';
import { getMessage } from './msgAction';
import { browserHistory } from '../components/Header/Header';

export const loadUser = () => (dispatch) => {
  dispatch({ type: USER_LOADING });
  Axios.get('http://localhost:5000/api/users/auth')
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch(returnError(err.response.data, 'AUTH_ERROR'));
      dispatch({ type: AUTH_ERROR });
    });
};

export const signIn = (userId) => {
  return {
    type: GOOGLE_SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: GOOGLE_SIGN_OUT,
  };
};

export const login = (formValues) => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(formValues);
    await Axios.post('http://localhost:5000/api/users/login', body, config)
      .then((res) => {
        dispatch(getMessage(res.data.message, 'LOGIN_SUCCESS'));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
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

export const logout = () => (dispatch) => {
  dispatch({ type: SIGN_OUT });
};

export const configToken = (getState) => {
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  //If Token, add to headers
  if (token) {
    config.headers['end_auth'] = token;
  }

  return config;
};
