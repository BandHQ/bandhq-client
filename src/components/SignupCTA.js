import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Button from './Button';

import Container from '../styles/Container';

import { IS_AUTHENTICATED } from '../graph/auth';

const Wrapper = styled.section`
background-color:  ${props => props.theme.colors.white} 
  padding: ${props => props.theme.spacing.midLarge} 0;

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.xLarge} 0;
  `}
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    flex: 0 0 auto;
  }
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.xLarge};
  text-align: center;
`;

const SignupCTA = () => {
  const {
    data: { isAuthenticated },
  } = useQuery(IS_AUTHENTICATED);

  if (isAuthenticated) return false;

  return (
    <Wrapper>
      <Container>
        <Inner>
          <Title>Sign up to BandHQ for early access</Title>
          <Button to="/sign-up">Sign up</Button>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default SignupCTA;
