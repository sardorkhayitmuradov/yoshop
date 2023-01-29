import Header from './header'
import Footer from './footer'

const Layout = ({children , header , footer}) => {
    // console.log(header)
    return (
        <>
            <Header headerLang={header} />
            {children}
            <Footer footerLang={footer} headerLang={header} />
        </>
    )
  }
  
  export default Layout