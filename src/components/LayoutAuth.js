import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  padding: ${props => props.theme.spacing.midLarge};
  min-height: calc(
    100vh - ${props => props.theme.components.headerHeight} -
      ${props => props.theme.components.footerHeight}
  );

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.large};
  `}
`;

const Inner = styled.div`
  margin: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.base.radius};
  padding: ${props => props.theme.spacing.base};
  border: solid 1px ${props => props.theme.colors.grey100};
  box-shadow: 0px 0px 100px ${props => props.theme.colors.black50};
  width: 100%;

  ${props => props.theme.breakpoints.small`
    max-width: 400px;
    padding: ${props.theme.spacing.midLarge};
  `}
`;

const LayoutAuth = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>{`BandHQ - ${title}`}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>

      <Header />

      <Main>
        <Inner>{children}</Inner>
      </Main>

      <Footer />
    </>
  );
};

LayoutAuth.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LayoutAuth;
