import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import main from './theme/main';
import * as serviceWorker from './serviceWorker';

import client, { persistor } from './config/client';

const SCHEMA_VERSION = '1';
const SCHEMA_VERSION_KEY = 'BANDHQ_SCHEMA_VERSION';

const renderApp = async () => {
  const currentVersion = await window.localStorage.getItem(SCHEMA_VERSION_KEY);

  try {
    if (currentVersion === SCHEMA_VERSION) {
      await persistor.restore();
    } else {
      await persistor.purge();
      await window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
    }
  } catch (err) {
    console.error(err);
  }

  ReactDOM.render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={main}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

renderApp();
