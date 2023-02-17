/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useContext } from 'react';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Arrowleft from '../public/assets/images/left.svg';
import ArrowRight from '../public/assets/images/right.svg';
import ListIcon from '../public/assets/images/listCircle.svg';
import Users from '../public/assets/images/people.png';
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

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, Mousewheel , FreeMode, Thumbs } from 'swiper';
// import "../styles/globals.css";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
    },
  };
}

function Home() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState();
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  // const [thumbsSwiper, setThumbsSwiper] = useState("1");
  // console.log(active)
  // const router = useRouter();
  // const [oneLicence, setOneLicene] = useState([licence[0]]);
  const handleChange = (event) => {
    let val = event.target.value;
    setActive(Number(val));
    // licence.map((el, index) => {
    //   if (val == index) {
    //     setOneLicene([el]);
    //   }
    // });
  };


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
            <div className='site-container flex flex-col !pt-[179px] justify-center bg-[url("../public/assets/images/main-hero.png")] hero pb-[50px] bg-no-repeat bg-right bg-[length:800px_785px]'>
              <div className='flex justify-between items-center mb-[200px]'>
                <div className='max-w-[567px] w-full'>
                  <p className='mb-[25px] max-w-[399px] w-full text-[20px] leading-[180%]'>
                    {t("common:mult_int_title")}
                  </p>
                  <h2 className='mb-[40px] text-[62px] text-[#FF588A] font-bold leading-[120%]'>
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
                    <p className='mb-[25px] max-w-[399px] w-full text-[20px] leading-[180%]'>
                      {t("common:mult_int_title")}
                    </p>
                    <h2 className='mb-[40px] text-[62px] text-[#FF588A] font-bold leading-[120%]'>
                      {t("common:use_tech")}
                    </h2>

                    <Button
                      className={
                        'pt-[16px] pb-[16px] px-[123px] bg-[#7D66BB] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white'
                      }
                    >
                      {t("common:try_free")}
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
                    <p className='mb-[25px] max-w-[399px] w-full text-[20px] leading-[180%]'>
                      {t("common:mult_int_title")}
                    </p>
                    <h2 className='mb-[40px] text-[62px] text-[#FF588A] font-bold leading-[120%]'>
                      {t("common:use_tech")}
                    </h2>

                    <Button
                      className={
                        'pt-[16px] pb-[16px] px-[123px] bg-[#7D66BB] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white'
                      }
                    >
                      {t("common:try_free")}
                    </Button>
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
        <div className='mx-auto max-w-[1230px] w-full h-[750px] bg-[#eff1fe80] rounded-[20px] relative pt-12 px-[60px]'>
          <div className='fixed w-[81px] h-[81px] right-20  bottom-14 z-10'>
            <Image src={PhoneCall} width={81} height={81} alt='phone call image' />
          </div>
          <h2 className='text-[38px] font-light leading-[57px] mb-[6px]'>
            {t('common:yoshop_licence')}
          </h2>
          <p className='text-base leading-[32px] uppercase opacity-60 mb-[100px]'>
            {t('common:phone_terminal')}
          </p>

          <div className='w-full'>
            <div className='flex w-full justify-between h-[702px]'>
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
                direction={"vertical"}
                slidesPerView={1}
                onActiveIndexChange={(swiper) => setActive(swiper.activeIndex)}
                spaceBetween={0}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel , FreeMode, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ul>
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
                      simple and intuitive interface
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      minimizing the amount of "manual" work
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      the maximum expansion of the range of goods sold
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      significant savings in time and effort required for the operation of the store
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul>
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
                      write-off of goods;
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      remote control "from home" for employees and the store.
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      search for reliable suppliers and distributors/coming soon
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul>
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
                      simple and convenient sale of goods;
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      simplified procedure and automatic accounting of returns;
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      No queues at the checkout
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul>
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
                      acceptance of all possible types of payments (cash and non-cash);
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      Increasing store throughput
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      prevention of theft by unscrupulous employees
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide>
                  <ul>
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
                      secure "cloud" data storage;
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      issuance of fiscal receipts "in one click";
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      secure storage of data on all payments;
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      access to fiscal history - for any period of time;
                    </li>
                    <li className='mb-[14px] pl-10 flex items-center'>
                      <Image
                        src={ListIcon}
                        alt='list circle'
                        width={6}
                        height={6}
                        className='mr mr-2'
                      />
                      complete confidentiality of all information.
                    </li>
                  </ul>
                </SwiperSlide>
              </Swiper>
              <div className='absolute h-[750px] top-1/4 right-28 -z-[1]'>
                {/* <Swiper
                  spaceBetween={10}
                  _swiper={(e) => console.log(e)}
                  slidesPerView={1}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image
                      src={'/assets/images/storeAutomation.jpg'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className='rounded-md'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={'/assets/images/storeAutomation.jpg'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className='rounded-md'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={'/assets/images/storeAutomation.jpg'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className='rounded-md'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={'/assets/images/storeAutomation.jpg'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className='rounded-md'
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={'/assets/images/storeAutomation.jpg'}
                      alt='slider image'
                      width={550}
                      height={300}
                      className='rounded-md'
                    />
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>

          <div className='absolute -right-44 bottom-2/4 rotate-90'>
            <input
              type='range'
              defaultValue={active}
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
            <h2 className='text-[#0F172A] max-w-[521px] w-full font-bold text-[40px] leading-[140%] mb-[30px]'>
              {t("common:download_info")}
              {/* <span className='bg-[#FF588A] rounded-md text-white'>Download</span> the mobile app and get <span className='bg-[#FF588A] rounded-md text-white'>1 month free,</span> then ₸ 3000 for month */}
            </h2>
            <div className='flex items-center justify-start'>
              <Image src={Users} className='mr-3' width={230} height={70} alt='people Image' />
              <p className='text-[#000] font-normal text-xl'>{t("common:download_users")}</p>
            </div>
          </div>
          <div className='flex flex-col text-white'>
            <Button className={'py-[18px] px-[50px] mb-[15px] bg-[#242424] rounded-2xl flex items-center font-PromptMedium text-[24px] leading-[36px]'}>
              <Image className='mr-[10px]' src={AppStore} width={40} height={40} alt='app store Image' />
              Appstore
            </Button>
            <Button className={'py-[18px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-PromptMedium text-[24px] leading-[36px]'}>
              <Image className='mr-[10px]' src={GooglePlay} width={40} height={40} alt='google play Image' />
              Google play
            </Button>
          </div>
        </div>
      </section>
      <section className='py-[75px]'>
        <div className="mx-auto max-w-[1200px] w-full poppins">
          <h2 className='text-[#111827] font-bold text-[44px] leading-[140%] mb-[60px]'>
            {t("common:improve_business")}
          </h2>
          <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px]">
            <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
              <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={PaymentIcon} alt='improve section Image' width={85} height={58} />
              </div>
              <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {t("common:types_of_payment")}
              </p>
            </li>
            <li className='max-w-[300px] w-full py-[64px] pl-[34px]'>
              <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                <li>
                  {t("common:bank_cards")}
                </li>
                <li>
                  {t("common:qr")}
                </li>
                <li>
                  {t("common:apple_pay")}
                </li>
                <li>
                  {t("common:samsung_pay")}
                </li>
                <li>
                  {t("common:google_pay")}
                </li>
              </ul>
            </li>
            <li className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[28px] bg-[#FBF1F1]'>
              <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={InterfaceIcon} alt='improve section Image' width={42} height={69} />
              </div>
              <p className='max-w-[198px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {
                  t('common:simple_int_interface')
                }
              </p>
            </li>
            <li className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#FFE6E6]'>
              <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={StoreReport} alt='improve section Image' width={60} height={60} />
              </div>
              <p className='max-w-[168px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {
                  t('common:store_report')
                }
              </p>
            </li>
          </ul>
          <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px]">
            <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
              <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={FiscalizationIcon} alt='improve section Image' width={50} height={60} />
              </div>
              <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {t('common:fiscalazition')}
              </p>
            </li>
            <li className='max-w-[300px] w-full py-[64px] pl-[34px]'>
              <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                <li>{t('common:issuance')}</li>
                <li>{t('common:simple_tac_reporting')}</li>
              </ul>
            </li>
            <li className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[50px] bg-[#FBF1F1]'>
              <div className='bg-[#fbe2e7]   max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={FullyOrginazeStore} alt='improve section Image' width={60} height={49} />
              </div>
              <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {t('common:orginize_store')}
              </p>
            </li>
            <li className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#FFE6E6]'>
              <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                <Image src={SecurityIcon} alt='improve section Image' width={50} height={50} />
              </div>
              <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                {t('common:elimination_theft')}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={`bg-[url("../public/assets/images/makeBusinessWithYoshop.png")] h-[861px] bg-no-repeat w-full bg-top my-[70px] bg-cover`}>
        <div className='site-container'>
          <h1 className='font-bold text-[44px] text-[#111827] text-center leading-[140%] max-w-[801px] mx-auto'>{t("common:make_business")}</h1>
        </div>
      </section>
      <section className="py-[70px]">
        <div className='mx-auto max-w-[1200px] bg-[url("../public/assets/images/question-bg.png")] w-full bg-[#fff] pl-[44px] pt-[21px] rounded-[20px] pb-[33px] bg-no-repeat my-[70px] bg-cover'>
          <h3 className='font-bold text-[32px] text-[#0F172A] text-center leading-[140%] mb-[40px] max-w-[460px] w-full'>
            {t("common:questions")}
          </h3>
          <Input inputType={'text'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF]'} placeholder=
            {t("common:name")}
            value={name} onGetValue={setName} />

          <Input inputType={'tel'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF]'} placeholder={t('common:number')} value={number} onGetValue={setNumber} />

          <Button className={'max-w-[500px] py-[20px] w-full bg-[#ff588a] text-white rounded-[10px] font-bold text-base leading-[140%]'}>{t('common:order_call')}</Button>
        </div>
      </section>
    </main>
  );
}

export default Home;

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { EffectCoverflow, Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

