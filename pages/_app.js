import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/layout';
import ModalProvider from "../context/modal";
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css'
import '../components/Checkbox/check.css'
import '../components/SaveCheckbox/SaveCheckbox.css'

function App({ Component, pageProps }) {
  const router = useRouter();

  if(router.pathname === '/404') return <Component {...pageProps} />;

  return (
    <Provider store={store}>
      <ModalProvider>
            <NextSeo
                title='YoShop'
                titleTemplate='YoShop'
                description='YoShop E-commerce'
            />
            <Layout>
                <Component {...pageProps} />
            </Layout>
      </ModalProvider>
    </Provider>
  )
}

export default appWithTranslation(App)
