import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* <meta
          http-equiv="Content-Security-Policy"
          content="frame-src 'self' *.mercadopago.com.ar;"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
