import NewAccordion from '../components/NewAccordion'
import ResourcesCard from '../components/ResourcesCard/ResourcesCard'
import { resourcesVideos } from '../constants/resourcesVideo'
import { accordionData } from '../constants/resourcesAccordionData'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['common', 'header', 'footer'])),
    }
  }
}

const Resources = () => {
  const { t } = useTranslation()

  return (
    <main className='pt-[100px]'>
      <section className='py-[50px]'>
        <div className='mx-auto max-w-[1360px]'>
            <h2 className='poppins font-bold text-[44px] leading-[140%] text-[#111827] text-center mb-[24px]'>{t("header:resources")}</h2>
            <p className='poppins text-[18px] leading-[180%] text-[#111827] text-center mb-[50px]'>
              {t("common:resources_intro")}
            </p>
            <ul className='flex items-center justify-between flex-wrap gap-[40px]'>
              {
                resourcesVideos.length > 0 ? resourcesVideos.map(resVideo => {
                  return (
                    <ResourcesCard key={resVideo.id} video={resVideo.video} title={resVideo.title} description={resVideo.description} />
                  )
                }) : ''
              }
            </ul>
        </div>
      </section>
      <section className="py-[82px]">
        <h1 className='poppins font-bold text-[32px] leading-[140%] text-[#111827] text-center mb-[44px]'>{t("common:faq")}</h1>
        <div className='max-w-[1152px] w-full mx-auto'>
          {
            accordionData.map((accordion) => {
                if(accordion.id == 1){
                  return (
                    <NewAccordion key={accordion.id} title={t("common:ques_inventory")}  accordionClassName={"border border-solid border-[#E5E7EB] py-[25px] px-[42px] bg-[#E2E8F0] rounded-[10px] !mb-[20px]"}>
                      {accordion.description}
                    </NewAccordion>
                )
                }else if(accordion.id == 2){
                  return (
                    <NewAccordion key={accordion.id} title={t("common:ques_payment")}  accordionClassName={"border border-solid border-[#E5E7EB] py-[25px] px-[42px] bg-[#E2E8F0] rounded-[10px] !mb-[20px]"}>
                      {accordion.description}
                    </NewAccordion>
                  )
                }else if(accordion.id == 3){
                  return (
                    <NewAccordion key={accordion.id} title={t("common:ques_work")}  accordionClassName={"border border-solid border-[#E5E7EB] py-[25px] px-[42px] bg-[#E2E8F0] rounded-[10px] !mb-[20px]"}>
                      {accordion.description}
                    </NewAccordion>
                  )
                }else if(accordion.id == 4){
                  return (
                    <NewAccordion key={accordion.id} title={t("common:ques_fees")}  accordionClassName={"border border-solid border-[#E5E7EB] py-[25px] px-[42px] bg-[#E2E8F0] rounded-[10px] !mb-[20px]"}>
                      {accordion.description}
                    </NewAccordion>
                  )
                }
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Resources