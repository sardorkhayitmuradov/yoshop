import React, { useEffect } from 'react';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { getItems } from "../redux/features/carts";
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';
// import CompanyFinnexPurpose from '../public/assets/images/FinenexsPurpose.jpg';
// import IbexlabsVision from '../public/assets/images/IbexlabsVision.jpg';
// import CompanyDetails from '../public/assets/images/companyDetails.jpg';

export async function getStaticProps({ locale }) {

  const { data, query, variables } = await client.queries.company({
    relativePath: `${locale}/company.json`,
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

const Company = (props) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const dispatch = useDispatch();

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.company;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const datas = JSON.parse(localStorage.getItem("data"));
      if (datas) {
        dispatch(getItems(datas))
      }
    }
  }, [dispatch]);
  return (
    <main className='pt-[100px] max-[450px]:pt-14 max-[450px]:pb-5'>
      <section className='bg-[url("../public/assets/images/companyBg.jpg")] bg-no-repeat bg-cover company-hero max-[450px]:mb-[10px]'>
        <div className='h-[824px] max-w-xl mx-auto flex flex-col justify-center text-white max-[450px]:h-[200px]'>
          <h2 className='font-bold text-[56px] leading-[120%] mb-[40px] max-[450px]:text-[24px] max-[450px]:leading-[140%] max-[450px]:mb-0 max-[450px]:px-6'>{pageData.hero.title}</h2>
          <p className='text-[20px] leading-[180%] mb-[100px] max-[450px]:hidden'>{pageData.hero.text}</p>
        </div>
      </section>
      <p className='text-[20px] leading-[180%] mb-[100px] max-[450px]:block hidden max-[450px]:text-[16px] max-[450px]:px-6 max-[450px]:mb-[30px]'>{t('common:fin_intro')}</p>
      <section className='pt-[48px] pb-[150px] max-[450px]:py-0'>
        <div className='max-w-xl mx-auto flex flex-col gap-[150px] max-[450px]:px-6 max-[450px]:gap-7'>
          <CompanyCard image={pageData.companyFeatures.purpose.image} wrapperClassName={'max-[450px]:flex-col'} title={pageData.companyFeatures.purpose.title} description={pageData.companyFeatures.purpose.text} />

          <CompanyCard wrapperClassName={'flex-row-reverse'} image={pageData.companyFeatures.vision.image} title={pageData.companyFeatures.vision.title} >
            <p className='text-[20px] leading-[180%] text-[#111827]'>{pageData.companyFeatures.vision.text}</p>
            <div>- {pageData.companyFeatures.vision.firstLine.first} <span className='text-[#FF588A]'> {pageData.companyFeatures.vision.firstLine.second}</span> {pageData.companyFeatures.vision.firstLine.third}</div>
            <div>-  <span className='text-[#FF588A]'>{pageData.companyFeatures.vision.secondLine.first}</span>
              {pageData.companyFeatures.vision.secondLine.second}
            </div>
            <p>- {pageData.companyFeatures.vision.thirdLine.first} <span className='text-[#FF588A]'>{pageData.companyFeatures.vision.thirdLine.second}</span></p>
          </CompanyCard>

          <CompanyCard image={pageData.companyFeatures.details.image} title={pageData.companyFeatures.details.title} ><p className='text-[20px] leading-[180%] text-[#111827]'>{pageData.companyFeatures.details.name}</p><p className='poppins text-[20px] leading-[180%] text-[#111827]'>{pageData.companyFeatures.details.code}</p></CompanyCard>
        </div>
      </section>
    </main>
  );
};

export default Company;