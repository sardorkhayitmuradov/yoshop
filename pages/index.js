/* eslint-disable react/no-unescaped-entities */
// import { getSession, signIn, signOut } from 'next-auth/react';
// import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import Button from '../components/Button/Button';
import Image from 'next/image';
import Arrowleft from '../public/assets/images/left.svg';
import ArrowRight from '../public/assets/images/right.svg';
import ListIcon from '../public/assets/images/listCircle.svg';
import sliderImage from '../public/assets/images/slider-image.jpg'
import slider2 from '../public/assets/images/slider2.jpg';
import slider3 from '../public/assets/images/slider3.jpg'
import Users  from '../public/assets/images/people.jpg'
import AppStore from '../public/assets/images/appStore.png'
import GooglePlay from '../public/assets/images/googlePlay.png'
import PaymentIcon from '../public/assets/images/typesPayment.png'
import InterfaceIcon from '../public/assets/images/interface.png'
import StoreReport from '../public/assets/images/report.png'
import FiscalizationIcon from '../public/assets/images/receiptitem.png'
import FullyOrginazeStore from '../public/assets/images/store.png'
import SecurityIcon from '../public/assets/images/securitysafe.png'
import Input from '../components/Input/Input';

const licence = [
    {
      title: 'Store automation',
      description: [
        'simple and intuitive interface',
        'minimizing the amount of "manual" work',
        'prevention of theft by dishonest employees',
        'the maximum expansion of the range of goods sold',
        'significant savings in time and effort required for the operation of the store',
      ],
      image: sliderImage
    },
    {
      title: 'Full control business',
      description: [
        'simple and intuitive interface',
        'minimizing the amount of "manual" work',
        'prevention of theft by dishonest employees',
        'the maximum expansion of the range of goods sold',
        'significant savings in time and effort required for the operation of the store',
      ],
      image: slider2
    },
    {
      title: 'Effective sales management',
      description: [
        'simple and intuitive interface',
        'minimizing the amount of "manual" work',
        'prevention of theft by dishonest employees',
        'the maximum expansion of the range of goods sold',
        'significant savings in time and effort required for the operation of the store',
      ],
      image: slider3
    },
    {
      title: 'Extracting maximum profit',
      description: [
        'simple and intuitive interface',
        'minimizing the amount of "manual" work',
        'prevention of theft by dishonest employees',
        'the maximum expansion of the range of goods sold',
        'significant savings in time and effort required for the operation of the store',
      ],
      image: sliderImage
    },
    {
      title: 'Absolutely safe and legal business',
      description: [
        'simple and intuitive interface',
        'minimizing the amount of "manual" work',
        'prevention of theft by dishonest employees',
        'the maximum expansion of the range of goods sold',
        'significant savings in time and effort required for the operation of the store',
      ],
      image: slider2
    },
];


