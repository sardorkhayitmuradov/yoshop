import React, { useState } from 'react'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['common', 'header', 'footer'])),
    }
  } 
}

const Contact = () => {
  const {t} = useTranslation()
  const [userName, setUserName] = useState('');
  return (
    <main>
      <section className='pt-[150px] pb-[75px]'>
        <div className="max-w-[1230px] mx-auto">
          <h1 className='font-PoppinsBold text-left font-bold text-[44px] leading-[140%] mb-[44px]'>{t("common:contact_title")}</h1>
          <div className='flex items-center justify-between bg-[#e2e8f0] rounded-md'>
              <iframe src="https://yandex.com/map-widget/v1/-/CCUvjKv6WB" width={620} height={370} frameBorder="0" className='rounded-[6px]'></iframe>
            <div className='max-w-[540px] w-full pr-[50px]'>
              <ul className='flex items-start justify-between'>
                <li className='max-w-[304px] w-full'>
                  <h2 className='font-PoppinsBold text-[24px] leading-[140%] mb-[12px]'>
                    {t("common:location")}
                  </h2>
                  <p className='poppins text-[20px] leading-[180%]'>
                  {t("common:contact_address")}
                  </p>
                </li>
                <li>
                  <h2 className='font-PoppinsBold text-[24px] leading-[140%] mb-[12px]'>
                  {t("common:contact_us")}
                  </h2>
                  <p className='font-PoppinsRegular text-[20px] leading-[180%]'>
                    8 700 450 11 50
                  </p>
                  <p className='font-PoppinsRegular text-[20px] leading-[180%]'>
                    info@finenex.kz
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[75px] pb-[150px]'>
        <div className="mx-auto max-w-[1200px] w-full py-[80px] bg-[#215988] h-[400px] rounded-[6px]">
          <h2 className='text-center poppins font-semibold text-[44px] leading-[64px] mb-[40px] text-white'>{t("common:contact_ques")}</h2>
          <p className='text-center poppins text-[18px] leading-[30px] mb-[40px] text-white'>{t("common:contact_form")}</p>
          <div className="mx-auto max-w-[817px] w-full flex items-center justify-between">
            <div className='max-w-[595px] w-full flex items-center justify-between'>
              <Input inputType={'text'} wrapperClassName={'max-w-[267px] w-full mr-[20px]'} inputClassName={'w-full py-[20px] pl-[30px] placeholder:text-[#98989C] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[20px] bg-[#F1F1F1]'} placeholder={t("common:name")} value={''} />
              <Input inputType={'tel'} wrapperClassName={'max-w-[318px] w-full'} inputClassName={'w-full py-[20px] pl-[30px] placeholder:text-[#98989C] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[20px] bg-[#F1F1F1]'} placeholder={t("common:number")} value={userName} onGetValue={(value) => setUserName(value)} />
            </div>
            <Button className={'max-w-[192px] py-[20px] w-full bg-[#FF588A] text-white rounded-[20px] font-bold text-base leading-[140%] poppins'}>
              {t("common:order_call")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact