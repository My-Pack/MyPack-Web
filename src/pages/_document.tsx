import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
        
        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Logo */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/logo.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
