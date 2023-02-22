import React, { useState } from 'react'
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import CommunityCard from '../components/CommunityCard/CommunityCard';
import { communityNews } from '../constants/communityNews';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['common', 'header', 'footer'])),
    }
  }
}

const Community = () => {
  const [userName, setUserName] = useState('');
  const {t} = useTranslation()

  return (
    <main>
      <section className='pt-[150px] pb-[250px]'>
        <div className="site-container">
          <h2 className='font-bold text-[44px] leading-[140%] text-[#111827] text-center mb-[71px]'>{t('common:community_management')}</h2>
          <div className='flex flex-col gap-[80px]'>
            {
              communityNews ? communityNews.map((el) => {
                return(
                  <CommunityCard key={el.id} CommunityCardImage={el.image} title={el.title} date={el.date} description={el.description} link={el.link} />
                )
              }) : ''
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Community