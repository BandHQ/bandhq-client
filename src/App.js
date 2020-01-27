import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { globalHistory, Router } from '@reach/router';

import Home from './views/Home';
import FindABand from './views/FindABand';
import MusiciansWanted from './views/MusiciansWanted';
import FindBandMembers from './views/FindBandMembers';
import Login from './views/Login';
import SignUp from './views/SignUp';

import { IS_AUTHENTICATED } from './graph/auth';

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

  const {
    data: { isAuthenticated },
  } = useQuery(IS_AUTHENTICATED);

  if (!isAuthenticated) {
    return (
      <Router>
        <Login path="/login" />
        <SignUp path="/sign-up" />
        <FindABand path="/find-a-band" />
        <MusiciansWanted path="/musicians-wanted" />
        <FindBandMembers path="/find-band-members" />
        <Home default path="/" />
      </Router>
    );
  }

  return (
    <>
      <Router>
        <FindABand path="/find-a-band" />
        <MusiciansWanted path="/musicians-wanted" />
        <FindBandMembers path="/find-band-members" />
        <Home default path="/" />
      </Router>
    </>
  );
};

export default App;
