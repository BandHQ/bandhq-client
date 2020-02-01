import theme from './main';

const fieldBase = `
  height: ${theme.spacing.base};
  border-radius: ${theme.base.radius};
  background-color: ${theme.colors.black5};
  font-size:  ${theme.fontSizes.xxSmall};
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.1rem;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  padding: 0 ${theme.spacing.xSmall};
  color: ${theme.colors.grey500};
`;

export default fieldBase;
