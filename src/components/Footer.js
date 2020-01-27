import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import Container from '../styles/Container';

import { ReactComponent as FacebookLogo } from '../assets/facebook-logo.svg';

import { ReactComponent as InstagramLogo } from '../assets/instagram-logo.svg';

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

const MetaLinks = styled.div`
  a {
    color: ${props => props.theme.colors.white50};
    display: inline-block;
    margin-left: ${props => props.theme.spacing.xSmall};

    &:hover {
      color: ${props => props.theme.colors.white80};
    }
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;

  li {
    list-style: none;
    padding: 0 ${props => props.theme.spacing.xxSmall};
    margin: 0;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const SocialLink = styled.a`
  display: block;

  width: 20px;
  height: 20px;

  svg {
    fill: ${props => props.theme.colors.white50};
    display: block;
    width: 20px;
    height: 20px;
  }

  &:hover {
    svg {
      fill: ${props => props.theme.colors.white80};
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          © Copyright 2020 BandHQ. All rights reserved.

          <MetaLinks>
            <Link to="/find-a-band">Find a Band</Link>
            <Link to="/musicians-wanted">Musicians Wanted</Link>
            <Link to="/find-band-members">Find Band Members</Link>
          </MetaLinks>

          <SocialLinks>
            <li>
              <SocialLink
                href="https://www.facebook.com/bandhqapp"
                target="_blank"
              >
                <FacebookLogo />
              </SocialLink>
            </li>

            <li>
              <SocialLink
                href="https://www.instagram.com/bandhq.app/"
                target="_blank"
              >
                <InstagramLogo />
              </SocialLink>
            </li>
          </SocialLinks>
        </Inner>
      </Container>
    </Wrapper>
  );
};

export default Footer;
