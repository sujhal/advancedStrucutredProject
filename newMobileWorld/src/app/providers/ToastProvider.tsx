import React, { type PropsWithChildren } from 'react';
import Toast from 'react-native-toast-message';

export const ToastProvider = ({ children }: PropsWithChildren) => (
  <>
    {children}
    <Toast />
  </>
);
