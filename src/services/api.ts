import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.103:8080/api',
  timeout: 10000,
});

export default api;
