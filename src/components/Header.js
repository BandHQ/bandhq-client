import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import Navigation from './Navigation';

import Container from '../styles/Container';

import { ReactComponent as Logo } from '../assets/bandHQLogo.svg';

const BetaBar = styled.div`
  background-color: ${props => props.theme.colors.purple500};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
  text-align: center;
  padding: ${props => props.theme.spacing.xxSmall};

  button {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.small};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

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

const Header = ({ ...props }) => {
  const handleFeedbackClick = () => {
    if (!window.doorbell) return;

    window.doorbell.show();
  };

  return (
    <>
      <BetaBar>
        BandHQ is in Beta but we'd love to get your feedback on what features
        you'd like to see.{' '}
        <button onClick={handleFeedbackClick}>Send Feedback</button>
      </BetaBar>

      <Wrapper>
        <Container {...props}>
          <Inner>
            <LogoLink to="/">
              <Logo />
            </LogoLink>

            <Navigation />
          </Inner>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
