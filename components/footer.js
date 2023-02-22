import Image from "next/image";
import Link from "next/link";
import LogoImage from '../public/assets/images/logo.svg';
import FacebookIcon from '../public/assets/images/facebook.svg';
import InstagramIcon from '../public/assets/images/instagram.svg';
import GithubIcon from '../public/assets/images/github.svg';
import InboxIcon from '../public/assets/images/Inbox.svg';
import TelegramIcon from '../public/assets/images/telegram.svg';
import WhatsAppIcon from '../public/assets/images/whatsapp.svg';
import { useTranslation } from "next-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className="py-[30px]">
      <div className="site-container">
        <ul className="footer-list flex items-center justify-between">
          <li className="footer-items">
            <Link href={'/'}>
              <Image src={LogoImage} alt="site-logo" width={185} height={65} className="mb-[30px]" />
            </Link>
            <p className="mb-[21px] font-bold leading-[180%]">{t("footer:connect")}</p>
            <div className="footer-social-lists flex items-center justify-between max-w-[235px] w-full">
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
            <Link href={'/licenses' + "#header"} className='text-base mb-[16px]'>
              {t('header:licenses')}
            </Link>
            <Link href={'/equipment' + "#header"} className='text-base mb-[16px]'>
              {t('header:equipment')}
            </Link>
            <Link href={'/resources' + "#header"} className='text-base mb-[16px]'>
            {t('header:resources')}
            </Link>
          </li>
          <li className="footer-items max-w-[112px] w-full flex flex-col">
            <Link href={'/company' + "#header"} className='text-base mb-[16px]'>
            {t('header:company')}
            </Link>
            <Link href={'/community' + "#header"} className='text-base mb-[16px]'>
            {t('header:community')}
            </Link>
            <Link href={'/contact' + "#header"} className='text-base mb-[16px]'>
            {t('header:contact')}
            </Link>
          </li>
          <li className="footer-items w-full max-w-[329px]">
            <h2 className="mb-[5px] text-xl font-normal">YoShop</h2>
            <p className="text-sm font-semibold mb-[14px]">{t("footer:rights_reserved")}</p>
            <p className="text-sm font-semibold mb-[5px]">8 700 450 11 50</p>
            <p className="text-sm font-semibold mb-[5px]">{t("footer:address")}</p>
            <p className="text-sm font-semibold mb-[5px]">info@finenex.kz</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;