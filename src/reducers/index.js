import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import msgReducer from './msgReducer';
import errorReducer from './errorReducer';
import dashboardReducer from './dashboardReducer';

export default combineReducers({
  msg: msgReducer,
  auth: authReducer,
  error: errorReducer,
  dashboard: dashboardReducer,
});
