import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta property="og:image" content="%PUBLIC_URL%/thumbnail.jpg" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
