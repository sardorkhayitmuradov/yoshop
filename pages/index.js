/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Button from '../components/Button/Button';
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { getItems } from "../redux/features/carts";
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';
// import Input from '../components/Input/Input';

export async function getStaticProps({ locale }) {

  const { data, query, variables } = await client.queries.home({
    relativePath: `${locale}/home.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
      ...(await serverSideTranslations(locale ?? 'ru', ["common", "header", "footer"], i18nConfig)),
    },
  };
}

function Home(props) {
  const router = useRouter()
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const swiperRef = useRef();
  const handleChange = (event) => {
    let val = event.target.value;
    setActive(Number(val));
    swiperRef.current.swiper.slideTo(Number(val));
  };

  const slideFirstCard = useRef();
  const slideSecondCard = useRef();

  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const datas = JSON.parse(localStorage.getItem("data"));
      if (datas) {
        dispatch(getItems(datas))
      }
    }
  }, [dispatch]);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.home;

  return (
    <main className='pt-[100px] w-full max-[450px]:pt-0'>
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
            <div className='bg-[url("../public/assets/images/hero.png")] bg-no-repeat bg-right-top bg-[length:1200px_775px] max-[450px]:bg-[url("../public/assets/images/banner1-mobile.png")] max-[450px]:bg-cover max-[450px]:bg-center'>
              <div className='max-w-xl mx-auto max-[450px]:px-6 flex flex-col pt-[179px] justify-center max-[450px]:py-[70px] max-[450px]:mt-[50px]'>
                <div className='flex justify-between items-center mb-[200px] max-[450px]:m-0'>
                  <div className='max-w-[587px] w-full max-[450px]:max-w-[280px]'>
                    <p className='mb-[25px] max-w-[490px] w-full text-[18px] leading-[180%] max-[450px]:max-w-[142px] max-[450px]:mb-1 max-[450px]:text-[16zpx] max-[450px]:leading-[180%] max-[450px]:text-[#D1D5DB]'>
                      {pageData.hero.firstSlider.multIntTitle}
                    </p>
                    <h2 className='mb-[40px] max-w-[502px] w-full text-[56px] text-[#FF588A] font-bold leading-[120%] max-[450px]:max-w-[185px] max-[450px]:mb-[18px] max-[450px]:text-[20px] max-[450px]:leading-[140%]'>
                      {pageData.hero.firstSlider.useTech}
                    </h2>
                    <Button
                      className={
                        'py-[11px] px-[74.5px] bg-[#7D66BB] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white max-[450px]:py-[10px] max-[450px]:px-[64px] max-[450px]:bg-[#FF588A]'
                      }
                    >
                      {pageData.hero.firstSlider.tryFreeButton}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("../public/assets/images/banner2.jpg")] hero bg-no-repeat bg-cover max-[450px]:bg-[url("../public/assets/images/banner2-mobile.png")] max-[450px]:bg-center max-[450px]:mt-[50px]'>
              <div className='max-w-xl mx-auto flex flex-col pt-[179px] pb-[50px] justify-center max-[450px]:py-[100px] max-[450px]:px-6'>
                <div className='flex justify-between items-center mb-[200px] max-[450px]:mb-0'>
                  <div className='max-w-[649px] w-full max-[450px]:max-w-[240px]'>
                    <div className='mb-[67px] text-[40px] font-bold leading-[120%] max-[450px]:max-w-[195px] max-[450px]:text-[20px] max-[450px]:mb-[32px] max-[450px]:leading-[140%]'>
                      <div>
                        <h2 className={`bg-[#FF588A] text-[#fff] rounded ${router.locale = 'ru' ? 'inline-block max-[450px]:inline p-[1px]' : 'inline'}`}>{pageData.hero.secondSlider.buyTitle}</h2>
                      </div>
                      <h2 className='text-[#fff] inline'>{pageData.hero.secondSlider.buyRetail}</h2>
                      <br />
                      <h2 className={`bg-[#FF588A] text-[#fff] rounded ${router.locale = 'ru' ? 'inline-block max-[450px]:inline max-[450px]:p-[1px]' : 'inline'}`}>{pageData.hero.secondSlider.buyFree}</h2>
                    </div>

                    <Button
                      className={
                        'py-[17px] px-[132px] bg-[#FF588A] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white max-[450px]:px-[10px] max-[450px]:py-[10px] max-[450px]:max-w-[225px] max-xs:w-full'
                      }
                    >
                      {pageData.hero.secondSlider.buyNow}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bg-[url("../public/assets/images/banner3.jpg")] hero bg-no-repeat bg-cover  max-[450px]:bg-[url("../public/assets/images/banner3-mobile.png")] max-[450px]:bg-cover max-[450px]:bg-right max-[450px]:mt-[70px]'>
              <div className='max-w-xl mx-auto flex flex-col pt-[179px] pb-[50px] justify-center max-[450px]:py-[100px] max-[450px]:px-6'>
                <div className='flex justify-between items-center mb-[200px] max-[450px]:w-full max-[450px]:m-0'>
                  <div className='max-w-[567px] w-full max-[450px]:max-w-[250px]'>
                    <div>
                      <div className='max-w-[560px] w-full font-bold text-[40px] leading-[134%] mb-[40px] max-[450px]:text-[20px]  max-[450px]:leading-[140%]'>
                        <span className='bg-[#FF588A] pt-1 px-1 rounded-md text-white'>{pageData.hero.thirdSlider.download}</span>
                        {pageData.hero.thirdSlider.downloadMobile}
                        <span className='bg-[#FF588A] rounded-md text-white'>{pageData.hero.thirdSlider.downloadFree}</span>
                        <h2 className='max-xs:max-w-[130px]'>{pageData.hero.thirdSlider.downloadMonth}</h2>
                      </div>
                    </div>
                    <div className='flex text-white items-center justify-between'>
                      {/* <Button
                        className={
                          'py-[17px] px-[132px] bg-[#FF588A] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-bold text-white max-[450px]:px-[74px] max-[450px]:py-[10px] max-[450px]:max-w-[225px] max-[450px]:block hidden'
                        }
                      >
                        {t("common:downloadit")}
                      </Button> */}
                      <Button className={'py-[17px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-medium text-[24px] leading-[36px] max-[450px]:hidden'}>
                        <Image className='mr-[10px]' src={AppStore} width={40} height={40} alt='app store Image' />
                        App Store
                      </Button>
                      <Button className={'py-[17px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-medium text-[24px] leading-[36px] max-[450px]:hidden'}>
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
        className={`pt-[150px] pb-[75px] relative max-[450px]:py-[17px]`}

      >
        <div className='max-w-xl mx-auto w-full h-[750px] max-[450px]:h-auto overflow-hidden bg-[#eff1fe80] max-[450px]:bg-white rounded-[20px] relative pt-12 px-[60px] max-[450px]:px-0'>
          <div className='fixed w-[81px] h-[81px] right-20 bottom-14 z-10 max-[450px]:w-[60px] max-[450px]:h-[60px] max-[450px]:right-3'>
            <Link href="tel:+77004508011">
              <Image src={PhoneCall} width={81} height={81} alt='phone call image' />
            </Link>
          </div>
          <h2 className='text-[38px] font-light leading-[57px] mb-[6px] max-[450px]:text-[24px] max-[450px]:text-[#111827] max-[450px]:font-bold max-[450px]:leading-[140%] max-[450px]:mb-0 max-[450px]:px-6'>
            {pageData.license.title}
          </h2>
          <p className='text-base leading-[32px] uppercase opacity-60 mb-[70px] max-[450px]:text-[#111827] max-[450px]:text-[18px] max-[450px]:leading-[25px] max-[450px]:lowercase max-[450px]:mb-[30px] max-[450px]:px-6'>
            {pageData.license.text}
          </p>
          {/* max-[450px]:font-bold max-[450px]:text-[20px] max-[450px]:leading-[140%] */}

          <div className='w-full'>
            <div className='flex w-full justify-between h-[340px] items-center max-[450px]:h-auto'>
              <ul className='max-w-[175px] w-full pt-[35px] max-[450px]:hidden'>
                <li className='mb-[30px] relative'>{active === 0 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{pageData.license.storeAutomation.title}</p></li>
                <li className='mb-[30px] relative'>{active === 1 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{pageData.license.fullControlBusiness.title}</p></li>
                <li className='mb-[30px] relative'>{active === 2 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{pageData.license.effectiveSalesManagement.title}</p></li>
                <li className='mb-[30px] relative'>{active === 3 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]'>{pageData.license.extractMinProfit.title}</p></li>
                <li className='mb-[30px] relative'>
                  {active === 4 && <div className='absolute left-[-3px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}
                  <p className='z-10 relative text-base leading-[20px]'>{pageData.license.absoluteSafeBusiness.title}</p>
                </li>
              </ul>
              <Swiper
                ref={swiperRef}
                direction={"vertical"}
                onActiveIndexChange={(swiper) => { setActive(swiper.activeIndex) }}
                // mousewheel={false}
                // grabCursor={false}
                spaceBetween={10}
                draggable={true}
                // touchReleaseOnEdges={true}
                effect={"coverflow"}
                slidesPerView={'auto'}
                centeredSlides={true}
                passiveListeners={false}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 0.5,
                  slideShadows: false,
                }}
                allowTouchMove={false}
                modules={[EffectCoverflow, FreeMode, Thumbs, Autoplay]}
                className="max-[450px]:block hidden max-[450px]:ml-0 w-full"
              >
                <SwiperSlide>
                  <div className='mb-[30px] first relative max-[450px]:px-6 max-[450px]:mb-4'>{active === 0 && <div className='absolute left-[23px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px] max-[450px]:font-bold max-[450px]:text-[20px] max-[450px]:leading-[140%]'>{pageData.license.storeAutomation.title}</p></div>
                  <div className={`${active !== 0 && "hidden"}`}>
                    <div className={`${active == 0 ? 'opacity-20' : ""} mb-4`}>
                      <Image
                        src={pageData.license.storeAutomation.image}
                        alt='slider image'
                        width={550}
                        height={300}
                        className={`rounded-md`}
                      />
                    </div>
                    {
                      pageData.license.storeAutomation.items.map((el, index) => {
                        return (
                          <div key={index} className='mb-1 flex items-center px-6'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </div>
                        )
                      })
                    }
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='mb-[30px] relative max-[450px]:px-6'>{active === 1 && <div className='absolute left-[23px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]  max-[450px]:font-bold max-[450px]:text-[20px] max-[450px]:leading-[140%]'>{pageData.license.fullControlBusiness.title}</p></div>
                  <div className={`${active !== 1 && "hidden"}`}>
                    <div className={`${active == 1 ? 'opacity-40' : ""}`}>
                      <Image
                        src={pageData.license.fullControlBusiness.image}
                        alt='slider image'
                        width={550}
                        height={300}
                        className={`rounded-md`}
                      />
                    </div>

                    {
                      pageData.license.fullControlBusiness.items.map((el, index) => {
                        return (
                          <div key={index} className='mb-1 px-6 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </div>
                        )
                      })
                    }
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='mb-[30px] relative max-[450px]:px-6'>{active === 2 && <div className='absolute left-[23px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px]  max-[450px]:font-bold max-[450px]:text-[20px] max-[450px]:leading-[140%]'>{pageData.license.effectiveSalesManagement.title}</p></div>
                  <div className={`${active !== 2 && "hidden"}`}>
                    <div className={`${active == 2 ? 'opacity-40' : ""}`}>
                      <Image
                        src={pageData.license.effectiveSalesManagement.image}
                        alt='slider image'
                        width={550}
                        height={300}
                        className={`rounded-md`}
                      />
                    </div>
                    {
                      pageData.license.effectiveSalesManagement.items.map((el, index) => {
                        return (
                          <div key={index} className='mb-1 px-6 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </div>

                        )
                      })
                    }
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='mb-[30px] relative max-[450px]:px-6'>{active === 3 && <div className='absolute left-[23px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}<p className='z-10 relative text-base leading-[20px] max-[450px]:font-bold max-[450px]:text-[20px] max-[450px]:leading-[140%]'>{pageData.license.extractMinProfit.title}</p></div>
                  <div className={`${active !== 3 && "hidden"}`}>
                    <div className={`${active == 3 ? 'opacity-40' : ""}`}>
                      <Image
                        src={pageData.license.extractMinProfit.image}
                        alt='slider image'
                        width={550}
                        height={300}
                        className={`rounded-md`}
                      />
                    </div>
                    {
                      pageData.license.extractMinProfit.items.map((el, index) => {
                        return (
                          <div key={index} className='mb-1 px-6 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </div>
                        )
                      })
                    }
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <div className='mb-[30px] last relative max-[450px]:px-6'>
                    {active === 4 && <div className='absolute left-[23px] w-[15px] h-[30px] bg-[#FF588A] top-[-6px]'></div>}
                    <p className='z-10 relative text-base leading-[20px] max-[450px]:font-bold max-[450px]:text-[20px] max-[450px]:leading-[140%]'>{pageData.license.absoluteSafeBusiness.title}</p>
                  </div>
                  <div className={`${active !== 4 && "hidden"}`}>
                    <div className={`${active == 4 ? 'opacity-40' : ""}`}>
                      <Image
                        src={pageData.license.absoluteSafeBusiness.image}
                        alt='slider image'
                        width={550}
                        height={300}
                        className={`rounded-md`}
                      />
                    </div>
                    {
                      pageData.license.absoluteSafeBusiness.items.map((el, index) => {
                        return (

                          <div key={index} className='mb-1 px-6 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </div>
                        )
                      })
                    }
                  </div>
                </SwiperSlide>
              </Swiper>

              <Swiper
                ref={swiperRef}
                direction={"vertical"}
                onActiveIndexChange={(swiper) => setActive(swiper.activeIndex)}
                mousewheel={true}
                grabCursor={true}
                spaceBetween={200}
                effect={"coverflow"}
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
                className="mySwiper max-[450px]:hidden"
              >
                <SwiperSlide>

                  <ul className={`${active == 0 ? "" : "opacity-0"}`}>
                    <li className='text-5xl leading-[73px] mb-[10px] font-bold'>
                      {pageData.license.storeAutomation.title}
                    </li>

                    {
                      pageData.license.storeAutomation.items.map((el, index) => {
                        return (
                          <li key={index} className='mb-[14px] pl-10 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </li>

                        )
                      })
                    }
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 0 ? 'opacity-20' : ""}`}>
                    <Image
                      src={pageData.license.storeAutomation.image}
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
                      {pageData.license.fullControlBusiness.title}
                    </li>

                    {
                      pageData.license.fullControlBusiness.items.map((el, index) => {
                        return (
                          <li key={index} className='mb-[14px] pl-10 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </li>

                        )
                      })
                    }
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 1 ? 'opacity-40' : ""}`}>
                    <Image
                      src={pageData.license.fullControlBusiness.image}
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
                      {pageData.license.effectiveSalesManagement.title}
                    </li>

                    {
                      pageData.license.effectiveSalesManagement.items.map((el, index) => {
                        return (
                          <li key={index} className='mb-[14px] pl-10 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </li>

                        )
                      })
                    }
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 2 ? 'opacity-40' : ""}`}>
                    <Image
                      src={pageData.license.effectiveSalesManagement.image}
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
                      {pageData.license.extractMinProfit.title}
                    </li>

                    {
                      pageData.license.extractMinProfit.items.map((el, index) => {
                        return (

                          <li key={index} className='mb-[14px] pl-10 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </li>
                        )
                      })
                    }
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 3 ? 'opacity-40' : ""}`}>
                    <Image
                      src={pageData.license.extractMinProfit.image}
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
                      {pageData.license.absoluteSafeBusiness.title}
                    </li>

                    {
                      pageData.license.absoluteSafeBusiness.items.map((el, index) => {
                        return (
                          <li key={index} className='mb-[14px] pl-10 flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el.text}
                          </li>

                        )
                      })
                    }
                  </ul>

                  <div className={`absolute h-[340px] -top-8 right-0 -z-[1] ${active == 4 ? 'opacity-40' : ""}`}>
                    <Image
                      src={pageData.license.absoluteSafeBusiness.image}
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

          <div className='absolute -right-44 bottom-2/4 rotate-90 max-[450px]:hidden'>
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
      <section className='py-[75px] max-[450px]:py-4'>
        <div className="max-w-xl mx-auto w-full bg-[#EFF1FE] h-[352px] rounded-[20px] pt-[55px] pb-[30px] pl-[60px] pr-[56px] flex items-center justify-between max-[450px]:flex-col max-[450px]:py-[0px] max-[450px]:bg-white max-[450px]:rounded-none max-[450px]:px-0">
          <div className='max-[450px]:bg-[#EFF1FE] max-[450px]:py-[15px] max-[450px]:w-full max-[450px]:px-6 max-[450px]:mb-[20px]'>
            <div className='text-[#0F172A] max-w-[560px] w-full font-bold text-[40px] leading-[140%] mb-[30px] max-[450px]:mb-0 max-[450px]:text-[24px] max-[450px]:leading-[175.5%] max-[450px]:text-center'>
              <span className='bg-[#FF588A] rounded-md text-white max-[450px]:block max-[450px]:text-center'>{pageData.hero.thirdSlider.download}</span>
              {pageData.hero.thirdSlider.downloadMobile}
              <span className='bg-[#FF588A] rounded-md text-white max-[450px]:block max-[450px]:text-center'>{pageData.hero.thirdSlider.downloadFree}</span>
              <h2>{pageData.hero.thirdSlider.downloadMonth}</h2>
            </div>
          </div>
          <div className='flex flex-col text-white max-[450px]:bg-[#fff]'>
            <Button className={'py-[17px] px-[50px] mb-[15px] bg-[#242424] rounded-2xl flex items-center font-medium text-[24px] leading-[36px] max-[450px]:py-[6px]'}>
              <Image className='mr-[10px]' src={AppStore} width={40} height={40} alt='app store Image' />
              App Store
            </Button>
            <Button className={'py-[17px] px-[50px] bg-[#242424] rounded-2xl flex items-center font-medium text-[24px] leading-[36px] max-[450px]:py-[6px]'}>
              <Image className='mr-[10px]' src={GooglePlay} width={40} height={40} alt='google play Image' />
              Google play
            </Button>
          </div>
        </div>
      </section>
      <section className='py-[75px] max-[450px]:py-4'>
        <div className="max-w-xl mx-auto w-full overflow-hidden max-[450px]:px-6">
          <h2 className='text-[#111827] font-bold text-[44px] leading-[140%] mb-[60px] max-[450px]:text-[24px] max-[450px]:mb-5'>
            {pageData.features.title}
          </h2>
          <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden max-[450px]:hidden">
            <li className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCard__one'>
              <div className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={pageData.features.typesOfPayment.image} alt='improve section Image' width={85} height={58} />
                </div>
                <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {pageData.features.typesOfPayment.title}
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  {
                    pageData.features.typesOfPayment.items.map((el, index) => {
                      return (
                        <li key={index} className='max-w-[202px] w-full'>
                          {el.text}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li ref={slideFirstCard} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCard__two'>
              <div className='max-w-[300px] w-full py-[64px] pl-[78px] bg-[#FBF1F1] h-full'>
                <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={pageData.features.simpleIntInterface.image} alt='improve section Image' width={42} height={69} />
                </div>
                <p className='max-w-[198px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {
                    pageData.features.simpleIntInterface.title
                  }
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px] bg-[#FBF1F1] h-full'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  {
                    pageData.features.simpleIntInterface.items.map((el, index) => {
                      return (
                        <li key={index} className='max-w-[202px] w-full'>
                          {el.text}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li onMouseOut={() => slideFirstCard.current.classList.remove('-translate-x-[50%]')} onMouseOver={() => slideFirstCard.current.classList.add('-translate-x-[50%]')} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCard__three'>
              <div className='max-w-[300px] w-full py-[64px] pl-[78px] bg-[#FFE6E6] h-full'>
                <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={pageData.features.storeReport.image} alt='improve section Image' width={60} height={60} />
                </div>
                <p className='max-w-[168px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {
                    pageData.features.storeReport.title
                  }
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px] bg-[#FFE6E6] h-full'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  {
                    pageData.features.storeReport.items.map((el, index) => {
                      return (
                        <li key={index} className='max-w-[202px] w-full'>
                          {el.text}
                        </li>

                      )
                    })
                  }
                </ul>
              </div>
            </li>
          </ul>
          <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px] rounded-tr-[20px] rounded-br-[20px] overflow-hidden max-[450px]:hidden">
            <li className="max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCardSecond__one">
              <div className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={pageData.features.fiscalazition.image} alt='improve section Image' width={50} height={60} />
                </div>
                <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {pageData.features.fiscalazition.title}
                </p>
              </div>
              <div className='max-w-[300px] w-full py-[64px] pl-[34px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  {
                    pageData.features.fiscalazition.items.map((el, index) => {
                      return (
                        <li key={index} className='max-w-[188px] w-full'>{el.text}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li ref={slideSecondCard} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCardSecond__two'>
              <div className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[50px] bg-[#FBF1F1]'>
                <div className='bg-[#fbe2e7]   max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={pageData.features.orginizeStore.image} alt='improve section Image' width={60} height={49} />
                </div>
                <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {pageData.features.orginizeStore.title}
                </p>
              </div>
              <div className='max-w-[300px] w-full h-full flex flex-col justify-center pl-[34px] bg-[#FBF1F1]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  {
                    pageData.features.orginizeStore.items.map((el, index) => {
                      return (
                        <li key={index} className='max-w-[221px] w-full'>{el.text}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
            <li onMouseOut={() => slideSecondCard.current.classList.remove('-translate-x-[50%]')} onMouseOver={() => slideSecondCard.current.classList.add('-translate-x-[50%]')} className='max-w-[600px] w-full flex items-center flex-shrink-0 slideCard slideCardSecond__three'>
              <div className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#FFE6E6] h-full'>
                <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={pageData.features.eliminationTheft.image} alt='improve section Image' width={50} height={50} />
                </div>
                <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  {pageData.features.eliminationTheft.title}
                </p>
              </div>
              <div className='max-w-[300px] w-full flex flex-col justify-center pl-[34px] h-full bg-[#FFE6E6]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  {
                    pageData.features.eliminationTheft.items.map((el, index) => {
                      return (
                        <li key={index} className='max-w-[221px] w-full'>{el.text}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </li>
          </ul>
          <div className='max-[450px]:block hidden'>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className='mb-[80px]'
            >
              <SwiperSlide>
                <li className='w-full flex items-center py-10'>
                  <div className='w-[31%]'>
                    <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[6px]'>
                      <Image src={PaymentIcon} alt='improve section Image' width={85} height={58} />
                    </div>
                    <p className='max-w-[145px] w-full font-bold text-base text-center text-[#656974] leading-[140%]'>
                      {t("common:types_of_payment")}
                    </p>
                  </div>
                  <div className='pl-[34px] w-[69%]'>
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
              </SwiperSlide>
              <SwiperSlide>
                <li className='w-full flex items-center py-10'>
                  <div className='w-[31%]'>
                    <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[6px]'>
                      <Image src={InterfaceIcon} alt='improve section Image' width={42} height={69} />
                    </div>
                    <p className='max-w-[145px] w-full font-bold text-base text-center text-[#656974] leading-[140%]'>
                      {
                        t('common:simple_int_interface')
                      }
                    </p>
                  </div>
                  <div className='pl-[34px] w-[69%]'>
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
              </SwiperSlide>
              <SwiperSlide>
                <li className='w-full flex items-center py-10'>
                  <div className='w-[31%]'>
                    <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[6px]'>
                      <Image src={StoreReport} alt='improve section Image' width={60} height={60} />
                    </div>
                    <p className='max-w-[145px] w-full font-bold text-base text-center text-[#656974] leading-[140%]'>
                      {
                        t('common:store_report')
                      }
                    </p>
                  </div>
                  <div className='pl-[34px] w-[69%]'>
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
              </SwiperSlide>
            </Swiper>
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
                <li className='w-full flex items-center py-10'>
                  <div className='w-[31%]'>
                    <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[6px]'>
                      <Image src={FiscalizationIcon} alt='improve section Image' width={50} height={60} />
                    </div>
                    <p className='max-w-[145px] w-full font-bold text-base text-center text-[#656974] leading-[140%]'>
                      {t('common:fiscalazition')}
                    </p>
                  </div>
                  <div className='pl-[34px] w-[69%]'>
                    <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                      <li className='max-w-[188px] w-full'>{t('common:issuance')}</li>
                      <li className='max-w-[188px] w-full'>{t('common:simple_tac_reporting')}</li>
                    </ul>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='w-full flex items-center py-10'>
                  <div className='w-[31%]'>
                    <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[6px]'>
                      <Image src={FullyOrginazeStore} alt='improve section Image' width={60} height={49} />
                    </div>
                    <p className='max-w-[145px] w-full font-bold text-base text-center text-[#656974] leading-[140%]'>
                      {t('common:orginize_store')}

                    </p>
                  </div>
                  <div className='pl-[34px] w-[69%]'>
                    <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                      <li className='max-w-[221px] w-full'>{t('common:organize_sales')}</li>
                      <li className='max-w-[221px] w-full'>{t('common:fast_service')}</li>
                      <li className='max-w-[221px] w-full'>{t('common:goods_stock')}</li>
                      <li className='max-w-[221px] w-full'>{t('common:convinient_analystics')}</li>
                    </ul>
                  </div>
                </li>
              </SwiperSlide>
              <SwiperSlide>
                <li className='w-full flex items-center py-10'>
                  <div className='w-[31%]'>
                    <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[6px]'>
                      <Image src={SecurityIcon} alt='improve section Image' width={50} height={50} />
                    </div>
                    <p className='max-w-[145px] w-full font-bold text-base text-center text-[#656974] leading-[140%]'>
                      {t('common:elimination_theft')}
                    </p>
                  </div>
                  <div className='pl-[34px] w-[69%]'>
                    <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                      <li className='max-w-[221px] w-full'>{t('common:exlusion_items')}</li>
                      <li className='max-w-[221px] w-full'>{t('common:prevention_cashier')}</li>
                      <li className='max-w-[221px] w-full'>{t('common:closing_store')}</li>
                    </ul>
                  </div>
                </li>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className={`h-[861px] bg-no-repeat w-full bg-center my-[70px] bg-cover max-[450px]:py-4 max-[450px]:h-[400px]`}>
        <h1 className='font-bold text-[44px] mb-10 text-[#111827] text-center leading-[140%] max-w-[801px] mx-auto max-[450px]:text-[24px] max-[450px]:leading-[140%] max-[450px]:text-left max-[450px]:px-6'>{t("common:make_business")}</h1>
        <div className='flex items-center justify-center cursor-pointer'>
          <video loop poster="/assets/images/makeBusinessWithYoshop.png" className='w-full h-[600px] max-[450px]:h-[300px] max-[450px]:object-cover' controls>
            <source src={'/assets/videos/advertisement.mp4'} type="video/mp4" />
          </video>
        </div>
      </section>
      {/* <section className="py-[70px] max-[450px]:pt-4 max-[450px]:pb-[40px]">
        <div className='max-w-xl mx-auto bg-[url("../public/assets/images/question-bg.png")] w-full bg-[#fff] pl-[44px] pt-[21px] rounded-[20px] pb-[33px] bg-no-repeat my-[70px] bg-cover max-[450px]:px-6 max-[450px]:bg-none max-[450px]:my-0'>
          <h3 className='font-bold text-[32px] text-[#0F172A] text-center leading-[140%] mb-[40px] max-w-[460px] w-full max-[450px]:text-[24px] max-[450px]:mb-5 max-[450px]:text-left'>
            {t("common:questions")}
          </h3>
          <Input inputType={'text'} wrapperClassName={'max-w-[500px] w-full mb-5'} inputClassName={'w-full py-5 pl-[56px] placeholder:text-[#979AA1] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF] max-[450px]:py-[13px] max-[450px]:pl-[30px]'} placeholder=
            {t("common:name")}
            value={name} onChange={(value) => setName(value)} />

          <Input inputType={'tel'} wrapperClassName={'max-w-[500px] w-full mb-5'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF] max-[450px]:py-[13px] max-[450px]:pl-[30px]'} placeholder={t('common:number')} value={number} onChange={(value) => setNumber(value)} />

          <Button className={'max-w-[500px] py-[20px] w-full bg-[#ff588a] text-white rounded-[10px] font-bold text-base leading-[140%] max-[450px]:py-[13px]'}>{t('common:order_call')}</Button>
        </div>
      </section> */}
    </main>
  );
}

export default Home;