import { useState } from 'react';

import type { GoogleLoginResult } from './types';

type UseGoogleLoginReturn = {
  isLoading: boolean;
  loginWithGoogle: () => Promise<GoogleLoginResult>;
};

export const useGoogleLogin = (): UseGoogleLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async (): Promise<GoogleLoginResult> => {
    setIsLoading(true);

    try {
      await new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      return {
        provider: 'google',
        token: 'google-mock-token',
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    loginWithGoogle,
  };
};
