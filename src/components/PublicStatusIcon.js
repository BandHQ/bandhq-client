import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.div`
  height: ${props => props.theme.spacing.base};
  width: ${props => props.theme.spacing.base};
  border-radius: 100%;
  background-color: ${props => props.theme.colors.black5};

  ${props =>
    props.isPublic &&
    `
     background-color: ${props.theme.colors.green500};
  `}
`;

const PublicStatusIcon = ({ isPublic }) => {
  return <Icon isPublic={isPublic} />;
};

PublicStatusIcon.propTypes = {
  isPublic: PropTypes.bool.isRequired,
};

export default PublicStatusIcon;
