import { NextSeo } from 'next-seo';
// import { useEffect, useCallback } from 'react';
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Layout from '../components/layout';
import ModalProvider from "../context/modal";
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({
  weight: ['400', '500'],
  style: 'normal',
  subsets: ['cyrillic'],
})

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['header', footer])),
    }
  }
}

function App({ Component, pageProps }) {
  const router = useRouter();
  const {t} = useTranslation()
  // console.log(t('header:cart'));
  let headerLang = {
    licenses: t('header:licenses'),
    equipment: t('header:equipment'),
    resources: t('header:resources'),
    company: t('header:company'),
    cummunity: t('header:community'),
    contact: t('header:contact'),
    login: t('header:login'),
    signup: t('header:signup'),
    cart: t('header:cart')
  }
  let footerLang = {
    address: t('footer:address'),
    connect: t('footer:connect'),
    rights_reserved: t('footer:rights_reserved'),
  }

  if(router.pathname === '/404') return <Component {...pageProps} />;

  return (
    <ModalProvider>
        <SessionProvider session={pageProps.session}>
          <NextSeo
              title='YoShop'
              titleTemplate='YoShop'
              description='YoShop E-commerce website for Clients products'
          />
          <Layout header={headerLang} footer={footerLang}>
              <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ModalProvider>
  )
}

export default appWithTranslation(App)
