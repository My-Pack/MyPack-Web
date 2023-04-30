import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
  }

  html, body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.white};
  }

  a {
    all: unset;
  }
`;

export default GlobalStyle;
