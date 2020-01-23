import { hexToRgba } from '../styles/utils';
import theme from './main';

const fieldBase = `
  appearance: none;
  background-image: none;
  box-shadow: none;
  position: relative;
  width: 100%;
  background-color: ${theme.colors.white};
  border-radius: ${theme.base.radius};
  font-size: ${theme.fontSizes.base};
  color: ${theme.colors.grey500};
  padding: 14px;
  line-height: 1;
  border: solid 1px ${theme.colors.grey300};

  &::placeholder {
    color: ${hexToRgba(theme.colors.grey500, 0.5)};
  }

  &:focus: {
    border-color: ${theme.colors.grey500}
  }
`;

export default fieldBase;
