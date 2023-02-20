import { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config';

export default function Document(props) {
  const currentLocale =
  // eslint-disable-next-line no-underscore-dangle
  props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
