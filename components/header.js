import Image from "next/image"
import LogoImage from '../public/assets/images/logo.svg';
import Link from "next/link";

const Header = () => {
    return (
      <header className="py-3">      
        <div className="site-container flex items-center justify-between">
            
              <Link href={'/'}>
                  <Image src={LogoImage} alt="site-logo" width={185} height={65} />   
              </Link>
              <ul className="flex items-center max-w-[600px] w-full justify-between text-[14px] leading-[25px]">
                <li>
                  <Link href={'/licenses'}>
                    Licenses
                  </Link>
                </li>
           
                <li>
                  <Link href={'/equipment'}>
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link href={'/resources'}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href={'/company'}>
                    Company
                  </Link>
                </li>
                <li>
                  <Link href={'/community'}>
                    Community
                  </Link>
                </li>
                <li>
                  <Link href={'/contact'}>
                    Contact Us
                  </Link>
                </li>
              </ul>
        
            <div className="header-right flex items-center max-w-[317px] w-full justify-between text-[14px] leading-[25px]">
              <select name="languages" id="languages" className="border-none bg-transparent outline-none">
                <option value="eng" className="border-none p-3 m-3">ENG</option>
                <option value="kor" className="border-none p-3 m-3">KOR</option>
                <option value="kzt" className="border-none p-3 m-3">KZT</option>
                <option value="rus" className="border-none p-3 m-3">RUS</option>
              </select>
              <Link href={'/'}>
                Login
              </Link>
              <button className="px-[20px] py-[8px] bg-[#7D66BB] text-white rounded-md">Sign Up</button>
              <p className="header-cart">
                Cart
              </p>
            </div>
        </div>
      </header>
    )
}
  
export default Header