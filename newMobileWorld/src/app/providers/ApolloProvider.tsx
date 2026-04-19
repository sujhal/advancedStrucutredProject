import { ApolloProvider as NativeApolloProvider } from '@apollo/client';
import React, { type PropsWithChildren, useMemo } from 'react';

import { createApolloClient } from '@app/providers/apollo';

export const ApolloProvider = ({ children }: PropsWithChildren) => {
  const client = useMemo(() => createApolloClient(), []);
  return <NativeApolloProvider client={client}>{children}</NativeApolloProvider>;
};
