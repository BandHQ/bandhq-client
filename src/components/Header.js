import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import Navigation from './Navigation';

import Container from '../styles/Container';

import { ReactComponent as Logo } from '../assets/bandHQLogo.svg';

const Wrapper = styled.header`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  height: ${props => props.theme.components.headerHeight};
  display: flex;
  align-items: center;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & svg {
    width: 90px;
    height: 26px;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  width: 90px;
  height: 26px;

  & svg {
    width: 90px;
    height: 26px;
  }

  &:hover,
  &:active {
    opacity: 0.7;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <LogoLink to="/">
            <Logo />
          </LogoLink>

          <Navigation />
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Header;
