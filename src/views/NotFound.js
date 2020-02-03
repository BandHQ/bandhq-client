import React from 'react';
import { Link } from '@reach/router';

import Layout from '../components/Layout';
import Container from '../styles/Container';
import TextContent from '../styles/TextContent';

const NotFound = () => {
  return (
    <Layout title="Page not found">
      <Container>
        <TextContent>
          <h1>Ooops, page not found!</h1>

          <p>
            Dang, we've just messed up the guitar solo haven't we. Maybe head
            back to the <Link to="/">homepage</Link> and navigate from there.
          </p>
        </TextContent>
      </Container>
    </Layout>
  );
};

export default NotFound;
