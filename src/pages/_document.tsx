import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="kr">
      <Head>
        <title>MyPack</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/logo.png"
        />
        <meta name="description" content="MyPack" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
