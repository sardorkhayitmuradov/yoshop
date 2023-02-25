import Image from "next/image";
import Link from "next/link";
import LogoImage from '../public/assets/images/logo.svg';
import FacebookIcon from '../public/assets/images/facebook.svg';
import InstagramIcon from '../public/assets/images/instagram.svg';
import YoutubeIcon from '../public/assets/images/youtube.svg';
import TelegramIcon from '../public/assets/images/telegram.svg';
import WhatsAppIcon from '../public/assets/images/whatsapp.svg';
import { useTranslation } from "next-i18next";

const Footer = () => {
  const {t} = useTranslation()
  return (
    <footer className="py-[30px]">
      <div className="max-w-xl mx-auto max-[450px]:max-w-xs max-[450px]:px-6">
        <ul className="flex items-center justify-between">
          <li>
            <Link href={'/'}>
              <Image src={LogoImage} alt="site-logo" width={185} height={65} className="mb-[30px]" />
            </Link>
            <p className="mb-[21px] font-bold leading-[180%] max-[450px]:hidden">{t("footer:connect")}</p>
            <div className="footer-social-lists flex items-center justify-between max-w-[235px] w-full max-[450px]:mb-[28px]">
              <Link href={'https://www.facebook.com/profile.php?id=100081507637864'} target="_blank">
                <Image src={FacebookIcon} alt="site-social Image" width={24} height={24} />
              </Link>
              <Link href={'https://www.instagram.com/yoshop.kz/'} target="_blank">
                <Image src={InstagramIcon} alt="site-social Image" width={24} height={24} />
              </Link>
              <Link href={'https://t.me/+77004508011'} target="_blank">
                <Image src={TelegramIcon} alt="site-social Image" width={24} height={24} />
              </Link>
              <Link href={'https://wa.me/qr/WS6FXCHK7CYEI1'} target="_blank">
                <Image src={WhatsAppIcon} alt="site-social Image" width={24} height={24} />
              </Link>
              <Link href={'https://www.youtube.com/channel/UCIvu400yyF8NSElx61i-B_w'} target="_blank">
                <Image src={YoutubeIcon} alt="site-social Image" width={24} height={24} />
              </Link>
            </div>
            <div className="max-[450px]:block hidden">
              <h1 className="text-[#FF588A] text-sm font-bold mb-[4px]">Privacy Policy</h1>
              <p className="text-sm font-semibold mb-[14px]">{t("footer:rights_reserved")}</p>
            </div>
          </li>
          <li className="footer-items max-w-[112px] w-full flex flex-col max-[450px]:hidden">
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
          <li className="footer-items max-w-[112px] w-full flex flex-col max-[450px]:hidden">
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
          <li className="footer-items w-full max-w-[329px] max-[450px]:hidden">
            <h2 className="mb-[5px] text-xl font-normal">YoShop</h2>
            <p className="text-sm font-semibold mb-[14px]">{t("footer:rights_reserved")}</p>
            <p className="text-sm font-semibold mb-[5px]">8 700 450 80 11</p>
            <p className="text-sm font-semibold mb-[5px]">{t("footer:address")}</p>
            <p className="text-sm font-semibold mb-[5px]">info@finenex.kz</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;