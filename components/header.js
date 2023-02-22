import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useTranslation } from 'next-i18next';
import { useSelector } from "react-redux";
import { LanguageSwitcher } from "./Language-switcher";
import { ModalContext } from "../context/modal";
import Modal from "./Modal";
import LogoImage from '../public/assets/images/logo.svg';

const Header = () => {
  const { visible,setVisible } = useContext(ModalContext);
  const router = useRouter();
  const { t } = useTranslation();
  const quantity = useSelector((store) => store.carts.cart.quantity);  

    return (
      <>
        <Modal />
        <header className="py-3 fixed top-0 w-full left-0 bg-white z-20" id="#top">      
        <div className="site-container flex items-center justify-between">
              <Link href={'/'}>
                  <Image src={LogoImage} alt="site-logo" width={185} height={65}/>   
              </Link>
              <ul className="flex items-center max-w-[600px] w-full justify-between text-[14px] leading-[25px]">
                <li>
                  <Link href={'/licenses'} className={`${router.pathname == "/licenses" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2"}`}>
                   {
                    t("header:licenses")
                   }
                  </Link>
                </li>
           
                <li>
                  <Link href={'/equipment'} className={`${router.pathname == "/equipment" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    t("header:equipment")
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/resources'} className={`${router.pathname == "/resources" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    t("header:resources")
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/company'}  className={`${router.pathname == "/company" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    t("header:company")
                    // 
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/community'} className={`${router.pathname == "/community" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    t("header:community")
                   }
                  </Link>
                </li>
                <li>
                  <Link href={'/contact'} className={`${router.pathname == "/contact" ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 hover:text-[#FF588A]"}`}>
                   {
                    t("header:contact")
                   }
                  </Link>
                </li>
              </ul>
        
            <div className="header-right flex items-center max-w-[380px] w-full space-x-8 text-[14px] leading-[25px]"> 
            {/* Added space-x-8, removed justift-between */}
              <LanguageSwitcher />
              <Link href={'/'}>
                {
                    t("header:login")
                }
              </Link>
              <button className="px-[20px] py-[8px] bg-[#7D66BB] text-white rounded-md">
                {
                    t("header:signup")
                }
              </button>
              <p className="cursor-pointer relative" onClick={()=> setVisible(!visible)}>
                <span className="absolute -top-2 -right-4 bg-[#FF588A] text-[8px] leading-[16px] text-white rounded-[10px] w-[12px] h-[12px] flex items-center justify-center p-2">{quantity}</span>
                  {
                    t("header:cart")
                   }
              </p>
            </div>
        </div>
        </header>
      </>
    )
}
  
export default Header