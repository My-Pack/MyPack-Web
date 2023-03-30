import type { AppProps } from "next/app";
import GlobalStyle from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "styles/Theme/theme";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
