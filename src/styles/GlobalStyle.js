import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`${({ theme }) => `
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,400i,700&display=swap');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  ::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }

  ::-moz-selection {
    color: ${theme.colors.white};
    background: ${theme.colors.black};
  }

  html,
  body {
    -moz-osx-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backface-visibility: hidden;
    -webkit-font-smoothing: antialiased !important;
    background-color: ${theme.colors.black}; 
    color: ${theme.base.fontColor};
    font-family: ${theme.base.fontFamily};
    font-size: ${theme.base.fontSize};
    font-weight: normal;
    height: 100%;
    line-height: 1.6;
    margin: 0;
    min-height: 100%;
    min-width: 320px;
    position: relative;
    text-rendering: optimizeLegibility !important;
    width: 100%;
    z-index: 0;
  }

  a[href*="mailto:"] {
    word-wrap: break-word;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: ${theme.base.fontSize};
    outline: none;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family:  ${theme.base.headingFontFamily};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacing.small};
    margin-top: 0;
  }

  {/* Reset Lists */}
  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  {/* Images */}
  figure {
    margin: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    color: ${theme.colors.green500};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: ${theme.spacing.small};

    b,
    strong {
      font-weight: bold;
    }

    i,
    em {
      font-style: italic;
    }
  }

  svg {
    display: inline-block;
  }

  a,
  input,
  select,
  textarea,
  button,
  svg,
  [class^="c-btn"] {
    transition-duration: ${theme.base.transitionSpeed};
    transition-property: background-color, color, opacity, border, border-left, border-right, border-color, transform, fill;
    transition-timing-function: ${theme.easing.move};
    transform-origin: center center;
  }
`}`;

export default GlobalStyle;
