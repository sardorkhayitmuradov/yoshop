import Layout from '../components/layout';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </div>)
}
