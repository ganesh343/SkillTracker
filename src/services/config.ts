import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: ''
});

http.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
http.defaults.headers.post['Access-Control-Allow-Credentials'] = 'true';
http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.request.use((config) => {
  // const [storedValue] = useLocalStorage('user', null);
  // const { values } = storedValue;
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;
