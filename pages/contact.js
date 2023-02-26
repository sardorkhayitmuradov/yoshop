import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    }
  };
}

const Contact = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [number , setNumber] = useState("")
  return (
    <main>
      <section className='pt-[150px] pb-[75px] max-[450px]:pt-14 max-[450px]:pb-7'>
        <div className="max-w-xl mx-auto max-[450px]:max-w-xs max-[450px]:px-6">
          <h1 className='font-bold text-left text-[44px] leading-[140%] mb-[44px] max-[450px]:text-[32px] max-[450px]:mb-[30px]'>{t("common:contact_title")}</h1>
          <div className='flex items-center justify-between bg-[#e2e8f0] max-[450px]:bg-white rounded-md max-[450px]:flex-col-reverse'>
            <iframe src="https://yandex.com/map-widget/v1/-/CCUvjKv6WB" width={620} height={370} frameBorder="0" className='rounded-[6px] max-[450px]:hidden'></iframe>
            <div className='max-w-[540px] w-full pr-[50px] max-[450px]:p-0'>
              <ul className='flex items-start justify-between max-[450px]:flex-col'>
                <li className='max-w-[304px] w-full'>
                  <h2 className='font-bold text-[24px] leading-[140%] mb-[12px] max-[450px]:text-[20px]'>
                    {t("common:location")}
                  </h2>
                  <p className='text-[20px] leading-[180%] max-[450px]:text-[17px] max-[450px]:leading-[25px] max-[450px]:mb-3'>
                    {t("common:contact_address")}
                  </p>
                </li>
                <iframe src="https://yandex.com/map-widget/v1/-/CCUvjKv6WB" width={620} height={370} frameBorder="0" className='rounded-[6px] max-[450px]:w-full max-[450px]:max-h-[200px] max-[450px]:block hidden max-[450px]:mb-7'></iframe>
                <li>
                  <h2 className='font-bold text-[24px] leading-[140%] mb-[12px] max-[450px]:text-[20px] max-[450px]:mb-3'>
                    {t("common:contact_us")}
                  </h2>
                  <p className='text-[20px] leading-[180%] max-[450px]:text-[17px] max-[450px]:leading-[25px]'>
                    8 700 450 80 11
                  </p>
                  <p className='text-[20px] leading-[180%] max-[450px]:text-[17px] max-[450px]:leading-[25px]'>
                    info@finenex.kz
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[75px] pb-[150px] max-[450px]:py-[15px]'>
        <div className="mx-auto max-w-[1200px] w-full py-[80px] bg-[#215988] h-[400px] rounded-[6px] max-[450px]:w-full max-[450px]:rounded-none max-[450px]:px-6 max-[450px]:py-5">
          <h2 className='text-center font-semibold text-[44px] leading-[64px] mb-[40px] text-white max-[450px]:text-[20px] max-[450px]:leading-[140%] max-[450px]:font-bold max-[450px]:mb-[10px]'>{t("common:contact_ques")}</h2>
          <p className='text-center text-[18px] leading-[30px] mb-[40px] text-white max-[450px]:text-[14px] max-[450px]:leading-[21px] max-[450px]:mb-6'>{t("common:contact_form")}</p>
          <div className="mx-auto max-w-[817px] w-full flex items-center justify-between max-[450px]:flex-col max-[450px]:w-full max-[450px]:items-stretch">
            <div className='max-w-[595px] w-full flex items-center justify-between max-[450px]:flex-col max-[450px]:w-full max-[450px]:items-stretch'>
              <Input inputType={'text'} wrapperClassName={'max-w-[267px] max-[450px]:max-w-[100%] w-full mr-[20px] max-[450px]:mx-0 max-[450px]:w-full'} inputClassName={'w-full py-[13px] pl-[30px] placeholder:text-[#98989C]  placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:w-full max-[450px]:mb-5'} placeholder={t("common:name")} value={userName} onGetValue={(value) => setUserName(value)} />
              <Input inputType={'tel'} wrapperClassName={'max-w-[318px] max-[450px]:max-w-[100%] w-full max-[450px]:w-full'} inputClassName={'w-full py-[13px] pl-[30px] placeholder:text-[#98989C] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:w-full max-[450px]:mb-5'} placeholder={t("common:number")} value={number} onGetValue={(value) => setNumber(value)} />
            </div>
            <Button className={'max-w-[192px] py-[13px] w-full bg-[#FF588A] text-white rounded-[10px] font-bold text-base leading-[140%] max-[450px]:w-full max-[450px]:max-w-[100%]'}>
              {t("common:order_call")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;