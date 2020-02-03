import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import tagBase from '../theme/tagBase';

const Wrapper = styled.div`
  ${tagBase}

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
  props.status === 'Established act' ||
  (props.status === 'Currently looking' &&
    `
     background-color: ${props.theme.colors.green500};
     color:  ${props.theme.colors.white};
  `)}
`;

const Tag = ({ status }) => {
  return <Wrapper status={status}>{status}</Wrapper>;
};

Tag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Tag;
