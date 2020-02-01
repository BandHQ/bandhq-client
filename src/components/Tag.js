import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: ${props => props.theme.spacing.base};
  border-radius: ${props => props.theme.base.radius};
  background-color: ${props => props.theme.colors.black5};
  font-size:  ${props => props.theme.fontSizes.xxSmall};
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: 0.1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.xSmall};

  ${props =>
    props.status === 'Concept' &&
    `
     background-color: ${props.theme.colors.yellow500};
     color:  ${props.theme.colors.white};
  `}

  ${props =>
    props.status === 'New band' &&
    `
     background-color: ${props.theme.colors.blue500};
     color:  ${props.theme.colors.white};
  `}

${props =>
  props.status === 'Established act' &&
  `
     background-color: ${props.theme.colors.green500};
     color:  ${props.theme.colors.white};
  `}
`;

const Tag = ({ status }) => {
  return <Wrapper status={status}>{status}</Wrapper>;
};

Tag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Tag;
