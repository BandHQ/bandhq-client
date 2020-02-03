import styled from 'styled-components';

const TextContent = styled.div`
  padding: ${props => props.theme.spacing.large} 0;

  p {
    margin-bottom: ${props => props.theme.spacing.midLarge};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul {
    margin-bottom: ${props => props.theme.spacing.midLarge};
  }

  li {
    margin-bottom: ${props => props.theme.spacing.base};
  }
`;

export default TextContent;
