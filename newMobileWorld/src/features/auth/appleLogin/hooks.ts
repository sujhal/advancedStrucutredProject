import { useState } from 'react';

import type { AppleLoginResult } from './types';

type UseAppleLoginReturn = {
  isLoading: boolean;
  loginWithApple: () => Promise<AppleLoginResult>;
};

export const useAppleLogin = (): UseAppleLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithApple = async (): Promise<AppleLoginResult> => {
    setIsLoading(true);

    try {
      await new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      return {
        provider: 'apple',
        token: 'apple-mock-token',
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    loginWithApple,
  };
};
