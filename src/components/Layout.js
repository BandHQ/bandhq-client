import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  background-color: ${props => props.theme.colors.grey100};
  min-height: calc(
    100vh - ${props => props.theme.components.headerHeight} -
      ${props => props.theme.components.footerHeight}
  );
`;

const Home = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{`BandHQ - ${title}`}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>

      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Home;
