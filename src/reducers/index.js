import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import msgReducer from './msgReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  msg: msgReducer,
  auth: authReducer,
  error: errorReducer,
});
