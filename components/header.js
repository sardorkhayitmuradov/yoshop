import Image from "next/image"
import LogoImage from '../public/assets/images/logo.svg';
import Link from "next/link";

const Header = () => {
    return (
      <header className="site-header">
        <div className="site-container">
          <Link href={'/'}>
              <Image src={LogoImage} alt="site-logo" width='185' height='65' />   
          </Link>
        </div>
      </header>
    )
  }
  
  export default Header