import React from 'react';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import CompanyFinnexPurpose from '../public/assets/images/FinenexsPurpose.jpg';
import IbexlabsVision from '../public/assets/images/IbexlabsVision.jpg';
import CompanyDetails from '../public/assets/images/companyDetails.jpg';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    }
  };
} const Company = () => {
  const { t } = useTranslation();
  const {locale} = useRouter();
  return (
    <main className='pt-[100px]'>
      <section className='bg-[url("../public/assets/images/companyBg.jpg")] bg-no-repeat bg-cover company-hero'>
        <div className='h-[824px] max-w-[1200px] mx-auto flex flex-col justify-center text-white'>
          <h2 className='font-bold text-[56px] leading-[120%] mb-[40px]'>Finenex LTD</h2>
          <p className='text-[20px] leading-[180%] mb-[100px]'>{t('common:fin_intro')}</p>
        </div>
      </section>
      <section className='pt-[48px] pb-[150px]'>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-[150px]'>
          <CompanyCard image={CompanyFinnexPurpose} title={t('common:purpose')} description={t('common:purpose_intro')} />

          <CompanyCard wrapperClassName={'flex-row-reverse'} image={IbexlabsVision} title={t('common:vision')} >
            <p className='text-[20px] leading-[180%] text-[#111827]'>{t('common:business')}</p>
            <div>- {t('common:max')} <span className='text-[#FF588A]'>{t('common:profitable')}</span> { locale === 'en' && "as possible"  }</div>
            <div>-  <span className='text-[#FF588A]'>{t('common:easy_com')}</span>
            {t("common:manage")}
            </div>
            <p>- {t("common:bring")} {t('common:pleasure')}</p>
          </CompanyCard>

          <CompanyCard image={CompanyDetails} title={t('common:details')} ><p className='text-[20px] leading-[180%] text-[#111827]'>LLP Finenex</p><p className='poppins text-[20px] leading-[180%] text-[#111827]'>BIN: 220140013991</p></CompanyCard>
        </div>
      </section>
    </main>
  );
};

export default Company;