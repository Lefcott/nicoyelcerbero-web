import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <title>Ácidamente</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
