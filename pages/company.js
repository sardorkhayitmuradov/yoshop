import React from 'react';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import CompanyFinnexPurpose from '../public/assets/images/FinenexsPurpose.jpg';
import IbexlabsVision from '../public/assets/images/IbexlabsVision.jpg';
import CompanyDetails from '../public/assets/images/companyDetails.jpg'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'header', 'footer'])),
    }
  };
}

const Company = () => {
  return (
    <main className='pt-[100px]'>
      <section className='bg-[url("../public/assets/images/companyBg.jpg")] bg-no-repeat bg-cover company-hero'>
        <div className='h-[824px] max-w-[1200px] mx-auto flex flex-col justify-center text-white'>
          <h2 className='poppins font-bold text-[56px] leading-[120%] mb-[40px]'>Finenex LTD</h2>
          <p className='poppins text-[20px] leading-[180%] mb-[100px]'>Finenex is a Kazakh–Korean fintech company engaged in the development and implementation of high-tech software solutions for various business areas.</p>
        </div>
      </section>
      <section className='pt-[48px] pb-[150px]'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-[150px]'>
          <CompanyCard  image={CompanyFinnexPurpose} title={'Our Purpose'} description={'Optimal automation of any field of activity through the introduction of advanced financial technologies and high-quality service'} />

          <CompanyCard wrapperClassName={'flex-row-reverse'} image={IbexlabsVision} title={"Our vision"} >
            <p className='poppins text-[20px] leading-[180%] text-[#111827]'>Business should be:</p>
            <p>- As <span className='text-[#FF588A]'>profitable</span> as possible.</p>
            <p>- <span className='text-[#FF588A]'>Easy</span> and <span className='text-[#FF588A]'>comfortable</span> to manage.</p>
            <p>- Bringing <span className='text-[#FF588A]'>pleasure.</span></p>
          </CompanyCard>
          
          <CompanyCard image={CompanyDetails} title={'Company details'} ><p className='poppins text-[20px] leading-[180%] text-[#111827]'>LLP Finenex</p><p className='poppins text-[20px] leading-[180%] text-[#111827]'>BIN: 220140013991</p></CompanyCard>
        </div>
      </section>
    </main>
  );
};

export default Company;