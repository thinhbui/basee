import {login} from '../../services/account';
import {loginSuccess} from '../actions/auth';
import {carHeroAPI} from 'src/apis/ultils';

const loginMiddleware = (email, password) => dispatch =>
  login(email, password)
    .then(res => {
      if (res.data.success) {
        dispatch(loginSuccess(res.data));
        return res.data;
      } else return res;
    })
    .catch((err) => {
      return err.response;
    });

export {loginMiddleware};
