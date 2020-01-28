import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Button from './Button';

import Container from '../styles/Container';

import { IS_AUTHENTICATED } from '../graph/auth';

const Wrapper = styled.section`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.midLarge} 0;
  text-align: center;

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.xLarge} 0;
  `}
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.xxLarge};
`;

const Text = styled.p`
  margin: 0 auto ${props => props.theme.spacing.large};
  max-width: 700px;
`;

const ProjectList = () => {
  const {
    data: { isAuthenticated },
  } = useQuery(IS_AUTHENTICATED);

  if (isAuthenticated) {
    return (
      <Wrapper>
        <Container>
          <Title>Find a band</Title>

          <p>Hold tight! The BandHQ 'Find a Band' tool is coming very soon.</p>

          <p>
            Here you'll be able to search bands that are looking for musicians
            by location, genre or similar artists.
          </p>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Title>Find a band</Title>

        <Text>
          Hold tight! The BandHQ 'Find a Band' tool is coming very soon. Sign up
          below to get early access.
        </Text>

        <Button to="/sign-up">Sign up</Button>
      </Container>
    </Wrapper>
  );
};

export default ProjectList;
