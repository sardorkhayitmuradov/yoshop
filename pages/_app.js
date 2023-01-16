import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if(router.pathname === '/404') return <Component {...pageProps} />;

  return (

        <SessionProvider session={pageProps.session}>
          <NextSeo
              title='YoShop'
              titleTemplate='YoShop'
              description='YoShop E-commerce website for Clients products'
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>

  )
}
