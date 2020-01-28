import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PropagateLoader from 'react-spinners/PropagateLoader';

import buttonBase from '../theme/buttonBase';

import getButtonElement from '../utils/getButtonElement';

const Wrapper = styled.a`
  ${({ theme, small, transparent, icon, disabled, fullWidth }) => `

  ${buttonBase}

  ${
    small
      ? `
    min-width: 0;
    padding: ${theme.spacing.xSmall} ${theme.spacing.base};
    font-size: ${theme.fontSizes.xSmall};
    height: auto;
  `
      : ``
  }

  ${
    fullWidth
      ? `
    width: 100%;
  `
      : ``
  }

  ${
    transparent
      ? `
    background-color: transparent;

    &:hover, &:active {
      background-color: ${theme.colors.white5};
    }
  `
      : ``
  }

  ${
    icon
      ? `
    padding: 10px;
    border-radius: 100%;
    min-width: 0;
    margin: -6px;
    display: flex;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
      fill: ${theme.colors.white};
    }
  `
      : ``
  };


  ${
    disabled
      ? `
    cursor-events: none;
    opacity: 0.5;
  `
      : ``
  }
`}
`;

const Button = ({ children, loading, ...props }) => {
  const elementType = getButtonElement(props);
  const ElementType = Wrapper.withComponent(elementType);

  const renderContent = () => {
    if (loading) {
      return <PropagateLoader color="#ffffff" size={10} loading={loading} />;
    }

    return children;
  };

  return (
    <ElementType disabled={loading} {...props}>
      {renderContent()}
    </ElementType>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default memo(Button);
