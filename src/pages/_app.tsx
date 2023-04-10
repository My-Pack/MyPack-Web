import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyPack</title>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
