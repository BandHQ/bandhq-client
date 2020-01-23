import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImageLoader from './ImageLoader';

import Container from '../styles/Container';

const Wrapper = styled.section`
  padding: ${props => props.theme.spacing.small} 0;

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.large} 0;
  `}

  ${props =>
    props.first &&
    `
    padding-top: ${props.theme.spacing.midLarge};
  `}

  ${props =>
    props.first &&
    props.theme.breakpoints.small`
      padding-top: ${props.theme.spacing.xLarge};
  `}

  ${props =>
    props.last &&
    `
    padding-bottom: ${props.theme.spacing.midLarge};
  `}

  ${props =>
    props.last &&
    props.theme.breakpoints.small`
      padding-bottom: ${props.theme.spacing.xLarge};
    `}
`;

const Inner = styled.div`
  ${props => props.theme.breakpoints.small`
    display: flex;
    align-items: center;
    margin: 0 -${props.theme.spacing.midLarge};
  `}

  ${props =>
    props.reverse &&
    `
    flex-direction: row-reverse;
  `}
`;

const Column = styled.div`
  margin-bottom: ${props => props.theme.spacing.midLarge};

  ${props => props.theme.breakpoints.small`
    width: 50%;
    flex: 0 0 50%;
    padding: 0 ${props.theme.spacing.midLarge};
    margin-bottom: 0;
  `}
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.xLarge};
`;

const SplitContent = ({ title, children, image, ...props }) => {
  return (
    <Wrapper {...props}>
      <Container>
        <Inner {...props}>
          <Column>
            <Title>{title}</Title>
            {children}
          </Column>

          <Column>
            <ImageLoader alt={title} imageUrl={image} />
          </Column>
        </Inner>
      </Container>
    </Wrapper>
  );
};

SplitContent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};

export default SplitContent;
