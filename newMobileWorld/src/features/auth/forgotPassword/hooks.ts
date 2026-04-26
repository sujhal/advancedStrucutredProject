import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { submitForgotPassword } from './api';
import type { ForgotPasswordResponse } from './types';
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from './validators';

type UseForgotPasswordReturn = {
  isLoading: boolean;
  forgotPassword: (payload: ForgotPasswordFormValues) => Promise<ForgotPasswordResponse>;
};

export const useForgotPassword = (): UseForgotPasswordReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword = async (
    payload: ForgotPasswordFormValues,
  ): Promise<ForgotPasswordResponse> => {
    setIsLoading(true);

    try {
      return await submitForgotPassword(payload);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    forgotPassword,
    isLoading,
  };
};

export const useForgotPasswordForm = () => {
  return useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
  });
};
