import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import buttonBase from '../theme/buttonBase';

import getButtonElement from '../utils/getButtonElement';

const Wrapper = styled.a`
  ${({ theme, small, transparent }) => `

  ${buttonBase}

  ${small &&
    `
    padding: ${theme.spacing.xSmall} ${theme.spacing.base};
    font-size: ${theme.fontSizes.xSmall};
  `}

  ${transparent &&
    `
    background-color: transparent;

    &:hover, &:active {
      background-color: ${theme.colors.white5};
    }
  `}
`}
`;

const Button = ({ children, ...props }) => {
  const elementType = getButtonElement(props);
  const ElementType = Wrapper.withComponent(elementType);

  return <ElementType {...props}>{children}</ElementType>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
