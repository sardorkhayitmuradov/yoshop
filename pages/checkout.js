import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Input from '../components/Input/Input';
import checkCircle from '../public/assets/images/check-circle1.png';
import checkCircle2 from '../public/assets/images/check-circle2.png';
import { useTranslation } from 'next-i18next';
// import cartPrImg from "../public/assets/images/checkPageProductsideRotateImg.png";
// import locationAdressIcon from "../public/assets/images/locationIcon.svg";
// import AdressLocation from "../components/AdressLocation/AdressLocation";
// import Checkbox from "../components/Checkbox";
import confrimSuccessImg from '../public/assets/images/modalSuccessInfo.png';
import InputCheckbox from '../components/InputCheckbox/InputCheckbox';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Savecheckbox from '../components/SaveCheckbox';
import { ModalContext } from '../context/CheckoutModal';
import { useContext } from 'react';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}

const Checkout = () => {
  const [userName , setUserName] = useState("")
  const [userPhone , setUserPhone] = useState("")
  const [userEmail , setUserEmail] = useState("")
  const [userTown , setUserTown] = useState("")
  const [userCurrentAddress , setUserCurrentAddress] = useState("")
  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardValidityPeriod, setCardValidityPeriod] = useState("")
  const [cardCVC, setCardCVC] = useState("")
  const {visible ,setVisible} = useContext(ModalContext)

  const [tab, setTab] = useState('1');
  const [openModal, setOpenModal] = useState(false);

  let cart = useSelector((store) => store.carts);
  const { t } = useTranslation();

  const onChecked = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <CheckoutModal ModalClassName={"w-[95%] px-[90px] py-[60px]"}>
          <div>
            <h1>Public offer</h1>
          </div>
      </CheckoutModal>
      <section className='pt-[170px]'>
        <div className='container max-w-7xl mx-auto'>
          <h2 className='font-bold mb-10 text-[32px] leading-[140%]'>
            Checkout
          </h2>

          <div className='flex justify-between mb-8'>
            <div className='pt-[14px] max-w-[580px] w-full'>
              <h2 className='font-bold mb-[40px] text-[20px] leading-[140%]'>
                Delivery options
              </h2>
              <div className='flex justify-between max-w-[392px] w-full mb-5'>
                <div
                  className={`bg-[#F9FAFB] p-[14px] flex justify-between cursor-pointer items-start rounded-[3px] max-w-[187px] w-full border border-solid ${
                    tab === '1' ? 'border-[#7047EB]' : 'border-[#9CA3AF]'
                  }`}
                  onClick={() => setTab('1')}
                >
                  <span>
                    <h4 className='text-[14px] leading-[17px] mb-[10px] font-medium'>
                      Home delivery
                    </h4>
                    <p className='text-[12px] leading-[150%] text-[#828282]'>
                      Takes 3-5 business days
                    </p>
                  </span>
                  {tab == '1' ? (
                    <Image
                      src={checkCircle}
                      alt='check-circle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src={checkCircle2}
                      alt='check-circle'
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <div
                  className={`bg-[#F9FAFB] p-[14px] flex justify-between cursor-pointer items-start rounded-[3px] max-w-[187px] w-full border border-solid ${
                    tab === '2' ? 'border-[#7047EB]' : 'border-[#9CA3AF]'
                  }`}
                  onClick={() => setTab('2')}
                >
                  <span>
                    <h4 className='text-[14px] leading-[17px] mb-[10px] font-medium'>
                      In-store pickup
                    </h4>
                    <p className='text-[12px] leading-[150%] text-[#828282]'>
                      Pick from store location
                    </p>
                  </span>
                  {tab == '2' ? (
                    <Image
                      src={checkCircle}
                      alt='check-circle'
                      width={20}
                      height={20}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>

              {(tab === '1' && (
                <>
                  {' '}
                  <p className='text-[16px] leading-[25px] max-w-[500px] w-full mb-10'>
                    *Delivery is paid by a private person according to the
                    tariff of the courier company.
                  </p>
                  <div className='w-full mb-[70px]'>
                    <Input
                      inputType={'text'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserName(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'First/Last Name'}
                      value={userName}
                      labelValue={'Name*'}
                      name={'nameInput'}
                      labelClassName={'text-[20px] font-regular'}
                    />
                    <Input
                      inputType={'number'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserPhone(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'+7 700 000 00 00'}
                      value={userPhone}
                      labelValue={'Mobile phone*'}
                      name={'phoneInput'}
                      labelClassName={'text-[20px] font-regular'}
                    />
                    <Input
                      inputType={'email'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserEmail(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'Enter your e-mail'}
                      value={userEmail}
                      labelValue={'E-mail*'}
                      name={'emailInput'}
                      labelClassName={'text-[20px] font-regular'}
                    />
                    <Input
                      inputType={'text'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserTown(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'Enter your town'}
                      value={userTown}
                      labelValue={'Town*'}
                      name={'townInput'}
                      labelClassName={'text-[20px] font-regular'}
                    />
                    <Input
                      inputType={'text'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserCurrentAddress(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'Enter your actual address'}
                      value={userCurrentAddress}
                      labelValue={'Actual address*'}
                      name={'adressInput'}
                      labelClassName={'text-[20px] font-regular'}
                    />
                  </div>
                  {/* <div>
                <h3 className="text-[20px] font-regular my-[30px]">
                  Pick-up point
                </h3>
  
                <AdressLocation
                  locationInfoWrappClassName={
                    "pl-3 flex items-center mt-[22px]"
                  }
                  imgaes={locationAdressIcon}
                  locationTextClassName={
                    "ml-[26px]  text-[20px] font-regular"
                  }
                  locationText={"Almaty town, Amangeldy 59a, 7 floor, 702"}
                />
                <AdressLocation
                  locationInfoWrappClassName={
                    "pl-3 flex items-center mt-[22px]"
                  }
                  imgaes={locationAdressIcon}
                  locationTextClassName={
                    "ml-[26px]  text-[20px] font-regular"
                  }
                  locationText={"Almaty town, Amangeldy 59a, 7 floor, 702"}
                />
              </div> */}
                  <div className='mb-[26px]'>
                    <h3 className='text-[24px] font-bold mt-[75px] mb-[40px]'>
                      Choose payment Method
                    </h3>
                    <div className='mb-8'>
                      <span className='flex items-center'>
                        <InputCheckbox
                          type={'radio'}
                          idName={'payCheck1'}
                          inptClass={
                            'accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]'
                          }
                          labelText={'Cash upon receipt'}
                          labelClass={'text-[20px] ml-[30px]'}
                          inputName={'pay'}
                        />
                      </span>
                      <span className='flex items-center'>
                        <InputCheckbox
                          type={'radio'}
                          idName={'payCheck2'}
                          inptClass={
                            'accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]'
                          }
                          labelText={'Card payment'}
                          labelClass={'text-[20px] ml-[30px]'}
                          inputName={'pay'}
                        />
                      </span>
                    </div>

                    <div className='py-[30px] px-[40px] bg-[#CBD5E1] rounded-[10px]'>
                      <Input
                        inputType={'text'}
                        wrapperClassName={'mb-4'}
                        inputClassName={
                          'w-full py-[12px] px-[12px] border-none outline-none bg-[#E2E8F0] rounded-[5px]'
                        }
                        placeholder={''}
                        value={cardName}
                        onChange={(value) => setCardName(value)}
                        labelValue={'Name on card'}
                        name={'paycCardInfo'}
                        labelClassName={'mb-[3px] font-bold'}
                      />

                      <div className='payCardNumbInfo'>
                        <div className='flex items-center'>
                          <Input
                            inputType={'number'}
                            wrapperClassName={'mb-4 flex flex-col'}
                            inputClassName={
                              'p-3 border-none outline-none bg-[#E2E8F0] rounded-[5px] w-full placeholder:float-right'
                            }
                            inputInnerWrapperClassName={'flex items-center'}
                            placeholder={''}
                            value={cardNumber}
                            onChange={(value) => setCardNumber(value)}
                            labelValue={'Card Number'}
                            name={'cardNumbInfo'}
                            labelClassName={'mb-[3px] font-bold'}
                          >
                            <span className='w-[3px] h-[10px] bg-[#D8D8D8] inline-block'></span>
                            <Input
                              inputType={'number'}
                              wrapperClassName={'flex flex-col w-[30%]'}
                              inputClassName={
                                'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515]'
                              }
                              placeholder={'MM/YY'}
                              value={cardValidityPeriod}
                              onChange={(value) => setCardValidityPeriod(value)}
                              name={'validity_period'}
                            />
                            <span className='w-[3px] h-[10px] bg-[#D8D8D8] inline-block'></span>
                            <Input
                              inputType={'number'}
                              wrapperClassName={'flex flex-col w-[25%]'}
                              inputClassName={
                                'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] appearance-none'
                              }
                              placeholder={'CVC'}
                              value={cardCVC}
                              onChange={(value) => setCardCVC(value)}
                              name={'CVC'}
                            />
                          </Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-start mb-10 text-[20px] leading-[180%]'>
                    <Savecheckbox
                      id={4}
                      value={'save'}
                      onGetValue={onChecked}
                    />
                    <p className='ml-3'>Save my card for future purchase</p>
                  </div>
                  <p className='text-[20px] leading-[180%] mb-8'>
                    Please review the order details and payment details before
                    proceeding to confirm your order{' '}
                  </p>
                  <div className='flex items-start'>
                    <input
                      type='checkbox'
                      name='terms'
                      id='terms'
                      className='w-[20px] h-[20px] mt-2'
                    />
                    <div className='ml-[33px] text-[20px] leading-[180%]'>
                      I accept the terms of the{' '}
                      <span onClick={() => setVisible(!visible)} className='text-[20px] leading-[180%] text-[#FF588A] cursor-pointer'>
                        Public Offer*
                      </span>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <input
                      type='checkbox'
                      name='terms'
                      id='terms'
                      className='w-[20px] h-[20px] mt-2'
                    />
                    <div className='ml-[33px] text-[20px] leading-[180%]'>
                      I have read the{' '}
                      <span className='text-[20px] leading-[180%] text-[#FF588A] cursor-pointer'>
                        Payment and Return Policy*
                      </span>
                    </div>
                  </div>
                </>
              )) ||
                (tab === '2' && 'hello')}
            </div>
            <div className='max-w-[580px] w-full'>
              <h3 className='text-[20px] font-[700] mb-[28px]'>Products:</h3>

              <hr className='bg-[#F9F9FB] w-full border border-solid mb-4' />

              {cart.cart.licenses?.length > 0 &&
                cart.licenses.map((license) => (
                  <>
                    <div key={license.id}>
                      <div className='flex items-center justify-between mb-[10px]'>
                        <p className='text-[20px] leading-[140%] font-bold'>
                          {license.name || license.title}
                        </p>
                        <p className='text-[20px] leading-[140%] font-bold'>
                          x{license.qty}
                        </p>
                      </div>
                      <div className='flex items-center justify-between mb-[10px]'>
                        <p>Period:</p>
                        <p className='text-[20px] leading-[140%] font-bold'>
                          {license.period}
                        </p>
                      </div>

                      <div className='flex items-center justify-between w-full mb-[10px]'>
                        <p>{t('common:users')}:</p>

                        <div className='flex items-center justify-between w-full max-w-[200px]'>
                          <p className='text-[20px] leading-[140%] font-bold'>
                            +
                            {license.cashier.qty >= license.qty * 2
                              ? license.cashier.qty - license.qty * 2
                              : license.cashier.qty}
                          </p>
                          <p className='text-[20px] leading-[140%] font-bold'>
                            ₸ 16000
                          </p>
                        </div>
                      </div>
                      <div className='w-full mb-5'>
                        <p className='mb-[10px]'>{t('header:equipment')}:</p>

                        {license.products.map((product) => (
                          <div
                            className='flex items-center justify-between mb-3'
                            key={product.id}
                          >
                            <div className='flex items-center'>
                              <Image
                                src={product.image}
                                width={50}
                                height={50}
                                alt='product'
                                className='mr-[3px]'
                              />
                              <h3 className='text-[20px] leading-[140%] max-w-[252px] w-full'>
                                {product.title || product.name}
                              </h3>
                            </div>
                            <div className='flex items-center justify-between w-full max-w-[200px]'>
                              <p className='text-[20px] leading-[180%] font-bold'>
                                x{product.qty}
                              </p>
                              <p className='text-[20px] leading-[180%] font-bold'>
                                ₸ {product.price}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr className='bg-[#CBD5E1] border border-solid mb-5' />
                  </>
                ))}

              <div>
                {cart.products.length > 0
                  ? cart.products.map((product, i) => {
                      return (
                        <div
                          className='flex items-center justify-between mb-3'
                          key={product.id}
                        >
                          <div className='flex items-center'>
                            <Image
                              src={product.image}
                              width={50}
                              height={50}
                              alt='product'
                              className='mr-[3px]'
                            />
                            <h3 className='text-[20px] leading-[140%] max-w-[252px] w-full'>
                              {product.title || product.name}
                            </h3>
                          </div>
                          <div className='flex items-center justify-between w-full max-w-[200px]'>
                            <p className='text-[20px] leading-[180%] font-bold'>
                              x{product.qty}
                            </p>
                            <p className='text-[20px] leading-[180%] font-bold'>
                              ₸ {product.price}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  : ''}
              </div>
              <div className='flex items-center text-[20px] leading-[140%] font-bold w-full justify-end'>
                <p className='mr-4'>Total:</p>₸ {cart.totalPrice}
              </div>
            </div>
          </div>
          <div className='flex items-center my-[100px]'>
            <button
              className={
                'py-[12px] text-[#fff] max-w-[500px] w-full bg-[#7D66BB] rounded-[10px] font-bold leading-[140%] text-xl'
              }
              onClick={() => setOpenModal(true)}
            >
              Pay
            </button>
            <Link href={'/cart'} className='max-w-[500px] w-full'>
              <button
                className={
                  'py-[12px] ml-[56px] bg-[transparent] w-full rounded-[10px] font-bold leading-[140%] text-xl border-[2px] border-solid border-[#D1D5DB] text-[#FF588A]'
                }
              >
                Back to Cart
              </button>
            </Link>
          </div>
        </div>
        {openModal ? (
          <>
            <div
              className='fixed w-screen h-screen top-0 left-0 bg-[#e1e1e1] opacity-80 z-[20]'
              onClick={() => setOpenModal(false)}
            ></div>
            <div className='absolute flex top-[22%] items-center justify-center left-0 right-0 mx-auto w-[835px] bg-[#ffff] z-50 rounded-[16px] shadow-xl '>
              <div>
                <button
                  className='mr-6 float-right text-[40px] font-bold opacity-60 text-[#000]'
                  onClick={() => setOpenModal(false)}
                >
                  x
                </button>
                <div className='flex flex-col w-full h-[100%] py-[50px]  items-center px-[100px] '>
                  <Image
                    src={confrimSuccessImg}
                    alt='success-img'
                    className='w-[86px] h-[86px]'
                  />
                  <h3 className='my-[32px] text-[36px] font-medium text-center text-[#000]'>
                    Thank you! Your data has been successfully sent.
                  </h3>
                  <p className='text-[30px] text-center text-[#9CA3AF]'>
                    Expect feedback.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </section>
    </>
  );
};

export default Checkout;
