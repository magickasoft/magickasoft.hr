import axios, {CreateAxiosDefaults} from 'axios';

const axiosConfig: CreateAxiosDefaults = {
  baseURL: process.env.baseURL ?? '/api/',
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const axiosClient = axios.create(axiosConfig);

axiosClient.interceptors.response.use(
  response => response,
  error => Promise.reject(new Error(error)),
);

export const API = axiosClient;
