import Image from 'next/image';
import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { UseTranslation } from 'next-i18next';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Arrowleft from '../public/assets/images/left.svg';
import ArrowRight from '../public/assets/images/right.svg';
import ListIcon from '../public/assets/images/listCircle.svg';
import Users  from '../public/assets/images/people.png'
import AppStore from '../public/assets/images/appStore.png'
import GooglePlay from '../public/assets/images/googlePlay.png'
import PaymentIcon from '../public/assets/images/typesOfPayment.svg'
import InterfaceIcon from '../public/assets/images/simpleInterface.svg'
import StoreReport from '../public/assets/images/fullStoreReport.svg'
import FiscalizationIcon from '../public/assets/images/fiscalization.svg'
import FullyOrginazeStore from '../public/assets/images/sullyOrganizeStore.svg'
import SecurityIcon from '../public/assets/images/securitysafe.svg'
import PhoneCall from '../public/assets/images/phone.svg'
import { licence } from '../constants/licence';
import Modal from '../components/Modal';

function Home() {
  // const router = useRouter();
  // const { t } = useTranslation("");
  // const {locale ,   locales , push} = useRouter()
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

  const [name , setName] = useState('');
  const [number, setNumber] = useState()
  
  return (
    <main className='grow'>
      <Modal />
      <section>
        <div className='site-container flex flex-col !pt-[179px] justify-center bg-[url("../public/assets/images/main-hero.png")] hero pb-[50px] bg-no-repeat bg-right bg-[length:800px_785px]'>
          <div className='flex justify-between items-center mb-[200px]'>
            <div className='max-w-[567px] w-full'>
              <p className='mb-[25px] max-w-[399px] w-full text-[18px] leading-[180%] font-PoppinsRegular'>
                Multifunctional inventory software that allows you to fully
                automate the work of the store
              </p>

              <h2 className='mb-[40px] text-[56px] text-[#FF588A] font-PoppinsBold leading-[120%]'>
                Use Your Phone as a POS Terminal
              </h2>

              <Button
                className={
                  'pt-[16px] pb-[16px] px-[123px] bg-[#7D66BB] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%] text-xl font-PoppinsBold text-white'
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
        <div className='sticky w-[81px] h-[81px] right-0 left-[1290px] top-16 z-10'>
          <Image src={PhoneCall} width={81} height={81} alt='phone call image' />
        </div>
      <section
        className={`pt-[150px] pb-[75px]`}
      >
        <div className='mx-auto max-w-[1230px] w-full h-[750px] bg-[#eff1fe80] rounded-[20px] relative pt-12 px-[60px]'>
          <h2 className='text-[38px] font-PromtLight leading-[57px] mb-[6px]'>
            With a Yoshop license
          </h2>
          <p className='text-base font-PromptRegular leading-[32px] uppercase opacity-60 mb-[100px]'>
            you can use the phone as a pos terminal
          </p>
          {
            oneLicence.map((licenc)=>{
              return(
                <div className='w-full' key={licenc.id}>
                  <div className='flex max-w-[960px] w-full justify-between'>
                    <ul className='max-w-[175px] w-full text-base leading-[20px] pt-[35px]'>
                      <li className='mb-[30px] font-OverpassRegular'>Store automation</li>
                      <li className='mb-[30px] font-OverpassRegular'>Full control business</li>
                      <li className='mb-[30px] font-OverpassRegular'>Effective sales management</li>
                      <li className='mb-[30px] font-OverpassRegular'>Extracting maximum profit</li>
                      <li className="font-OverpassRegular">Absolutely safe and legal business</li>
                    </ul>
                    <ul>
                      <li className='text-5xl leading-[73px] mb-[10px] font-PromptBold'>
                        {licenc.title}
                      </li>
                      {
                        licenc.description.map((el, index)=>{
                          return (
                            <li key={index} className='mb-[14px] pl-10 font-PromptRegular flex items-center'>
                            <Image
                              src={ListIcon}
                              alt='list circle'
                              width={6}
                              height={6}
                              className='mr mr-2'
                            />
                            {el}
                          </li>
                          )
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
              )
              
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
        <div className="mx-auto max-w-[1230px] w-full bg-[#EFF1FE] h-[352px] rounded-[20px] pt-[55px] pb-[30px] pl-[60px] pr-[56px] flex items-center justify-between">
          <div>
            <h2 className='text-[#0F172A] max-w-[521px] w-full font-PoppinsBold text-[40px] leading-[140%] mb-[30px]'>
              <span className='bg-[#FF588A] rounded-md text-white'>Download</span> the mobile app and get <span className='bg-[#FF588A] rounded-md text-white'>1 month free,</span> then ₸ 3000 for month
            </h2>
            <div className='flex items-center justify-start'>
              <Image src={Users} className='mr-3' width={230} height={70} alt='people Image' />
              <p className='text-[#000] font-normal text-xl font-PoppinsRegular'>Download by - 93K</p>
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
            <h2 className='text-[#111827] font-PoppinsBold text-[44px] leading-[140%] mb-[60px]'>
              Yoshop will help you to improve your business
            </h2>
            <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px]">
              <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={PaymentIcon} alt='improve section Image' width={85} height={58} />
                </div>
                <p className='max-w-[145px] w-full font-PoppinsBold text-2xl text-[#656974] leading-[140%]'>
                  All types of payment
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] pl-[34px]'>
                <ul className='text-[#0F172A] text-base font-PoppinsRegular gap-4 flex flex-col list-disc'>
                  <li>Cards of all banks</li>
                  <li>QR</li>
                  <li>Apple Pay</li>
                  <li>Samsung Pay</li>
                  <li>Google Pay</li>
                </ul>
              </li>
              <li className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[28px] bg-[#FBF1F1]'>
                <div className='bg-[#fbe2e7] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={InterfaceIcon} alt='improve section Image' width={42} height={69} />
                </div>
                <p className='max-w-[198px] w-full font-PoppinsBold text-2xl text-[#656974] leading-[140%]'>
                  Simple intuitive interface 
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#FFE6E6]'>
                <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={StoreReport} alt='improve section Image' width={60} height={60} />
                </div>
                <p className='max-w-[168px] w-full font-PoppinsBold text-2xl text-[#656974] leading-[140%]'>
                  Full store Report 
                </p>
              </li>
            </ul>
            <ul className="w-full bg-[#fff] rounded-[4px] flex mb-[60px]">
              <li className='max-w-[300px] w-full py-[64px] px-[78px]'>
                <div className='bg-[#ffeef3] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={FiscalizationIcon} alt='improve section Image' width={50} height={60} />
                </div>
                <p className='max-w-[145px] w-full font-PoppinsBold text-2xl text-[#656974] leading-[140%]'>
                  Fiscalization
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] pl-[34px]'>
                <ul className='text-[#0F172A] text-base gap-4 flex flex-col list-disc font-PoppinsRegular'>
                  <li>Automatic issuance of a fiscal receipt</li>
                  <li>Simple tax reporting</li>
                </ul>
              </li>
              <li className='max-w-[300px] w-full py-[64px] pl-[78px] pr-[50px] bg-[#FBF1F1]'>
                <div className='bg-[#fbe2e7]   max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={FullyOrginazeStore} alt='improve section Image' width={60} height={49} />
                </div>
                <p className='max-w-[173px] w-full font-PoppinsBold text-2xl text-[#656974] leading-[140%]'>
                  Fully organize your store
                </p>
              </li>
              <li className='max-w-[300px] w-full py-[64px] px-[78px] bg-[#FFE6E6]'>
                <div className='bg-[#fff2f2] max-w-[100px] h-[100px] w-full rounded-full flex items-center justify-center mb-[20px]'>
                  <Image src={SecurityIcon} alt='improve section Image' width={50} height={50} />
                </div>
                <p className='max-w-[173px] w-full font-PoppinsBold text-2xl text-[#656974] leading-[140%]'>
                  Elimination of theft
                </p>
              </li>
            </ul>
          </div>
      </section>
      <section className={`bg-[url("../public/assets/images/makeBusinessWithYoshop.png")] h-[861px] bg-no-repeat w-full bg-top my-[70px] bg-cover`}>
        <div className='site-container'>
          <h1 className='font-PoppinsBold text-[44px] text-[#111827] text-center leading-[140%] max-w-[801px] mx-auto'>Make your business comfortoble with YoShop</h1>
        </div>
      </section>
      <section className="py-[70px]">
          <div className='mx-auto max-w-[1200px] bg-[url("../public/assets/images/question-bg.png")] w-full bg-[#fff] pl-[44px] pt-[21px] rounded-[20px] pb-[33px] bg-no-repeat my-[70px] bg-cover'>
            <h3 className='font-PoppinsBold text-[32px] text-[#0F172A] text-center leading-[140%] mb-[40px] max-w-[460px] w-full'>
               Do you have any questions? 
            </h3>
            <Input inputType={'text'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:font-PoppinsRegular placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF]'} placeholder={'Enter a name'} value={name} onGetValue={setName} />

            <Input inputType={'tel'} wrapperClassName={'max-w-[500px] w-full mb-[20px]'} inputClassName={'w-full py-[20px] pl-[56px] placeholder:text-[#979AA1] placeholder:font-PoppinsRegular placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1] text-[#9CA3AF]'} placeholder={'Enter a phone number'} value={number} onGetValue={setNumber} />

            <Button className={'max-w-[500px] py-[20px] w-full bg-[#ff588a] text-white rounded-[10px] font-bold text-base leading-[140%] font-PoppinsBold'}>Order a call</Button>
          </div>
      </section>
    </main>
  );
}

export default Home;
