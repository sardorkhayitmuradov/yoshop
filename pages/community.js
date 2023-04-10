import React, { useState, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { getItems } from "../redux/features/carts";
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';
// import Input from '../components/Input/Input';
// import Button from '../components/Button/Button';
// import CommunityCard from '../components/CommunityCard/CommunityCard';
// import { communityNews } from '../constants/communityNews';

export async function getStaticProps({ locale }) {
  const { data, query, variables } = await client.queries.community({
    relativePath: `${locale}/community.json`,
  });
  return {
    props: {
      data,
      query,
      variables,
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    }
  }
}

const Community = (props) => {
  const [userName, setUserName] = useState('');
  const [tab, setTab] = useState("1")
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.community;

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
      <section className='pt-[150px] pb-[137px] max-xs:pt-[70px]'>
        <div className="max-w-xl mx-auto max-xs:px-6">
          <h2 className='font-bold text-[32px] leading-[140%] text-[#111827] mb-[44px] max-xs:text-[20px] max-xs:leading-[140%] max-xs:mb-[10px]'>{t('common:community_management')}</h2>
          <p className='text-[18px] leading-[180%] mb-[60px] max-xs:mb-[30px] max-xs:text-[14px] max-xs:leading-[18px]'>{t("common:community_intro")}</p>
          <div className='bg-[#E5E7EB] rounded flex items-center justify-between'>
            <div onClick={() => setTab("1")} className={`cursor-pointer max-w-[50%] w-full text-center m-1 p-1 rounded-sm ${tab === '1' ? "bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)]" : "shadow-none bg-transparent text-[#6B7280]"}`}>
              <p className='text-[16px] leading-[25px]'>{t("common:community_success")}</p>
            </div>
            <div onClick={() => setTab("2")} className={`cursor-pointer max-w-[50%] w-full text-center m-1 p-1 rounded-sm ${tab === '2' ? "bg-white shadow-[0_4px_8px_rgba(0,0,0,0.08)]" : "shadow-none bg-transparent text-[#6B7280]"}`}>
              <p className='text-[16px] leading-[25px]'>{t("common:community_event")}</p>
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