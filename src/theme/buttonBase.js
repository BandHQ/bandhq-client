import theme from './main';

const buttonBase = `
  background-color: ${theme.colors.green500};
  border-radius: 50px;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.15rem;
  padding: 17px ${theme.spacing.midLarge};
  line-height: 1;
  text-decoration: none;
  min-width: 150px;
  text-align: center;

  &:hover,
  &:active {
    background-color: ${theme.colors.green600};
  }
`;

export default buttonBase;
