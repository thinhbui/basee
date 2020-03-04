import axios from 'axios';

import API from './routes';

export const axiosInstance = axios.create({
  baseURL: API.BASE_API_URL,
  timeout: 5000,
});

export const HTTP_CODE = {
  SUCCESS: 200
};

export const POST = async (url, body, option) => {
  const result = await axiosInstance.post(
    url,
    body,
    option || {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return result;
};
export const GET = async (url, config) => {
  try {
    const result = await axiosInstance.get(url, config);
    return result;
  } catch (error) {
    console.log('get', error.response);
    return error;
  }
};
export const PUT = async (url, body, config) => {
  try {
    const result = await axiosInstance.put(url, body,config);
    return result;
  } catch (error) {
    console.log('put', error, error.response);
    return error;
  }
};

export const DELETE = async (url, body,config) => {
  try {
    const result = await axiosInstance.delete(url, body,config);
    return result;
  } catch (e) {
    console.log('delete', e);
    return e;
  }
};
