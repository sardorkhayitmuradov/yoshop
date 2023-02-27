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
  const [tab , setTab] = useState("1")
  const {t} = useTranslation()

  return (
    <main>
      <section className='pt-[150px] pb-[137px]'>
        <div className="max-w-xl mx-auto">
          <h2 className='font-bold text-[32px] leading-[140%] text-[#111827] mb-[44px]'>{t('common:community_management')}</h2>
          <p className='text-[18px] leading-[180%] mb-[60px]'>Stay up to date with ongoing events and become part of our success story!</p>
          <div className='bg-[#E5E7EB] rounded flex items-center justify-between'>
            <div onClick={()=> setTab("1")} className={`cursor-pointer max-w-[50%] w-full text-center m-1 p-1 rounded-sm ${tab === '1' ? "bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)]": "shadow-none bg-transparent text-[#6B7280]"}`}>
              <p className='text-[16px] leading-[25px]'>History of success</p>
            </div>
            <div onClick={()=> setTab("2")} className={`cursor-pointer max-w-[50%] w-full text-center m-1 p-1 rounded-sm ${tab === '2' ? "bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)]": "shadow-none bg-transparent text-[#6B7280]"}`}>
              <p className='text-[16px] leading-[25px]'>Events</p>
            </div>
          </div>
          <div>
            
          </div>
          {/* <div className='flex flex-col gap-[80px]'>
            {
              communityNews ? communityNews.map((el) => {
                return(
                  <CommunityCard key={el.id} CommunityCardImage={el.image} title={el.title} date={el.date} description={el.description} link={el.link} />
                )
              }) : ''
            }
          </div> */}
        </div>
      </section>
    </main>
  )
}

export default Community