import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { submitLogin } from './api';
import type { LoginResponse } from './types';
import { loginSchema, type LoginFormValues } from './validators';

type UseLoginReturn = {
  isLoading: boolean;
  login: (payload: LoginFormValues) => Promise<LoginResponse>;
};

export const useLogin = (): UseLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (payload: LoginFormValues): Promise<LoginResponse> => {
    setIsLoading(true);

    try {
      return await submitLogin(payload);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    login,
  };
};

export const useLoginForm = () => {
  return useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });
};
