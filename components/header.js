import Image from "next/image"
import Link from "next/link";
import {useState , useContext } from "react";
import { ModalContext } from "../context/modal";
import LogoImage from '../public/assets/images/logo.svg';
import Modal from "./Modal";

const Header = () => {
  const { visible,setVisible } = useContext(ModalContext);
  const [selected, setSelected] = useState(0);
  const handleClick = (linkNumber) => () => {
    setSelected(linkNumber);
  };

    return (
      <>
      <Modal />
        <header className="py-3">      
        <div className="site-container flex items-center justify-between">
              <Link href={'/'}>
                  <Image src={LogoImage} alt="site-logo" width={185} height={65} onClick={handleClick(0)} />   
              </Link>
              <ul className="flex items-center max-w-[600px] w-full justify-between text-[14px] leading-[25px]">
                <li>
                  <Link href={'/licenses'} onClick={handleClick(1)} className={`${selected == 1 ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 active:border-b-[2px] active:border-[#FF588A]"}`}>
                    Licenses
                  </Link>
                </li>
           
                <li>
                  <Link href={'/equipment'} onClick={handleClick(2)} className={`${selected == 2 ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 active:border-b-[2px] active:border-[#FF588A] hover:text-[#FF588A]"}`}>
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link href={'/resources'} onClick={handleClick(3)} className={`${selected == 3 ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 active:border-b-[2px] active:border-[#FF588A] hover:text-[#FF588A]"}`}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href={'/company'} onClick={handleClick(4)} className={`${selected == 4 ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 active:border-b-[2px] active:border-[#FF588A] hover:text-[#FF588A]"}`}>
                    Company
                  </Link>
                </li>
                <li>
                  <Link href={'/community'} onClick={handleClick(5)} className={`${selected == 5 ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 active:border-b-[2px] active:border-[#FF588A] hover:text-[#FF588A]"}`}>
                    Community
                  </Link>
                </li>
                <li>
                  <Link href={'/contact'} onClick={handleClick(6)} className={`${selected == 6 ? "p-2 border-b-[2px] border-[#FF588A]": "p-2 active:border-b-[2px] active:border-[#FF588A] hover:text-[#FF588A]"}`}>
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
              <p className="cursor-pointer relative" onClick={()=> setVisible(!visible)}>
                <span className="absolute -top-2 -right-4 bg-[#FF588A] text-[8px] leading-[16px] text-white rounded-[10px] w-[12px] h-[12px] flex items-center justify-center p-2">0</span>
                Cart
              </p>
            </div>
        </div>
        </header>
      </>
    )
}
  
export default Header