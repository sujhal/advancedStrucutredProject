import React, { type PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

import { ApolloProvider } from '@app/providers/ApolloProvider';
import { ThemeProvider } from '@app/providers/ThemeProvider';
import { ToastProvider } from '@app/providers/ToastProvider';
import { i18n } from '@i18n';

export const AppProviders = ({ children }: PropsWithChildren) => (
  <ApolloProvider>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </I18nextProvider>
  </ApolloProvider>
);
