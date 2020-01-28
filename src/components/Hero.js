import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';

import Container from '../styles/Container';

const Wrapper = styled.section`
  background: ${props => props.theme.gradients.blueGreen};
  color: ${props => props.theme.colors.white};
  display: flex;
  padding: ${props => props.theme.spacing.large} 0;
  align-items: center;
  min-height: calc(
    100vh - ${props => props.theme.components.headerHeight} -
      ${props => props.theme.components.footerHeight}
  );

  ${props => props.theme.breakpoints.small`
    padding: ${props.theme.spacing.xLarge} 0;
  `}


  ${props =>
    props.small &&
    `
      padding: ${props.theme.spacing.large} 0;
      min-height: 0;
    `}

    ${props =>
      props.small &&
      props.theme.breakpoints.small`
        padding: ${props.theme.spacing.xLarge} 0;
    `}
  `;

const Inner = styled.div`
  max-width: 760px;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xxxLarge};
  line-height: 1;

  ${props => props.theme.breakpoints.medium`
    font-size: ${props.theme.fontSizes.xxxxLarge};
  `}


  ${props =>
  props.small &&
  `
  font-size: ${props.theme.fontSizes.xxLarge};
  `}

  ${props =>
    props.small &&
    props.theme.breakpoints.small`
    font-size: ${props.theme.fontSizes.xxxLarge};
  `}

`;

const SubTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xLarge};
  line-height: 1.3;

  ${props =>
  props.small &&
  `
  font-size: ${props.theme.fontSizes.large};
  `}
`;

const Action = styled.div`
  margin-top: ${props => props.theme.spacing.large};
`;

const Hero = ({ title, subTitle, action, ...props }) => {
  return (
    <Wrapper {...props}>
      <Container>
        <Inner>
          <Title {...props}>{title}</Title>
          <SubTitle {...props}>{subTitle}</SubTitle>

          {action && (
            <Action>
              <Button {...action}>{action.label}</Button>
            </Action>
          )}
        </Inner>
      </Container>
    </Wrapper>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  action: PropTypes.shape({
    label: PropTypes.string,
  }),
};

Hero.defaultProps = {
  action: null,
};

export default Hero;
