import axios from 'axios';

// origin

const api = axios.create({
  withCredentials: true,
  baseURL: '/api',
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    return Promise.reject(err);
  }
);

export default api;
