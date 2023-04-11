import React, { useState, useEffect } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PhoneInput from 'react-phone-number-input/input'
import { useDispatch } from 'react-redux';
import { getItems } from "../redux/features/carts";
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';

export async function getStaticProps({ locale }) {

  const { data, query, variables } = await client.queries.contact({
    relativePath: `${locale}/contact.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    }
  };
}

const Contact = (props) => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState();

  const dispatch = useDispatch();

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data;
  // console.log(pageData)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const datas = JSON.parse(localStorage.getItem("data"));
      if (datas) {
        dispatch(getItems(datas))
      }
    }
  }, [dispatch]);
  return (
    <main>
      <section className='pt-[150px] pb-[75px] max-[450px]:pt-14 max-[450px]:pb-7'>
        <div className="max-w-xl mx-auto max-[450px]:max-w-xs max-[450px]:px-6">
          <h1 className='font-bold text-left text-[44px] leading-[140%] mb-[44px] max-[450px]:text-[32px] max-[450px]:mb-[30px]'>{pageData.contact.contactSection.title}</h1>
          <div className='flex items-center justify-between bg-[#e2e8f0] max-[450px]:bg-white rounded-md max-[450px]:flex-col-reverse'>
            <iframe src={pageData.contact.contactSection.locationLink} width={620} height={370} frameBorder="0" className='rounded-[6px] max-[450px]:hidden'></iframe>
            <div className='max-w-[540px] w-full pr-[50px] max-[450px]:p-0'>
              <ul className='flex items-start justify-between max-[450px]:flex-col'>
                <li className='max-w-[304px] w-full'>
                  <h2 className='font-bold text-[24px] leading-[140%] mb-[12px] max-[450px]:text-[20px]'>
                    {pageData.contact.contactSection.location.title}
                  </h2>
                  <p className='text-[20px] leading-[180%] max-[450px]:text-[17px] max-[450px]:leading-[25px] max-[450px]:mb-3'>
                    {pageData.contact.contactSection.location.text}
                  </p>
                </li>
                <iframe src="https://yandex.com/map-widget/v1/-/CCUvjKv6WB" width={620} height={370} frameBorder="0" className='rounded-[6px] max-[450px]:w-full max-[450px]:max-h-[200px] max-[450px]:block hidden max-[450px]:mb-7'></iframe>
                <li>
                  <h2 className='font-bold text-[24px] leading-[140%] mb-[12px] max-[450px]:text-[20px] max-[450px]:mb-3'>
                    {pageData.contact.contactSection.contact.title}
                  </h2>
                  <p className='text-[20px] leading-[180%] max-[450px]:text-[17px] max-[450px]:leading-[25px]'>
                    {pageData.contact.contactSection.contact.tel}
                  </p>
                  <p className='text-[20px] leading-[180%] max-[450px]:text-[17px] max-[450px]:leading-[25px]'>
                    {pageData.contact.contactSection.contact.email}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-[75px] pb-[150px] max-[450px]:py-[15px]'>
        <div className="mx-auto max-w-xl w-full py-[80px] bg-[#215988] h-[400px] rounded-[6px] max-[450px]:w-full max-[450px]:rounded-none max-[450px]:px-6 max-[450px]:py-5">
          <h2 className='text-center font-semibold text-[44px] leading-[64px] mb-[40px] text-white max-[450px]:text-[20px] max-[450px]:leading-[140%] max-[450px]:font-bold max-[450px]:mb-[10px]'>{pageData.contact.form.title}</h2>
          <p className='text-center text-[18px] leading-[30px] mb-[40px] text-white max-[450px]:text-[14px] max-[450px]:leading-[21px] max-[450px]:mb-6'>{pageData.contact.form.text}</p>
          <div className="mx-auto max-w-[817px] w-full flex items-center justify-between max-[450px]:flex-col max-[450px]:w-full max-[450px]:items-stretch">
            <div className='max-w-[595px] w-full flex items-center justify-between max-[450px]:flex-col max-[450px]:w-full max-[450px]:items-stretch'>
              <Input inputType={'text'} wrapperClassName={'max-w-[267px] max-[450px]:max-w-[100%] w-full mr-[20px] max-[450px]:mx-0 max-[450px]:w-full'} inputClassName={'w-full py-[13px] pl-[30px] placeholder:text-[#98989C]  placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:w-full max-[450px]:mb-5'} placeholder={pageData.contact.form.name} pattern={"[a-zA-Z]+"} value={userName} onChange={(value) => {
                let newValue = value.replace(/[^a-zA-Z]/g, '');
                { setUserName(newValue) }
              }} />
              {/* <Input inputType={'tel'} wrapperClassName={'max-w-[318px] max-[450px]:max-w-[100%] w-full max-[450px]:w-full'} inputClassName={'w-full py-[13px] pl-[30px] placeholder:text-[#98989C] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:w-full max-[450px]:mb-5'} placeholder={t("common:number")} value={number} onChange={(value) => setNumber(value)} /> */}
              <PhoneInput
                country="KZ"
                defaultCountry='KZ'
                value={number}
                placeholder={t("common:number")}
                maxLength={16}
                className="w-full py-[13px] pl-[30px] placeholder:text-[#98989C] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:w-full max-[450px]:mb-5"
                international
                withCountryCallingCode
                onChange={(value) => setNumber(value)}
              />
            </div>
            <Button className={'max-w-[192px] py-[13px] w-full bg-[#FF588A] text-white rounded-[10px] font-bold text-base leading-[140%] max-[450px]:w-full max-[450px]:max-w-[100%]'}>
              {pageData.contact.form.button}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;