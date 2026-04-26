import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { submitSignup } from './api';
import type { SignupResponse } from './types';
import { signupSchema, type SignupFormValues } from './validators';

type UseSignupReturn = {
  isLoading: boolean;
  signup: (payload: SignupFormValues) => Promise<SignupResponse>;
};

export const useSignup = (): UseSignupReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (payload: SignupFormValues): Promise<SignupResponse> => {
    setIsLoading(true);

    try {
      return await submitSignup(payload);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    signup,
  };
};

export const useSignupForm = () => {
  return useForm<SignupFormValues>({
    defaultValues: {
      email: '',
      fullName: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signupSchema),
  });
};
