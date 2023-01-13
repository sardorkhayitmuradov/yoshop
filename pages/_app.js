import Layout from '../components/layout';
import { NextSeo } from 'next-seo';
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
      <>
        <SessionProvider session={pageProps.session}>
          <NextSeo
              title='YoShop'
              titleTemplate='YoShop E-commerce-website'
              description='YoShop E-commerce website for Clients products'
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </>
  )
}
