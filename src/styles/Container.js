import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => props.theme.grid.maxWidth};
  margin: 0 auto;
  width: 100%;
  padding: 0 ${props => props.theme.spacing.midLarge};

  ${props =>
    props.noContainer &&
    `
    max-width: none;
  `}
`;

export default Container;
