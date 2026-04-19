import { createApi } from '@reduxjs/toolkit/query/react';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';

import { ENDPOINTS } from '@services/api/endpoints';
import { apiClient } from '@services/api/client';

import type { RawUser, User } from './types';

type AxiosBaseQueryArgs = {
  url: string;
  method: NonNullable<AxiosRequestConfig['method']>;
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
};

const axiosBaseQuery =
  (): BaseQueryFn<AxiosBaseQueryArgs, unknown, { status?: number; data?: string }> =>
  async ({ url, method, data, params }) => {
    try {
      const response = await apiClient.request({
        url,
        method,
        data,
        params,
      });
      return { data: response.data };
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data?.message ?? err.message,
        },
      };
    }
  };

export const normaliseUser = (raw: RawUser): User => ({
  id: raw.id ?? raw._id ?? '',
  email: raw.email,
  firstName: raw.first_name ?? raw.firstName ?? '',
  createdAt: raw.created_at ?? raw.createdAt ?? new Date().toISOString(),
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['User'],
  endpoints: (build) => ({
    login: build.mutation<
      { accessToken: string; user: RawUser },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: ENDPOINTS.auth.login,
        method: 'POST',
        data: body,
      }),
      transformResponse: (response: { accessToken: string; user: RawUser }) => response,
    }),
    register: build.mutation<
      { accessToken: string; user: RawUser },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: ENDPOINTS.auth.register,
        method: 'POST',
        data: body,
      }),
    }),
    forgotPassword: build.mutation<{ ok: boolean }, { email: string }>({
      query: (body) => ({
        url: ENDPOINTS.auth.forgotPassword,
        method: 'POST',
        data: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useForgotPasswordMutation } = authApi;
