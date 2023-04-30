import { domMax, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
        <title>MyPack</title>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <LazyMotion features={domMax}>
            <GlobalStyle />
            {isMobile ? <DeviceWarning /> : ""}
            <DndProvider backend={HTML5Backend}>
              <Component {...pageProps} />
            </DndProvider>
          </LazyMotion>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
