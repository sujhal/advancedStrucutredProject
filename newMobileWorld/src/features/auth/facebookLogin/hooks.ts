import { useState } from 'react';

import type { FacebookLoginResult } from './types';

type UseFacebookLoginReturn = {
  isLoading: boolean;
  loginWithFacebook: () => Promise<FacebookLoginResult>;
};

export const useFacebookLogin = (): UseFacebookLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithFacebook = async (): Promise<FacebookLoginResult> => {
    setIsLoading(true);

    try {
      await new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      return {
        provider: 'facebook',
        token: 'facebook-mock-token',
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    loginWithFacebook,
  };
};
