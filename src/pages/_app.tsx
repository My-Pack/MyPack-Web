import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import DeviceWarning from "src/components/DeviceWarning";
import useMediaQuery from "src/hooks/useMediaQuery";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";

function App({ Component, pageProps }: AppProps) {
  const isMobile = useMediaQuery(769);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isMobile ? <DeviceWarning /> : ""}
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
