import {LOGIN, LOGOUT} from '../actions/actionTypes';
import { axiosInstance } from 'src/apis/config';

const initialState = {};
const REHYDRATE = 'persist/REHYDRATE';

export default function app(state = initialState, action) {
  if (
    action.type === REHYDRATE && action.payload
    && action.payload.authReducer
    && action.payload.authReducer.token
  ) {
    axiosInstance.defaults.headers.common.Authorization = action.payload.authReducer.token;
  }
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
