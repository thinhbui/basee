const env = 'dev'; // beta/prod

const config = {
  dev: {
    BASE_API_URL: 'http://192.168.2.100:8990/api',
    BASE_URL: 'http://192.168.2.100:8990/',
  }
};

const API = config[env];

export default API;
