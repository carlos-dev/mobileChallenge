import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'https://sofit-mobile-challenge.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    if (!config.url!.startsWith('/start')) {
      const token = await AsyncStorage.getItem('token');

      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    Promise.reject(err);
  },
);
