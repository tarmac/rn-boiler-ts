import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';

const httpModule = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

httpModule.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.baseURL) {
      config.baseURL = Config.API_HOST;
    }

    /*
    // Authorization header (AKA Token)
    config.headers = {
      Authorization: // You own mechanism of storage.
    }; */

    return Promise.resolve(config);
  },
  (err: AxiosError) => Promise.reject(err),
);

export default httpModule;
