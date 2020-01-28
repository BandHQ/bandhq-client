import React from 'react';
import styled from 'styled-components';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { colors } from '../theme/main';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = () => {
  return (
    <Wrapper>
      <PropagateLoader color={colors.green500} size={10} loading />
    </Wrapper>
  );
};

export default Loader;
