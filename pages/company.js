import React, { useEffect } from 'react';
import CompanyCard from '../components/CompanyCard/CompanyCard';
import CompanyFinnexPurpose from '../public/assets/images/FinenexsPurpose.jpg';
import IbexlabsVision from '../public/assets/images/IbexlabsVision.jpg';
import CompanyDetails from '../public/assets/images/companyDetails.jpg';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { getItems } from "../redux/features/carts";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    }
  };
} const Company = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const dispatch = useDispatch()

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
          <h2 className='font-bold text-[56px] leading-[120%] mb-[40px] max-[450px]:text-[24px] max-[450px]:leading-[140%] max-[450px]:mb-0 max-[450px]:px-6'>{t("common:company_title")}</h2>
          <p className='text-[20px] leading-[180%] mb-[100px] max-[450px]:hidden'>{t('common:fin_intro')}</p>
        </div>
      </section>
      <p className='text-[20px] leading-[180%] mb-[100px] max-[450px]:block hidden max-[450px]:text-[16px] max-[450px]:px-6 max-[450px]:mb-[30px]'>{t('common:fin_intro')}</p>
      <section className='pt-[48px] pb-[150px] max-[450px]:py-0'>
        <div className='max-w-xl mx-auto flex flex-col gap-[150px] max-[450px]:px-6 max-[450px]:gap-7'>
          <CompanyCard image={CompanyFinnexPurpose} wrapperClassName={'max-[450px]:flex-col'} title={t('common:purpose')} description={t('common:purpose_intro')} />

          <CompanyCard wrapperClassName={'flex-row-reverse'} image={IbexlabsVision} title={t('common:vision')} >
            <p className='text-[20px] leading-[180%] text-[#111827]'>{t('common:business')}</p>
            <div>- {t('common:max')} <span className='text-[#FF588A]'>{t('common:profitable')}</span> {locale === 'en' && "as possible"}</div>
            <div>-  <span className='text-[#FF588A]'>{t('common:easy_com')}</span>
              {t("common:manage")}
            </div>
            <p>- {t("common:bring")} {t('common:pleasure')}</p>
          </CompanyCard>

          <CompanyCard image={CompanyDetails} title={t('common:details')} ><p className='text-[20px] leading-[180%] text-[#111827]'>{t("common:company_header")}</p><p className='poppins text-[20px] leading-[180%] text-[#111827]'>{t("common:company_bin")}</p></CompanyCard>
        </div>
      </section>
    </main>
  );
};

export default Company;