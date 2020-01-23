import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import MailChimpForm from './MailChimpForm';

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
`;

const SubTitle = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xLarge};
  line-height: 1.3;
`;

const Hero = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>

          <MailchimpSubscribe
            url="https://app.us4.list-manage.com/subscribe/post?u=ea5d838d352af7686f80e5c7d&amp;id=cadd8e2e57"
            render={MailChimpForm}
          />
        </Inner>
      </Container>
    </Wrapper>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Hero;
