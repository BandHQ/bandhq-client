import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  padding: ${props => props.theme.spacing.xSmall};
  margin: 0;
  background-color: ${props => props.theme.colors.black2};

  ${props =>
    props.type === 'error' &&
    `
  background-color: ${props.theme.colors.red100};
  color: ${props.theme.colors.red500};
  `}

  ${props =>
    props.type === 'success' &&
    `
  background-color: ${props.theme.colors.green100};
  color: ${props.theme.colors.green500};
  `}
`;

const Notification = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

Notification.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Notification);
