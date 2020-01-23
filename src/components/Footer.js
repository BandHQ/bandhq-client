import React from 'react';
import styled from 'styled-components';

import Container from '../styles/Container';

const Wrapper = styled.footer`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white50};
  height: ${props => props.theme.components.footerHeight};
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xSmall};
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>© Copyright 2020 BandHQ. All rights reserved. </Container>
    </Wrapper>
  );
};

export default Footer;
