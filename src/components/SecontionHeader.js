import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from '../styles/Container';

const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.midLarge} 0 0 0;
  text-align: center;

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.xLarge} 0 0 0;
  `}
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.xxLarge};
`;

const Text = styled.p`
  margin: 0 auto;
  max-width: 700px;
`;

const SectionHeader = ({ title, text }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>

        <Text>{text}</Text>
      </Container>
    </Wrapper>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SectionHeader;
