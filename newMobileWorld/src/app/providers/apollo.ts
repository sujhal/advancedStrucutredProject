import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as Keychain from 'react-native-keychain';

import { getGraphqlUrl } from '@config/env';
import { AUTH_KEYCHAIN_SERVICE } from '@constants/auth';

export const createApolloClient = (): ApolloClient => {
  const httpLink = createHttpLink({ uri: getGraphqlUrl() });
  const authLink = setContext(async (_, { headers }) => {
    const credentials = await Keychain.getGenericPassword({
      service: AUTH_KEYCHAIN_SERVICE,
    });
    const token = credentials ? credentials.password : '';
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
