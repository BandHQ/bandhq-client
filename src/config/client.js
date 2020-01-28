/**
 * @format
 * @flow
 */
/* eslint-disable */

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { RetryLink } from 'apollo-link-retry';
import { ApolloLink, Observable } from 'apollo-link';
import { navigate } from '@reach/router';
import { createUploadLink } from 'apollo-upload-client';

import { GET_TOKEN } from '../graph/auth';

const DEFAULTS = {
  __typename: 'Query',
  token: false,
  isAuthenticated: false,
};

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri: process.env.REACT_APP_API_URL,
});

const retryLink = new RetryLink();

const resetAuth = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors && graphQLErrors.length) {
      console.error(graphQLErrors);

      for (const err in graphQLErrors) {
        if (err.message === 'Token is blacklisted') {
          cache.reset();
        }

        if (err.message === 'Token is invalid or expired') {
          cache.reset();
        }

        if (err.message === 'User not authenticated') {
          cache.reset();
        }
      }
    }

    if (networkError) {
      console.error(networkError);

      if (networkError.response && networkError.response.status === 401) {
        client.clearStore();
        client.writeData({ data: { isAuthenticated: false } });
        navigate('/');
      }
    }

    return false;
  },
);

const authLink = setContext((_, { headers }) => {
  try {
    const data = cache.readQuery({ query: GET_TOKEN });

    return {
      headers: {
        ...headers,
        authorization: data.token ? `Bearer ${data.token}` : null,
      },
    };
  } catch (err) {
    return headers;
  }
}).concat(resetAuth);

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([authLink, retryLink, httpLink]),
  resolvers: {},
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

export const persistor = new CachePersistor({
  cache: client.cache,
  storage: window.localStorage,
  debug: true,
});

client.persistor = persistor;

client.onClearStore(() => {
  cache.writeData({
    data: DEFAULTS,
  });
});

// setup defaults
cache.writeData({
  data: DEFAULTS,
});

export default client;
