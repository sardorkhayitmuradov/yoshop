import Image from "next/image"
import LogoImage from '../public/assets/images/logo.svg';
import Link from "next/link";

const Header = () => {
    return (
      <header className="site-header pb-[5px]">      
        <div className="site-container flex items-start justify-between">
            <div className="header-left flex items-start max-w-[800px] w-full justify-between">
              <Link href={'/'} className="pt-[21px]">
                  <Image src={LogoImage} alt="site-logo" width={185} height={65} />   
              </Link>
              <ul className="header-navbar flex items-center max-w-[600px] w-full justify-between text-sm pt-[31px]">
                <li className="navbar-item">
                  <Link href={'/licenses'}>
                    Licenses
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href={'/equipment'}>
                    Equipment
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href={'/resources'}>
                    Resources
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href={'/company'}>
                    Company
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href={'/community'}>
                    Community
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link href={'/contact'}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header-right flex items-center pt-[21px] max-w-[314px] w-full justify-between">
              <select name="cars" id="cars" className="border-none bg-transparent text-white outline-none">
                <option value="eng" className="bg-black border-none p-3 m-3 text-white">ENG</option>
                <option value="kor" className="bg-black border-none p-3 m-3 text-white">KOR</option>
                <option value="kzt" className="bg-black border-none p-3 m-3 text-white">KZT</option>
                <option value="rus" className="bg-black border-none p-3 m-3 text-white">RUS</option>
              </select>
              <Link href={'/'}>
                Login
              </Link>
              <button className="px-[20px] py-[8px] bg-[#4F46E5] rounded-md">Sign Up</button>
              <p className="header-cart">
                Cart
              </p>
            </div>
        </div>
      </header>
    )
}
  
export default Header