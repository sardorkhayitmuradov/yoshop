/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useState, useRef } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import ListIcon from '../public/assets/images/listCircle.svg';
import AppStore from '../public/assets/images/appStore.png';
import GooglePlay from '../public/assets/images/googlePlay.png';
import PaymentIcon from '../public/assets/images/typesOfPayment.svg';
import InterfaceIcon from '../public/assets/images/simpleInterface.svg';
import StoreReport from '../public/assets/images/fullStoreReport.svg';
import FiscalizationIcon from '../public/assets/images/fiscalization.svg';
import FullyOrginazeStore from '../public/assets/images/sullyOrganizeStore.svg';
import SecurityIcon from '../public/assets/images/securitysafe.svg';
import PhoneCall from '../public/assets/images/phone.svg';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow, Mousewheel, FreeMode, Thumbs } from 'swiper';
import i18nConfig from '../next-i18next.config';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ["common", "header", "footer"], i18nConfig)),
    },
  };
}

function Home() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const swiperRef = useRef()
  const handleChange = (event) => {
    let val = event.target.value;
    setActive(Number(val));
    swiperRef.current.swiper.slideTo(Number(val))
  };

  const slideFirstCard = useRef()
  const slideSecondCard = useRef()


  return (
    <main className='pt-[100px] w-full'>
      <section>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className='site-container flex flex-col !pt-[179px] justify-center bg-[url("../public/assets/images/main-hero.png")] pb-[50px] bg-no-repeat bg-right bg-[length:800px_785px]'>
              <div className='flex justify-between items-center mb-[200px]'>
                <div className='max-w-[567px] w-full'>
                  <p className='mb-[25px] max-w-[490px] w-full text-[18px] leading-[180%]'>
                    {t("common:mult_int_title")}
                  </p>
                  <h2 className='mb-[40px] text-[56px] text-[#FF588A] font-bold leading-[120%]'>
                    {t("common:use_tech")}
                  </h2>
                  <Button
                    className={
                      'py-[11px] px-[74.5px] bg-[#7D66BB] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white'
                    }
                  >
                    {t("common:try_free")}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("../public/assets/images/banner2.jpg")] hero bg-no-repeat bg-cover'>
              <div className='site-container flex flex-col !pt-[179px] pb-[50px] justify-center'>
                <div className='flex justify-between items-center mb-[200px]'>
                  <div className='max-w-[567px] w-full'>
                    <div className='mb-[67px] text-[40px] font-bold leading-[120%]'>
                      <div>
                        <h2 className='bg-[#FF588A] text-[#fff] rounded inline-block'>{t("common:buy_title")}</h2>
                      </div>
                      <h2 className='text-[#fff] inline'>{t("common:buy_retail")}</h2>
                      <h2 className='bg-[#FF588A] text-[#fff] rounded inline'>{t("common:buy_free")}</h2>
                    </div>

                    <Button
                      className={
                        'py-[17px] px-[132px] bg-[#FF588A] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white'
                      }
                    >
                      {t("common:buy_now")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("../public/assets/images/banner3.jpg")] hero bg-no-repeat bg-cover'>
              <div className='site-container flex flex-col !pt-[179px] pb-[50px] justify-center'>
                <div className='flex justify-between items-center mb-[200px]'>
                  <div className='max-w-[567px] w-full'>
                    <div>
                      <div className='max-w-[560px] w-full font-bold text-[40px] leading-[134%] mb-[40px]'>
                        <span className='bg-[#FF588A] pt-1 px-1 rounded-md text-white'>{t("common:download")}</span>
                        {t("common:download_mobile")}
                        <span className='bg-[#FF588A] rounded-md text-white'>{t("common:download_free")}</span>
                        <h2>{t("common:download_month")}</h2>
                      </div>
                    </div>
                    <div className='flex text-white items-center justify-between'>
                      <Button className={'py-[17px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-PromptMedium text-[24px] leading-[36px]'}>
                        <Image className='mr-[10px]' src={AppStore} width={40} height={40} alt='app store Image' />
                        App Store
                      </Button>
                      <Button className={'py-[17px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-PromptMedium text-[24px] leading-[36px]'}>
                        <Image className='mr-[10px]' src={GooglePlay} width={40} height={40} alt='google play Image' />
                        Google Play
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section
        className={`pt-[150px] pb-[75px] relative`}

      >
        <div className='mx-auto max-w-[1230px] w-full h-[750px] overflow-hidden bg-[#eff1fe80] rounded-[20px] relative pt-12 px-[60px]'>
          <div className='fixed w-[81px] h-[81px] right-20  bottom-14 z-10'>
            <Image src={PhoneCall} width={81} height={81} alt='phone call image' />
          </div>
          <h2 className='text-[38px] font-light leading-[57px] mb-[6px]'>
            {t('common:yoshop_licence')}
          </h2>
          <p className='text-base leading-[32px] uppercase opacity-60 mb-[70px]'>
            {t('common:phone_terminal')}
          </p>

          <div className='w-full'>
            <div className='flex w-full justify-between h-[340px] items-center'>
              <ul className='max-w-[175px] w-full pt-[35px]'>
                <li className='mb-[30px] relative'>{active === 0 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{t("common:store_automation")}</p></li>
                <li className='mb-[30px] relative'>{active === 1 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{t("common:full_control_business")}</p></li>
                <li className='mb-[30px] relative'>{active === 2 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{t("common:effective_sales_management")}</p></li>
                <li className='mb-[30px] relative'>{active === 3 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{t("common:extract_min_profit")}</p></li>
                <li className='mb-[30px] relative'>
                  {active === 4 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}
                  <p className='z-10 relative text-base leading-[20px]'>{t("common:absolute_safe_business")}</p>
                </li>
              </ul>
              <Swiper
                ref={swiperRef}
                direction={"vertical"}
                onActiveIndexChange={(swiper) => setActive(swiper.activeIndex)}
                mousewheel={true}
                spaceBetween={200}
                effect={"coverflow"}
                grabCursor={true}
                slidesPerView={'auto'}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 0.5,
                  slideShadows: false,
                }}
                modules={[Mousewheel, EffectCoverflow, FreeMode, Thumbs, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>

                  <ul className={`${active == 0 ? "" : "opacity-0"}`}>
                    <li className='text-5xl leading-[73px] mb-[10px] font-bold'>
                      {t("common:store_automation")}
                    </li>

                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:simple_interface")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:manual_work")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:goods_sold")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:significant_savings")}
                    </li>
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 0 ? 'opacity-20' : ""}`}>
                    <Image
                      src={'/assets/images/store.png'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className={`rounded-md`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <ul className={`${active == 1 ? "" : "opacity-0"}`}>
                    <li className='text-5xl leading-[73px] mb-[10px] font-bold'>
                      {t("common:full_control_business")}
                    </li>

                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:write_off_goods")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:control_remote_workers")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:search_clients")}
                    </li>
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 1 ? 'opacity-40' : ""}`}>
                    <Image
                      src={'/assets/images/control.png'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className={`rounded-md`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <ul className={`${active == 2 ? "" : "opacity-0"}`}>
                    <li className='text-5xl leading-[73px] mb-[10px] font-bold'>
                      {t("common:effective_sales_management")}
                    </li>

                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:simple_goods")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:returns")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:no_queues_checkout")}
                    </li>
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 2 ? 'opacity-40' : ""}`}>
                    <Image
                      src={'/assets/images/effective.png'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className={`rounded-md`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <ul className={`${active == 3 ? "" : "opacity-0"}`}>
                    <li className='text-5xl leading-[73px] mb-[10px] font-bold'>
                      {t("common:extract_min_profit")}
                    </li>

                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:all_types_payment")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:increasing_throughtput")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:prevention_theft")}
                    </li>
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 3 ? 'opacity-40' : ""}`}>
                    <Image
                      src={'/assets/images/extract.png'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className={`rounded-md`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <ul className={`${active == 4 ? "" : "opacity-0"}`}>
                    <li className='text-5xl leading-[73px] mb-[10px] font-bold'>
                      {t("common:absolute_safe_business")}
                    </li>

                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:data_storage")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:one_click")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:secure_data_payment")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:access_history")}
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      {t("common:complete_info")}
                    </li>
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 4 ? 'opacity-40' : ""}`}>
                    <Image
                      src={'/assets/images/absolutely.png'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className={`rounded-md`}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className='absolute -right-44 bottom-2/4 rotate-90'>
            <input
              type='range'
              value={active}
              onChange={handleChange}
              min={0}
              max={4}
              step={1}
              className='appearance-none w-[440px] h-[0.5px] rounded bg-[#e1e5e9] outline-none '
            />
          </div>
        </div>
      </section>
      <section className='py-[75px]'>
        <div className="mx-auto max-w-[1230px] w-full bg-[#EFF1FE] h-[352px] rounded-[20px] pt-[55px] pb-[30px] pl-[60px] pr-[56px] flex items-center justify-between">
          <div>
            <div className='text-[#0F172A] max-w-[560px] w-full font-bold text-[40px] leading-[140%] mb-[30px]'>
              <span className='bg-[#FF588A] rounded-md text-white'>{t("common:download")}</span>
              {t("common:download_mobile")}
              <span className='bg-[#FF588A] rounded-md text-white'>{t("common:download_free")}</span>
              <h2>{t("common:download_month")}</h2>
            </div>
          </div>
          <div className='flex flex-col text-white'>
            <Button className={'py-[17px] px-[50px] mb-[15px] bg-[#242424] rounded-2xl flex items-center font-PromptMedium text-[24px] leading-[36px]'}>
              <Image className='mr-[10px]' src={AppStore} width={40} height={40} alt='app store Image' />
              App Store
            </Button>
            <Button className={'py-[17px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-PromptMedium text-[24px] leading-[36px]'}>
              <Image className='mr-[10px]' src={GooglePlay} width={40} height={40} alt='google play Image' />
              Google play
            </Button>
          </div>
        </div>
      </section>
      <section className='py-[75px]'>
        <div className="mx-auto max-w-[1200px] w-full overflow-hidden">
          <h2 className='text-[#111827] font-bold text-[44px] leading-[140%] mb-[60px]'>
            {t("common:improve_business")}
          </h2>
          <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden">
            <li className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCard__one'>
              <div className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={PaymentIcon} alt='improve section Image' width={85} height={58} />
                </div>
                <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {t("common:types_of_payment")}
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li className='max-w-[202px] w-full'>
                    {t("common:bank_cards")}
                  </li>
                  <li className='max-w-[202px] w-full'>
                    {t("common:qr")}
                  </li>
                  <li className='max-w-[202px] w-full'>
                    {t("common:apple_pay")}
                  </li>
                  <li className='max-w-[202px] w-full'>
                    {t("common:samsung_pay")}
                  </li>
                  <li className='max-w-[202px] w-full'>
                    {t("common:google_pay")}
                  </li>
                </ul>
              </div>
            </li>
            <li ref={slideFirstCard} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCard__two'> 
              <div className='max-w-[300px] w-full py-[64px] pl-[78px] bg-[#FBF1F1] h-full'>
                <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={InterfaceIcon} alt='improve section Image' width={42} height={69} />
                </div>
                <p className='max-w-[198px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {
                    t('common:simple_int_interface')
                  }
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px] bg-[#FBF1F1] h-full'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li className='max-w-[202px] w-full'>
                    {t("common:simplifies")}
                  </li>
                  <li className='max-w-[202px] w-full'>
                    {t("common:reduces")}
                  </li>
                  <li className='max-w-[202px] w-full'>
                    {t("common:simpliest_way")}
                  </li>
                </ul>
              </div>
            </li>
            <li onMouseOut={() =>  slideFirstCard.current.classList.remove('-translate-x-[50%]')} onMouseOver={() => slideFirstCard.current.classList.add('-translate-x-[50%]')} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCard__three'>
              <div className='max-w-[300px] w-full py-[64px] pl-[78px] bg-[#FFE6E6] h-full'>
                <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={StoreReport} alt='improve section Image' width={60} height={60} />
                </div>
                <p className='max-w-[168px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {
                    t('common:store_report')
                  }
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px] bg-[#FFE6E6] h-full'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li className='max-w-[202px] w-full'>
                    {t("common:items_report")}
                  </li>
                  <li className='max-w-[196px] w-full'>
                    {t("common:items_shifts")}
                  </li>
                  <li className='max-w-[196px] w-full'>
                    {t("common:items_returns")}
                  </li>
                  <li className='max-w-[196px] w-full'>
                    {t("common:items_entry")}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden">
            <li className="max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCardSecond__one">
              <div className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={FiscalizationIcon} alt='improve section Image' width={50} height={60} />
                </div>
                <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {t('common:fiscalazition')}
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li className='max-w-[188px] w-full'>{t('common:issuance')}</li>
                  <li className='max-w-[188px] w-full'>{t('common:simple_tac_reporting')}</li>
                </ul>
              </div>
            </li>
            <li ref={slideSecondCard} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCardSecond__two'>
              <div className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[50px] bg-[#FBF1F1]'>
                <div className='bg-[#fbe2e7]   max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={FullyOrginazeStore} alt='improve section Image' width={60} height={49} />
                </div>
                <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {t('common:orginize_store')}
                </p>
              </div>
              <div className='max-w-[300px] w-full h-full flex flex-col justify-center pl-[34px] bg-[#FBF1F1]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li className='max-w-[221px] w-full'>{t('common:organize_sales')}</li>
                  <li className='max-w-[221px] w-full'>{t('common:fast_service')}</li>
                  <li className='max-w-[221px] w-full'>{t('common:goods_stock')}</li>
                  <li className='max-w-[221px] w-full'>{t('common:convinient_analystics')}</li>
                </ul>
              </div>
            </li>
            <li onMouseOut={() =>  slideSecondCard.current.classList.remove('-translate-x-[50%]')} onMouseOver={() => slideSecondCard.current.classList.add('-translate-x-[50%]')} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCardSecond__three'>
            <div className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#FFE6E6] h-full'>
              <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={SecurityIcon} alt='improve section Image' width={50} height={50} />
              </div>
              <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {t('common:elimination_theft')}
              </p>
            </div>
            <div className='max-w-[300px] w-full flex flex-col justify-center pl-[34px] h-full bg-[#FFE6E6]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li className='max-w-[221px] w-full'>{t('common:exlusion_items')}</li>
                  <li className='max-w-[221px] w-full'>{t('common:prevention_cashier')}</li>
                  <li className='max-w-[221px] w-full'>{t('common:closing_store')}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={`h-[861px] bg-no-repeat w-full bg-center my-[70px] bg-cover`}>
        <h1 className='font-bold text-[44px] mb-10 text-[#111827] text-center leading-[140%] max-w-[801px] mx-auto'>{t("common:make_business")}</h1>
        <div className='flex items-center justify-center cursor-pointer'>
          <video loop poster="/assets/images/makeBusinessWithYoshop.png" className='w-full h-[600px]' controls>
              <source src={'/assets/videos/advertisement.mp4'} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="py-[70px]">
        <div className='mx-auto max-w-[1200px] bg-[url("../public/assets/images/question-bg.png")] w-full bg-[#fff] pl-[44px] pt-[21px] rounded-[20px] pb-[33px] bg-no-repeat my-[70px] bg-cover'>
          <h3 className='font-bold text-[32px] text-[#0F172A] text-center leading-[140%] mb-[40px] max-w-[460px] w-full'>
            {t("common:questions")}
          </h3>
          <Input inputType={'text'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF]'} placeholder=
            {t("common:name")}
            value={name} onChange={(value)=> setName(value)} />

          <Input inputType={'tel'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF]'} placeholder={t('common:number')} value={number} onChange={(value) => setNumber(value)} />

          <Button className={'max-w-[500px] py-[20px] w-full bg-[#ff588a] text-white rounded-[10px] font-bold text-base leading-[140%]'}>{t('common:order_call')}</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;