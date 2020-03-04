import {LOGIN, LOGOUT} from './actionTypes';

const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload,
});

const loginFailure = error => ({
  type: LOGIN.FAILURE,
  error,
});

const loginRequest = (username, password) => ({
  type: LOGIN.REQUEST,
  data: {username, password},
});

const logoutRequest = () => ({
  type: LOGOUT,
});

export {loginSuccess, loginFailure, loginRequest, logoutRequest};
