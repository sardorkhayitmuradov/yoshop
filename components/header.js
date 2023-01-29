import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { LanguageSwitcher } from "./Language-switcher";
// import { useTranslation } from "next-i18next";
import {useState , useContext } from "react";
import { ModalContext } from "../context/modal";
import Modal from "./Modal";
import LogoImage from '../public/assets/images/logo.svg';

const Header = ({headerLang}) => {
  const { visible,setVisible } = useContext(ModalContext);
  const [selected, setSelected] = useState("/");
  const router = useRouter()
  const {locale ,   locales , push} = useRouter()
  const handleClick = (linkNumber) => () => {
    setSelected(linkNumber);
  };
  let {licenses, equipment, resources, company, cummunity ,contact , login ,signup , cart} = headerLang
  console.log(cummunity)
  
    return (
      <>
        <Modal />
        <header className="py-3" id="#top">      
        <div className="site-container flex items-center justify-between">
              <Link href={'/'}>
                  <Image src={LogoImage} alt="site-logo" width={185} height={65} onClick={handleClick(0)} />   
              </Link>
              <ul className="flex items-center max-w-[600px] w-full justify-between text-[14px] leading-[25px]">
                <li>
                  <Link href={'/licenses'} onClick={handleClick("/licenses")} className={`${router.pathname == "/licenses" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2"}`}>
                   {
                    licenses
                   }
                  </Link>
                </li>
           
                <li>
                  <Link href={'/equipment'} onClick={handleClick("/equipment")} className={`${router.pathname == "/equipment" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    equipment
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/resources'} onClick={handleClick("/resources")} className={`${router.pathname == "/resources" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    resources
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/company'} onClick={handleClick("/company")} className={`${router.pathname == "/company" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    company
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/community'} onClick={handleClick("/community")} className={`${router.pathname == "/community" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    cummunity
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/contact'} onClick={handleClick("/contact")} className={`${router.pathname == "/contact" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    contact
                   }
                  </Link>
                </li>
              </ul>
        
            <div className="header-right flex items-center max-w-[340px] w-full justify-between text-[14px] leading-[25px]">
              <LanguageSwitcher />
              <Link href={'/'}>
                {
                  login
                }
              </Link>
              <button className="px-[20px] py-[8px] bg-[#7D66BB] text-white rounded-md">
                {
                  signup
                }
              </button>
              <p className="cursor-pointer relative" onClick={()=> setVisible(!visible)}>
                <span className="absolute -top-2 -right-4 bg-[#FF588A] text-[8px] leading-[16px] text-white rounded-[10px] w-[12px] h-[12px] flex items-center justify-center p-2">0</span>
                  {
                    cart
                   }
              </p>
            </div>
        </div>
        </header>
      </>
    )
}
  
export default Header