function Home() {
  const [value, setValue] = useState(0);
  const [oneLicence, setOneLicene] = useState([licence[0]])
  const handleChange = (event) => {
    let val = event.target.value
    setValue(val);
    licence.map((el,index)=>{
      if(val == index){
        setOneLicene([el])
      }
    })
  };
  console.log(oneLicence)
  
  return (
    <main className='grow'>
      <section
        className={`hero pb-[50px] bg-[url("../public/assets/images/hero-image.png")] bg-no-repeat bg-right-top pt-[208px]`}
      >
        <div className='site-container flex flex-col justify-center'>
          <div className='hero-info flex justify-between items-center mb-[200px]'>
            <div className='hero-left max-w-[583px] w-full'>
              <p className='hero-left-title mb-[40px] max-w-[410px] w-full text-[18px] leading-[180%] font-normal'>
                Multifunctional inventory software that allows you to fully
                automate the work of the store
              </p>

              <h2 className='mb-[57px] font-bold text-[56px] text-[#FC7941]'>
                Use Your Phone as a POS Terminal
              </h2>

              <Button
                className={
                  'pt-[16px] pb-[26px] px-[123px] bg-[#4F46E5] border-[1px] border-solid border-[#94A3B8] rounded-[10px] font-bold leading-[140%] text-xl'
                }
              >
                Try for free
              </Button>
            </div>
          </div>
          <div className='flex items-center max-w-[60px] w-full justify-between self-center justify-self-end'>
            <Image
              src={Arrowleft}
              alt='site-logo'
              width={20}
              height={20}
              className='mb-[30px]'
            />
            <Image
              src={ArrowRight}
              alt='site-logo'
              width={20}
              height={20}
              className='mb-[30px]'
            />
          </div>
        </div>
      </section>
      <section
        className={`pt-[150px] bg-[url("../public/assets/images/hero-call.png")] bg-no-repeat bg-right-top pb-[75px]`}
      >
        <div className='mx-auto max-w-[1230px] w-full h-[750px] bg-[#ffffff0d] rounded-[20px] relative pt-12 px-[60px]'>
          <h2 className='font-light text-[38px] leading-[57px] mb-[6px] prompt-title'>
            With a Yoshop license
          </h2>
          <p className='font-normal text-base leading-[32px] uppercase opacity-60 prompt-title mb-[100px]'>
            you can use the phone as a pos terminal
          </p>
          {
            oneLicence.map((licenc)=>{
              console.log(licenc);
              <div className='w-full' key={licenc.title}>
                  <div className='flex max-w-[820px] w-full justify-between'>
                    <ul className='max-w-[175px] w-full font-normal text-base leading-[20px] pt-[35px]'>
                      <li className='mb-[30px] overpass'>Store automation</li>
                      <li className='mb-[30px] overpass'>Full control business</li>
                      <li className='mb-[30px] overpass'>Effective sales management</li>
                      <li className='mb-[30px] overpass'>Extracting maximum profit</li>
                      <li>Absolutely safe and legal business</li>
                    </ul>
                    <ul>
                      <li className='font-bold text-5xl leading-[73px] mb-[10px] prompt-title'>
                        {licenc.title}
                      </li>
                      {
                        licenc.description.map(el=>{
                          <li className='mb-[14px] pl-10 overpass flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el}
                          </li>
                        })
                      }
                      
                    </ul>
                  </div>
                  <div className='absolute h-[750px] top-1/4 right-28 -z-[1]'>
                      <Image
                        src={licenc.image}
                        alt='slider image'
                        width={550}
                        height={300}
                        className='rounded-md'
                      />
                  </div>
              </div>
            })
          }
          <div className='absolute -right-44 bottom-2/4 rotate-90'>
            <input
              type='range'
              defaultValue={value}
              onChange={handleChange}
              min={0}
              max={5}
              step={1}
              className='appearance-none w-[440px] h-[0.5px] rounded bg-[#e1e5e9] outline-none '
            />
          </div>
        </div>
      </section>
      <section className='py-[75px]'>
        <div className="mx-auto max-w-[1230px] w-full bg-[#FEF8F1] h-[352px] rounded-[20px] pt-[55px] pb-[30px] pl-[60px] pr-[56px] flex items-center justify-between">
          <div>
            <h2 className='text-[#0F172A] poppins max-w-[500px] w-full font-bold text-[40px] leading-[140%] mb-[30px]'>
              Download the mobile app and get <span className='bg-[#fc7941] rounded-md'>1 month free</span>, then ₸ 3000 for month
            </h2>
            <div className='flex items-center justify-start'>
              <Image src={Users} className='mr-3' width={230} height={70} alt='people Image' />
              <p className='text-[#000] font-normal text-xl poppins'>Download by - 93K</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <Button className={'py-[18px] px-[50px] mb-[15px] bg-[#242424] rounded-2xl flex items-center'}>
              <Image className='mr-[10px]' src={AppStore} width={40} height={40} alt='app store Image' />
              App Store
            </Button>
            <Button className={'py-[18px] px-[50px] bg-[#242424] rounded-2xl flex items-center'}>
              <Image className='mr-[10px]' src={GooglePlay} width={40} height={40} alt='google play Image' />
              Google Play
            </Button>
          </div>
        </div>
      </section>
      <section className='py-[75px]'>
          <div className="mx-auto max-w-[1200px] w-full poppins">
            <h2 className='text-[#D1D5DB] font-bold text-[44px] leading-[140%] mb-[60px]'>
              Yoshop will help you to improve your business
            </h2>
            <ul className="w-full bg-[#E7E5E4] rounded-[4px] flex mb-[60px]">
              <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#D2CECC] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={PaymentIcon} alt='improve section Image' width={85} height={58} />
                </div>
                <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  All types of payment
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li>Cards of all banks</li>
                  <li>QR</li>
                  <li>Apple Pay</li>
                  <li>Samsung Pay</li>
                  <li>Google Pay</li>
                </ul>
              </li>
              <li className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[28px] bg-[#D6D3D1]'>
                <div className='bg-[#C2C0C0] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={InterfaceIcon} alt='improve section Image' width={42} height={69} />
                </div>
                <p className='max-w-[198px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  Simple intuitive interface 
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#A8A29E]'>
                <div className='bg-[#999492] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={StoreReport} alt='improve section Image' width={60} height={60} />
                </div>
                <p className='max-w-[168px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  Full store Report 
                </p>
              </li>
            </ul>
            <ul className="w-full bg-[#E7E5E4] rounded-[4px] flex mb-[60px]">
              <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#D2CECC] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={FiscalizationIcon} alt='improve section Image' width={50} height={60} />
                </div>
                <p className='max-w-[145px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  Fiscalization
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc'>
                  <li>Automatic issuance of a fiscal receipt</li>
                  <li>Simple tax reporting</li>
                </ul>
              </li>
              <li className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[50px] bg-[#D6D3D1]'>
                <div className='bg-[#C2C0C0] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={FullyOrginazeStore} alt='improve section Image' width={60} height={49} />
                </div>
                <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  Fully organize your store
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#A8A29E]'>
                <div className='bg-[#999492] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={SecurityIcon} alt='improve section Image' width={50} height={50} />
                </div>
                <p className='max-w-[173px] w-full font-bold text-2xl text-[#656974] leading-[140%]'>
                  Elimination of theft
                </p>
              </li>
            </ul>
          </div>
      </section>
      <section className={`bg-[url("../public/assets/images/comfortable.jpg")] backgr h-[861px] bg-no-repeat w-full bg-center my-[70px] bg-cover`}>
        <div className='site-container'>
          <h1 className='font-bold text-[44px] text-[#D1D5DB] text-center leading-[140%] max-w-[801px] mx-auto'>Make your business comfortoble with YoShop</h1>
        </div>
      </section>
      <section className="py-[70px]">
          <div className='mx-auto max-w-[1200px] bg-[url("../public/assets/images/question-bg.png")] w-full bg-[#FEF8F1] pl-[44px] pt-[21px] rounded-[20px] pb-[33px] bg-no-repeat my-[70px] bg-cover bg-[right_top_-550px]'>
            <h3 className='poppins font-bold text-[32px] text-[#0F172A] text-center leading-[140%] mb-[40px] max-w-[460px] w-full'>
               Do you have any questions? 
            </h3>
            <Input inputType={'text'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[104px] bg-[#F1F1F1]'} placeholder={'Enter a name'} value={''} />
            <Input inputType={'text'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[104px] bg-[#F1F1F1]'} placeholder={'Enter a phone number'} value={''} />
            <Button className={'max-w-[500px] py-[20px] w-full bg-[#F97316] rounded-[104px] font-bold text-base leading-[140%] poppins'}>Order a call</Button>
          </div>
      </section>
    </main>
  );
}

export default Home;
