import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* <meta
          http-equiv="Content-Security-Policy"
          content="frame-src 'self' *.mercadopago.com.ar *.mercadopago.com *.mercadopago.com.ar;"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
