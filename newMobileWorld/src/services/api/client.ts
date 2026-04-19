import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import * as Keychain from 'react-native-keychain';

import { getApiBaseUrl } from '@config/env';
import { API_TIMEOUT_MS } from '@constants/api';
import { AUTH_KEYCHAIN_SERVICE } from '@constants/auth';
import { apiLogger } from '@services/analytics/logger';

const createClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: getApiBaseUrl(),
    timeout: API_TIMEOUT_MS,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const credentials = await Keychain.getGenericPassword({
        service: AUTH_KEYCHAIN_SERVICE,
      });
      const token = credentials ? credentials.password : '';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      apiLogger.logRequest({
        method: config.method?.toUpperCase() ?? 'GET',
        url: config.url ?? '',
        data: config.data,
      });
      return config;
    },
    async (error: unknown) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      apiLogger.logResponse({
        status: response.status,
        url: response.config.url ?? '',
      });
      return response;
    },
    async (error: unknown) => {
      apiLogger.logError({ error });
      return Promise.reject(error);
    },
  );

  return instance;
};

export const apiClient = createClient();
