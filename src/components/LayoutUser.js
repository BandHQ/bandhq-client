import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';
import { useSpring, animated } from 'react-spring';

import Loader from './Loader';
import Header from './Header';
import Footer from './Footer';
import SidebarNav from './SidebarNav';
import Button from './Button';

import Container from '../styles/Container';

import { GET_USER } from '../graph/auth';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.grey100};
  min-height: calc(
    100vh - ${props => props.theme.components.headerHeight} -
      ${props => props.theme.components.footerHeight}
  );
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  padding: ${props => props.theme.spacing.small} 0;

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.large} 0;
  `}

  ${props => props.theme.breakpoints.medium`
    max-width: 860px;
    margin: 0 auto;
    padding: ${props.theme.spacing.large};
  `}
`;

const Inner = styled.div`
  width: 100%;

  ${props => props.theme.breakpoints.medium`
    display: flex;
  `}
`;

const SubTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.large};

  ${props => props.theme.breakpoints.small`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

const LayoutUser = ({ title, description, children, fetching }) => {
  const {
    data: { user },
    loading,
  } = useQuery(GET_USER, {
    onCompleted(response) {
      if (!response?.user?.email || !window.doorbell) return;
      window.doorbell.setOption('email', response.user.email);
    },
  });

  const style = useSpring({
    opacity: loading || fetching ? 0 : 1,
    transform: loading || fetching ? 'translate(0, 30px)' : 'translate(0, 1px)',
  });

  return (
    <>
      <Helmet>
        <title>{`BandHQ - ${title}`}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>

      <Header noContainer />

      <Wrapper>
        <Inner>
          <SidebarNav />

          <Main>
            <Container>
              {loading || fetching ? (
                <Loader />
              ) : (
                <animated.div style={style}>
                  <SubTitle>
                    {`Hello ${user?.name}`}

                    <Button small to="/projects/new">
                      Add new project
                    </Button>
                  </SubTitle>

                  <h1>{title}</h1>

                  {children}
                </animated.div>
              )}
            </Container>
          </Main>
        </Inner>
      </Wrapper>

      <Footer />
    </>
  );
};

LayoutUser.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  fetching: PropTypes.bool,
};

LayoutUser.defaultProps = {
  fetching: false,
  description: '',
};

export default LayoutUser;
