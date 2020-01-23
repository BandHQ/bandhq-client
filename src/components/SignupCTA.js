import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import Container from '../styles/Container';

const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.midLarge} 0;

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.xLarge} 0;
  `}
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
`;

const SignupCTA = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Button href="#sign-up">sign up for eary access</Button>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default SignupCTA;
