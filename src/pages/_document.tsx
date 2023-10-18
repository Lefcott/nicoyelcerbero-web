import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* <meta
          http-equiv="Content-Security-Policy"
          content="frame-src 'self' *.mercadopago.com.ar *.mercadopago.com *.mercadopago.com.ar;"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
