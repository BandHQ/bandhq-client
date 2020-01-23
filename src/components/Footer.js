import React from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';

import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';

const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.black};
`;

const Inner = styled.div`
  color: ${props => props.theme.colors.white50};
  height: ${props => props.theme.components.footerHeight};
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xSmall};
`;

const SocialLink = styled.a`
  display: block;
  margin-left: auto;
  width: 20px;
  height: 20px;

  svg {
    fill: ${props => props.theme.colors.white};
    display: block;
    width: 20px;
    height: 20px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          © Copyright 2020 BandHQ. All rights reserved.
          <SocialLink
            href="https://www.instagram.com/bandhq.app/"
            target="_blank"
          >
            <InstagramLogo />
          </SocialLink>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Footer;
