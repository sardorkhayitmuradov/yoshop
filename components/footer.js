import Image from "next/image";
import Link from "next/link";
import LogoImage from '../public/assets/images/logo.svg'
import FacebookIcon from '../public/assets/images/facebook.svg';
import InstagramIcon from '../public/assets/images/instagram.svg';
import GithubIcon from '../public/assets/images/github.svg';
import InboxIcon from '../public/assets/images/Inbox.svg';
import TelegramIcon from '../public/assets/images/telegram.svg';
import WhatsAppIcon from '../public/assets/images/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="py-[30px] border-t-white border-t-[2px]">
      <div className="site-container">
        <ul className="footer-list flex items-center justify-between">
          <li className="footer-items">
            <Link href={'/'}>
              <Image src={LogoImage} alt="site-logo" width={185} height={65} className="mb-[30px]" />
            </Link>
              <p className="mb-[21px] font-PoppinsSemibold leading-[180%]">Connect</p>
              <div className="footer-social-lists flex items-center justify-between max-w-[233px] w-full">
                <Link href={'/'} >
                  <Image src={FacebookIcon} alt="site-social Image" width={24} height={24} />
                </Link>
                <Link href={'/'} >
                  <Image src={InstagramIcon} alt="site-social Image" width={24} height={24} />
                </Link>
                <Link href={'/'} >
                  <Image src={GithubIcon} alt="site-social Image" width={24} height={24} /> 
                </Link>
                <Link href={'/'} >
                  <Image src={InboxIcon} alt="site-social Image" width={24} height={24} />
                </Link>
                <Link href={'/'} >
                  <Image src={TelegramIcon} alt="site-social Image" width={24} height={24} />
                </Link>
                <Link href={'/'} >
                  <Image src={WhatsAppIcon} alt="site-social Image" width={24} height={24} />
                </Link>
              </div>
          </li>
          <li className="footer-items max-w-[112px] w-full flex flex-col">
            <Link href={'/licenses'} className='font-PoppinsRegular text-base mb-[16px]'>
              Licenses
            </Link>
            <Link href={'/equipment'} className='font-PoppinsRegular text-base mb-[16px]'>
              Equipment
            </Link>
            <Link href={'/resources'} className='font-PoppinsRegular text-base mb-[16px]'>
              Resources
            </Link>
          </li>
          <li className="footer-items max-w-[112px] w-full flex flex-col">
            <Link href={'/company'} className='font-normal text-base mb-[16px]'>
              Company
            </Link>
            <Link href={'/community'} className='font-normal text-base mb-[16px]'>
              Community
            </Link>
            <Link href={'/contact'} className='font-normal text-base mb-[16px]'>
               Contact us
            </Link>
          </li>
          <li className="footer-items w-full max-w-[273px]">
            <h2 className="mb-[5px] text-xl font-normal">YoShop</h2>
            <p className="text-sm font-PoppinsSemibold mb-[14px]">© 2022 YoShop, Inc. All rights reserved.</p>
            <p className="text-sm font-PoppinsSemibold mb-[5px]">8 700 450 11 50</p>
            <p className="text-sm font-PoppinsSemibold mb-[5px]">Amangeldy street 59A, 7th floor</p>
            <p className="text-sm font-PoppinsSemibold mb-[5px]">info@finenex.kz</p>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer