import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';
import { useSelector } from "react-redux";
import { LanguageSwitcher } from "./Language-switcher";
import Modal from "./Modal";
import LogoImage from '../public/assets/images/logo.svg';
import MenuIcon from '../public/assets/images/menu.svg';
import CloseIcon from '../public/assets/images/menu-close-icon.svg';
import BascetIcon from '../public/assets/images/basket.svg';

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const quantity = useSelector((store) => store.carts.cart.quantity);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal />
      <header className="py-3 fixed top-0 w-full left-0 bg-white z-20" id="#top">
        <div className="max-w-xl mx-auto flex items-center justify-between max-[450px]:max-w-xs max-[450px]:px-6">
          <div className="navbar-toggle" onClick={toggleMenu}>
            {
              isOpen ? <Image onClick={() => setIsOpen(true)} src={CloseIcon} alt="site-logo" width={18} height={12} className="max-[450px]:block hidden" /> : <Image onClick={() => setIsOpen(true)} src={MenuIcon} alt="site-logo" width={18} height={12} className="max-[450px]:block hidden" />
            }
          </div>

          <Link href={'/'}>
            <Image src={LogoImage} alt="site-logo" width={185} height={65} className="max-[450px]:hidden" />
          </Link>
          <ul className="flex items-center max-w-[600px] w-full justify-between text-[14px] leading-[25px] max-[450px]:hidden">
            <li>
              <Link href={'/licenses'} className={`${router.pathname == "/licenses" ? "p-2 border-b-[2px] border-[#FF588A]" : "p-2"}`}>
                {
                  t("header:licenses")
                }
              </Link>
            </li>

            <li>
              <Link href={'/equipment'} className={`${router.pathname == "/equipment" ? "p-2 border-b-[2px] border-[#FF588A]" : "p-2 hover:text-[#FF588A]"}`}>
                {
                  t("header:equipment")
                }
              </Link>
            </li>
            <li>
              <Link href={'/resources'} className={`${router.pathname == "/resources" ? "p-2 border-b-[2px] border-[#FF588A]" : "p-2 hover:text-[#FF588A]"}`}>
                {
                  t("header:resources")
                }
              </Link>
            </li>
            <li>
              <Link href={'/community'} className={`${router.pathname == "/community" ? "p-2 border-b-[2px] border-[#FF588A]" : "p-2 hover:text-[#FF588A]"}`}>
                {
                  t("header:community")
                }
              </Link>
            </li>
            <li>
              <Link href={'/company'} className={`${router.pathname == "/company" ? "p-2 border-b-[2px] border-[#FF588A]" : "p-2 hover:text-[#FF588A]"}`}>
                {
                  t("header:company")
                  // 
                }
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className={`${router.pathname == "/contact" ? "p-2 border-b-[2px] border-[#FF588A]" : "p-2 hover:text-[#FF588A]"}`}>
                {
                  t("header:contact")
                }
              </Link>
            </li>
          </ul>
          <Link href={'/cart'} className="cursor-pointer relative max-[450px]:block hidden" >
            <span className="absolute -top-1 -right-1 bg-[#FF588A] text-[8px] leading-[16px] text-white rounded-[10px] w-[12px] h-[12px] flex items-center justify-center p-1">{quantity}</span>
            <Image src={BascetIcon} alt="site-logo" width={16} height={20} />
          </Link>

          <div className="header-right flex items-center max-w-[380px] w-full space-x-8 text-[14px] leading-[25px] max-[450px]:hidden">
            {/* Added space-x-8, removed justift-between */}
            <LanguageSwitcher />
            {/* <Link href={'/'}>
              {
                t("header:login")
              }
            </Link>
            <button className="px-[20px] py-[8px] bg-[#7D66BB] text-white rounded-md">
              {
                t("header:signup")
              }
            </button>
            <Link href={'/cart'} className="cursor-pointer relative" >
              <span className="absolute -top-2 -right-4 bg-[#FF588A] text-[8px] leading-[16px] text-white rounded-[10px] w-[12px] h-[12px] flex items-center justify-center p-2">{quantity}</span>
              {
                t("header:cart")
              }
            </Link> */}
          </div>
        </div>
        {
          isOpen && <div className="bg-[#fff] absolute max-[450px]:w-[60%] max-[450px]:h-auto">
            <ul className="flex items-start flex-col px-10 py-3 class">
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/'} className={`${router.pathname == "/" ? " border-b-[2px] border-[#FF588A]" : ""}`}>
                  {
                    t("header:home")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/licenses'} className={`${router.pathname == "/licenses" ? " border-b-[2px] border-[#FF588A]" : ""}`}>
                  {
                    t("header:licenses")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/equipment'} className={`${router.pathname == "/equipment" ? " border-b-[2px] border-[#FF588A]" : " hover:text-[#FF588A]"}`}>
                  {
                    t("header:equipment")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/resources'} className={`${router.pathname == "/resources" ? " border-b-[2px] border-[#FF588A]" : " hover:text-[#FF588A]"}`}>
                  {
                    t("header:resources")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/company'} className={`${router.pathname == "/company" ? " border-b-[2px] border-[#FF588A]" : " hover:text-[#FF588A]"}`}>
                  {
                    t("header:company")
                    // 
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/community'} className={`${router.pathname == "/community" ? " border-b-[2px] border-[#FF588A]" : " hover:text-[#FF588A]"}`}>
                  {
                    t("header:community")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/contact'} className={`${router.pathname == "/contact" ? " border-b-[2px] border-[#FF588A]" : " hover:text-[#FF588A]"}`}>
                  {
                    t("header:contact")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <Link href={'/'} className="">
                  {
                    t("header:login")
                  }
                </Link>
              </li>
              <li className="mb-3" onClick={() => setIsOpen(false)}>
                <button className="rounded-md">
                  {
                    t("header:signup")
                  }
                </button>
              </li>
              <li className="mb-3">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        }
      </header>
    </>
  );
};

export default Header;