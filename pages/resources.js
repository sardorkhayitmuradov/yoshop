import Accordion from '../components/Accordion/Accordion'
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
                    <Accordion key={accordion.id} title={t("common:ques_inventory")}>
                      {accordion.description}
                    </Accordion>
                )
                }else if(accordion.id == 2){
                  return (
                    <Accordion key={accordion.id} title={t("common:ques_payment")}>
                      {accordion.description}
                    </Accordion>
                  )
                }else if(accordion.id == 3){
                  return (
                    <Accordion key={accordion.id} title={t("common:ques_work")}>
                      {accordion.description}
                    </Accordion>
                  )
                }else if(accordion.id == 4){
                  return (
                    <Accordion key={accordion.id} title={t("common:ques_fees")}>
                      {accordion.description}
                    </Accordion>
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