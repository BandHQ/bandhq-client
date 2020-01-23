import React, { useEffect } from 'react';
import { globalHistory, Router } from '@reach/router';

import Home from './views/Home';

const App = () => {
  // Hook into router change event
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        if (window.gtag) {
          window.gtag('config', 'UA-156805282-1');
        }

        window.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Home default path="/" />
      </Router>
    </>
  );
};

export default App;
