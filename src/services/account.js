import axios from 'axios';
import API from '../apis/routes';
import {POST} from 'src/apis/ultils';
import { axiosInstance } from 'src/apis/config';

const login = async (email, password) => {
  try {
    const res = await  POST('login', {
      email, password
    });
    console.log('login', res);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
    return res;
  } catch (error) {
    console.log('error', error.response);
    return error;
  }
};


export {login};
