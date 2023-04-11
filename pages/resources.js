import { useEffect } from 'react';
import FaqAccordion from '../components/FaqAccordion/Faqaccordion';
import ResourcesCard from '../components/ResourcesCard/ResourcesCard';
import { resourcesVideos } from '../constants/resourcesVideo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { getItems } from "../redux/features/carts";
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';

export async function getStaticProps({ locale }) {

  const { data, query, variables } = await client.queries.resources({
    relativePath: `${locale}/resources.json`,
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

const Resources = (props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.resources;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const datas = JSON.parse(localStorage.getItem("data"));
      if (datas) {
        dispatch(getItems(datas))
      }
    }
  }, [dispatch]);

  return (
    <main className='pt-[100px] max-[450px]:py-[50px]'>
      <section className='py-[50px] max-[450px]:pb-[30px] max-[450px]:pt-0'>
        <div className='mx-auto max-w-xl max-[450px]:px-6'>
          <h2 className='font-bold text-[44px] leading-[140%] text-[#111827] mb-[24px] max-[450px]:text-[24px] max-[450px]:mb-[10px]'>{pageData.resources.title}</h2>
          <p className='text-[18px] leading-[180%] text-[#111827] mb-[50px] max-[450px]:text-[16px] max-[450px]:leading-[18px] max-[450px]:mb-[30px]'>
            {pageData.resources.text}
          </p>
          <ul className='flex items-center justify-between flex-wrap gap-[40px]'>
            {
              resourcesVideos.length > 0 ? resourcesVideos.map(resVideo => {
                return (
                  <ResourcesCard thumbnail={resVideo.thumbnail} key={resVideo.id} video={resVideo.video} title={resVideo.title} description={resVideo.description} />
                );
              }) : ''
            }
          </ul>
        </div>
      </section>
      <section className="py-[82px] max-[450px]:py-8">
        <h1 className='font-bold text-[32px] leading-[140%] text-[#111827] text-center mb-[44px] max-[450px]:mb-[30px]'>{pageData.questions.title}</h1>
        <div className='max-w-[1152px] w-full mx-auto max-[450px]:px-6'>
          {
            pageData.questions.items.map((el,index) => {
              return (
          <FaqAccordion key={index} title={el.title} accordionClassName={"border border-solid border-[#E5E7EB] py-[25px] px-[42px] bg-[#E2E8F0] rounded-[10px] !mb-[20px] max-[450px]:py-[13px] max-[450px]:px-[14px]"}>
            {el.text}
          </FaqAccordion>

              )
            })
          }
        </div>
      </section>
    </main>
  );
};

export default Resources;