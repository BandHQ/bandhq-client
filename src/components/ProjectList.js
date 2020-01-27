import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ImageLoader from './ImageLoader';

import Container from '../styles/Container';

import image from '../assets/screenshot-1.png';

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
  margin-bottom: ${props => props.theme.spacing.large};
`;

const ProjectList = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Find a band</Title>

        <Text>
          Hold tight! The BandHQ 'Find a Band' tool is coming very soon. Sign up
          below to get early access.
        </Text>

        <Button to="/sign-up">Sign up</Button>

        <ImageLoader  alt="Find a band" imageUrl={image} screenshot noBorder marginTop />
      </Container>
    </Wrapper>
  );
};

export default ProjectList;
