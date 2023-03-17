import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Input from '../components/Input/Input';
import checkCircle from '../public/assets/images/check-circle1.png';
import checkCircle2 from '../public/assets/images/check-circle2.png';
import { useTranslation } from 'next-i18next';
import AdressLocation from '../components/AdressLocation/AdressLocation';
import locationAdressIcon from '../public/assets/images/locationIcon.svg';
// import cartPrImg from "../public/assets/images/checkPageProductsideRotateImg.png";
// import Checkbox from "../components/Checkbox";
import confrimSuccessImg from '../public/assets/images/modalSuccessInfo.png';
import InputCheckbox from '../components/InputCheckbox/InputCheckbox';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Savecheckbox from '../components/SaveCheckbox';
import { ModalContext } from '../context/CheckoutModal';
import { useContext } from 'react';
import CheckoutModal from '../components/CheckoutModal/CheckoutModal';
import SelectIcon from '../public/assets/images/select-icon.svg';
import PolicyCheckbox from '../components/PolicyCheckbox';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}

const Checkout = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userTown, setUserTown] = useState('');
  const [userCurrentAddress, setUserCurrentAddress] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardValidityPeriod, setCardValidityPeriod] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  let [payment, setPayment] = useState('0');
  const [checkedPolicy, setCheckedPolicy] = useState('');
  const { visible, setVisible } = useContext(ModalContext);

  const [tab, setTab] = useState('1');
  const [openModal, setOpenModal] = useState(false);

  let cart = useSelector((store) => store.carts);
  const { t } = useTranslation();

  const onChecked = (e) => {
    // console.log(e.target.value);
  };

  const onSave = (e) => {
    setCheckedPolicy([...checkedPolicy, e.target.value]);
    console.log(e);
  };
  console.log(checkedPolicy);

  return (
    <>
      <CheckoutModal ModalClassName={'w-[95%] px-[90px] py-[60px]'}>
        <div className='w-full flex flex-col'>
          <h1 className='text-[32px] leading-[140%] text-[#000] text-center mb-[50px]'>
            Public offer
          </h1>
          <h3 className='text-[24px] leading-[140%] text-[#000] mb-3'>
            YOSHOP POS– a multifunctional inventory program that allows you to
            fully automate the store work process:
          </h3>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            · the ability to significantly reduce costs (expenses);
          </p>
          <p className='text-[24px] leading-[140%] text-[#000] mb-10'>
            · increase the efficiency of the organization (profit).
          </p>
          <h3 className='text-[24px] leading-[140%] text-[#000] mb-7'>
            YOSHOP POS functionality will allow you to:
          </h3>
          <p className='text-[24px] leading-[140%] text-[#000] mb-3'>
            1) organize, streamline and fully automate your store:
          </p>
          <ul>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              {' '}
              · keep convenient sales statistics and adjust the range of goods
              sold, quickly getting rid of slow-moving positions;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              {' '}
              · timely replenish stock balances;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              {' '}
              · speed up customer service and get rid of queues - and, as a
              result, increase traffic in the store;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              {' '}
              · exclude the possibility of theft of goods and money from the
              cash desk (constant control of the balance of money and goods in
              the warehouse);
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              {' '}
              · the possibility of keeping records of debtors, a discount and
              loyalty system;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000] mb-7'>
              work with labeled goods (tobacco products, shoes, medicines, etc.){' '}
            </li>
          </ul>
          <p className='text-[24px] leading-[140%] text-[#000] mb-3'>
            2) accept all possible types of payment:
          </p>
          <ul>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · globally increase store revenue and customer loyalty by
              accepting different payment methods from customers (cards of all
              banks, QR, Apple Pay, Samsung Pay, Google Pay);
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · simplify store collection as much as possible;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · avoid problems with counterfeit or damaged money;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · solve a permanent issue with the lack of change for the client;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000] mb-7'>
              · keep accurate records of all payments.
            </li>
          </ul>
          <p className='text-[24px] leading-[140%] text-[#000] mb-3'>
            3) carry out fiscalization of monetary transactions:
          </p>
          <ul>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · automatically generate and print fiscal receipts. With Yoshop
              POS:
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · It is possible to link and use an account of any bank of the
              Republic of Kazakhstan;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · No turnover requirements your business;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · Operational service and free technical support;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · Connection via SIM card/Wi-Fi
            </li>
          </ul>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            YOSHOP POS– a multifunctional inventory program that allows you to
            fully automate the store work process:
          </p>
          <ul>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · the ability to significantly reduce costs (expenses);
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · increase the efficiency of the organization (profit).
            </li>
          </ul>
          <p className='text-[24px] leading-[140%] text-[#000] mb-7'>
            YOSHOP POS functionality will allow you to:
          </p>
          <p className='text-[24px] leading-[140%] text-[#000] mb-3'>
            1) organize, streamline and fully automate your store:
          </p>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            · keep convenient sales statistics and adjust the range of goods
            sold, quickly getting rid of slow-moving positions;
          </p>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            · timely replenish stock balances;
          </p>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            · speed up customer service and get rid of queues - and, as a
            result, increase traffic in the store;
          </p>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            · exclude the possibility of theft of goods and money from the cash
            desk (constant control of the balance of money and goods in the
            warehouse);
          </p>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            · the possibility of keeping records of debtors, a discount and
            loyalty system;
          </p>
          <p className='text-[24px] leading-[140%] text-[#000] mb-7'>
            · work with labeled goods (tobacco products, shoes, medicines, etc.)
          </p>
          <p className='text-[24px] leading-[140%] text-[#000] mb-3'>
            2) accept all possible types of payment:
          </p>
          <p className='text-[24px] leading-[140%] text-[#000]'>
            globally increase store revenue and customer loyalty by accepting
            different payment methods from customers (cards of all banks, QR,
            Apple Pay, Samsung Pay, Google Pay);
          </p>
          <ul>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · avoid problems with counterfeit or damaged money;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · solve a permanent issue with the lack of change for the client;
            </li>
            <li className='text-[24px] leading-[140%] text-[#000] mb-7'>
              · keep accurate records of all payments.
            </li>
          </ul>
          <p className='text-[24px] leading-[140%] text-[#000] mb-3'>
            3) carry out fiscalization of monetary transactions:
          </p>
          <ul>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              · automatically generate and print fiscal receipts. With Yoshop
              POS:
            </li>
            <li className='text-[24px] leading-[140%] text-[#000]'>
              It is possible to link and use an account of any bank of the
              Republic of Kazakhstan;
            </li>
          </ul>
          <button
            className={
              'py-[12px] text-[#fff] max-w-[500px] w-full bg-[#7D66BB] rounded-[10px] font-bold leading-[140%] text-xl self-center mt-[70px]'
            }
            onClick={() => setVisible(!visible)}
          >
            Back
          </button>
        </div>
      </CheckoutModal>
      <section className='pt-[170px] max-[450px]:pt-[70px]'>
        <div className='container max-w-7xl mx-auto'>
          <h2 className='font-bold mb-10 text-[32px] leading-[140%] max-[450px]:px-6 max-[450px]:text-[24px] max-[450px]:leading-[36px] max-[450px]:mb-[14px]'>
            Checkout
          </h2>

          <div className='flex justify-between mb-8 max-[450px]:flex-col max-[450px]:px-6 max-[450px]:gap-y-10'>
            <div className='pt-[14px] max-w-[580px] w-full max-[450px]:pt-0'>
              <h2 className='font-bold mb-[40px] text-[20px] leading-[140%] max-[450px]:mb-[13px] max-[450px]:text-[16px]'>
                Delivery options
              </h2>
              <div className='flex justify-between max-w-[392px] w-full mb-7 max-[450px]:mb-[7px]'>
                <div
                  className={`bg-[#F9FAFB] p-[14px] flex justify-between cursor-pointer items-start rounded-[3px] max-w-[187px] max-[450px]:w-[45%] w-full border border-solid ${
                    tab === '1' ? 'border-[#7047EB]' : 'border-[#9CA3AF]'
                  }`}
                  onClick={() => setTab('1')}
                >
                  <span>
                    <h4 className='text-[14px] leading-[17px] max-[450px]:text-[12px] max-[450px]:mb-[6px] max-[450px]:leading-[180%] mb-[10px] font-medium'>
                      Home delivery
                    </h4>
                    <p className='text-[12px] max-[450px]:text-[10px] leading-[150%] text-[#828282]'>
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
                  className={`bg-[#F9FAFB] p-[14px] flex justify-between cursor-pointer items-start rounded-[3px] max-w-[187px] max-[450px]:w-[45%] w-full border border-solid ${
                    tab === '2' ? 'border-[#7047EB]' : 'border-[#9CA3AF]'
                  }`}
                  onClick={() => setTab('2')}
                >
                  <span>
                    <h4 className='text-[14px] leading-[17px] max-[450px]:text-[12px] max-[450px]:mb-[6px] max-[450px]:leading-[180%] mb-[10px] font-medium'>
                      In-store pickup
                    </h4>
                    <p className='text-[12px] max-[450px]:text-[10px] leading-[150%] text-[#828282]'>
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
                  <p className='text-[16px] leading-[25px] max-w-[500px] w-full mb-10 max-[450px]:text-[11px] max-[450px]:leading-[15px] max-[450px]:mb-7'>
                    *Delivery is paid by a private person according to the
                    tariff of the courier company.
                  </p>
                  <div className='w-full mb-[70px] max-[450px]:mb-[30px]'>
                    <Input
                      inputType={'text'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full max-[450px]:flex-col max-[450px]:items-start max-[450px]:mb-5'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserName(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] max-[450px]:py-3 max-[450px]:placeholder:text-[14px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'First/Last Name'}
                      value={userName}
                      labelValue={'Name*'}
                      name={'nameInput'}
                      labelClassName={
                        'text-[20px] font-regular max-[450px]:text-[12px]'
                      }
                    />
                    <Input
                      inputType={'number'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full max-[450px]:flex-col max-[450px]:items-start max-[450px]:mb-5'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserPhone(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] max-[450px]:py-3 max-[450px]:placeholder:text-[14px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'+7 700 000 00 00'}
                      value={userPhone}
                      labelValue={'Mobile phone*'}
                      name={'phoneInput'}
                      labelClassName={
                        'text-[20px] max-[450px]:text-[12px] font-regular'
                      }
                    />
                    <Input
                      inputType={'email'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full max-[450px]:flex-col max-[450px]:items-start max-[450px]:mb-5'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserEmail(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] max-[450px]:py-3 max-[450px]:placeholder:text-[14px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'Enter your e-mail'}
                      value={userEmail}
                      labelValue={'E-mail*'}
                      name={'emailInput'}
                      labelClassName={
                        'text-[20px] max-[450px]:text-[12px] font-regular'
                      }
                    />
                    <Input
                      inputType={'text'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full max-[450px]:flex-col max-[450px]:items-start max-[450px]:mb-5'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserTown(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] max-[450px]:py-3 max-[450px]:placeholder:text-[14px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'Enter your town'}
                      value={userTown}
                      labelValue={'Town*'}
                      name={'townInput'}
                      labelClassName={
                        'text-[20px] max-[450px]:text-[12px] font-regular'
                      }
                    />
                    <Input
                      inputType={'text'}
                      wrapperClassName={
                        'w-full mb-8 flex justify-between items-center w-full max-[450px]:flex-col max-[450px]:items-start max-[450px]:mb-5'
                      }
                      inputInnerWrapperClassName={'max-w-[380px] w-full'}
                      onChange={(value) => setUserCurrentAddress(value)}
                      inputClassName={
                        'w-full py-[14px] px-[14px] placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] max-[450px]:py-3 max-[450px]:placeholder:text-[14px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]'
                      }
                      placeholder={'Enter your actual address'}
                      value={userCurrentAddress}
                      labelValue={'Actual address*'}
                      name={'adressInput'}
                      labelClassName={
                        'text-[20px] max-[450px]:text-[12px] font-regular'
                      }
                    />
                  </div>
                  <div className='mb-[26px] max-[450px]:mb-4'>
                    <h3 className='text-[24px] font-bold mt-[75px] mb-[40px] max-[450px]:mt-0 max-[450px]:text-[16px] max-[450px]:mb-5'>
                      Choose payment Method
                    </h3>
                    <div className='mb-8'>
                      <span className='flex items-center mb-5'>
                        <InputCheckbox
                          type={'radio'}
                          idName={'1'}
                          onChange={(value) => setPayment(value)}
                          inptClass={
                            'accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]'
                          }
                          labelText={'Cash upon receipt'}
                          labelClass={
                            'text-[20px] ml-[30px] max-[450px]:text-[14px] max-[450px]:ml-5'
                          }
                          inputName={'pay'}
                        />
                      </span>
                      {payment == '1' && (
                        <div className='mb-[70px] max-[450px]:mb-[30px]'>
                          <AdressLocation
                            locationInfoWrappClassName={
                              'pl-3 max-[450px]:pl-0 flex items-center mt-[22px]'
                            }
                            imgaes={locationAdressIcon}
                            locationTextClassName={
                              'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] max-[450px]:ml-[10px]'
                            }
                            locationText={
                              'Almaty town, Amangeldy 59a, 7 floor, 702'
                            }
                          />
                          <AdressLocation
                            locationInfoWrappClassName={
                              'pl-3 max-[450px]:pl-0 flex items-center mt-[22px]'
                            }
                            imgaes={locationAdressIcon}
                            locationTextClassName={
                              'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] max-[450px]:ml-[10px]'
                            }
                            locationText={
                              'Almaty town, Amangeldy 59a, 7 floor, 702'
                            }
                          />
                          <AdressLocation
                            locationInfoWrappClassName={
                              'pl-3 max-[450px]:pl-0 flex items-center mt-[22px]'
                            }
                            imgaes={locationAdressIcon}
                            locationTextClassName={
                              'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] max-[450px]:ml-[10px]'
                            }
                            locationText={
                              'Almaty town, Amangeldy 59a, 7 floor, 702'
                            }
                          />
                        </div>
                      )}
                      <span className='flex items-center max-[450px]:mb-8'>
                        <InputCheckbox
                          type={'radio'}
                          idName={'2'}
                          onChange={(value) => setPayment(value)}
                          inptClass={
                            'accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]'
                          }
                          labelText={'Card payment'}
                          labelClass={
                            'text-[20px] ml-[30px] max-[450px]:text-[14px] max-[450px]:ml-5'
                          }
                          inputName={'pay'}
                        />
                      </span>
                      {payment == '1' && (
                        <div className='py-[30px] px-[40px] bg-[#CBD5E1] rounded-[10px]'>
                          <Input
                            inputType={'text'}
                            wrapperClassName={'mb-4'}
                            inputClassName={
                              'w-full py-[12px] px-[12px] border-none outline-none bg-[#E2E8F0] rounded-[5px] max-[450px]:placeholder:text-[10px]'
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
                                  'p-3 border-none outline-none bg-[#E2E8F0] rounded-[5px] w-full placeholder:float-right max-[450px]:placeholder:text-[10px]'
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
                                    'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] max-[450px]:placeholder:text-[10px] max-[450px]:px-1 max-[450px]:placeholder:py-3'
                                  }
                                  placeholder={'MM/YY'}
                                  value={cardValidityPeriod}
                                  onChange={(value) =>
                                    setCardValidityPeriod(value)
                                  }
                                  name={'validity_period'}
                                />
                                <span className='w-[3px] h-[10px] bg-[#D8D8D8] inline-block'></span>
                                <Input
                                  inputType={'number'}
                                  wrapperClassName={'flex flex-col w-[25%]'}
                                  inputClassName={
                                    'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] max-[450px]:placeholder:text-[10px] appearance-none max-[450px]:px-1 max-[450px]:placeholder:py-3'
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
                      )}
                    </div>

                    <div className='py-[30px] px-[40px] bg-[#CBD5E1] rounded-[10px]'>
                      <Input
                        inputType={'text'}
                        wrapperClassName={'mb-4'}
                        inputClassName={
                          'w-full py-[12px] px-[12px] border-none outline-none bg-[#E2E8F0] rounded-[5px] max-[450px]:placeholder:text-[10px]'
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
                              'p-3 border-none outline-none bg-[#E2E8F0] rounded-[5px] w-full placeholder:float-right max-[450px]:placeholder:text-[10px]'
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
                                'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] max-[450px]:placeholder:text-[10px] max-[450px]:px-1 max-[450px]:placeholder:py-3'
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
                                'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] max-[450px]:placeholder:text-[10px] appearance-none max-[450px]:px-1 max-[450px]:placeholder:py-3'
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
                  <div className='flex items-center justify-start mb-10 text-[20px] leading-[180%] max-[450px]:mb-[30px]'>
                    <Savecheckbox
                      id={4}
                      value={'save'}
                      onGetValue={onChecked}
                    />
                    <p className='ml-3 max-[450px]:text-[16px] max-[450px]:leading-[25px]'>
                      Save my card for future purchase
                    </p>
                  </div>
                  <p className='text-[20px] leading-[180%] mb-8 max-[450px]:text-[14px] max-[450px]:leading-[21px] max-[450px]:mb-5'>
                    Please review the order details and payment details before
                    proceeding to confirm your order{' '}
                  </p>
                  <div className='items-center max-[450px]:mb-5 hidden max-[450px]:flex'>
                    <PolicyCheckbox
                      id={'termsPolicy'}
                      onGetValue={onSave}
                      value={'termsPolicy'}
                    />
                    <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                      I agree to the Terms & conditions, Privacy policy & Return
                      policy
                    </div>
                  </div>
                  <div className='items-center hidden max-[450px]:flex'>
                    <PolicyCheckbox
                      id={'emailPolicy'}
                      onGetValue={onSave}
                      value={'emailPolicy'}
                    />
                    <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                      Sign me up to the email list
                    </div>
                  </div>
                  <div className='flex items-center max-[450px]:mb-5 max-[450px]:hidden'>
                    <PolicyCheckbox
                      id={'policyPublic'}
                      onGetValue={onSave}
                      value={'policyPublic'}
                    />
                    <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                      I accept the terms of the{' '}
                      <span
                        onClick={() => setVisible(!visible)}
                        className='text-[20px] leading-[180%] text-[#FF588A] cursor-pointer max-[450px]:text-[14px]'
                      >
                        Public Offer*
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center max-[450px]:hidden'>
                    <PolicyCheckbox
                      id={'paymentPolicy'}
                      onGetValue={onSave}
                      value={'paymentPolicy'}
                    />
                    <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                      I have read the{' '}
                      <span className='text-[20px] leading-[180%] text-[#FF588A] cursor-pointer max-[450px]:text-[14px]'>
                        Payment and Return Policy*
                      </span>
                    </div>
                  </div>
                </>
              )) ||
                (tab === '2' && (
                  <>
                    <div className='pt-[70px] max-[450px]:pt-6'>
                      <button
                        className={
                          'py-[10px] text-[#FF588A] max-w-[255px] w-full rounded-[6px] font-bold leading-[180%] text-[18px] border-[#D1D5DB] border-[2px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] flex items-center justify-center max-[450px]:text-[12px] max-[450px]:max-w-[170px]'
                        }
                        // onClick={() => setOpenModal(true)}
                      >
                        Choose your town
                        <Image
                          src={SelectIcon}
                          alt='SelectIcon'
                          width={20}
                          height={20}
                          className='ml-1'
                        />
                      </button>

                      <AdressLocation
                        locationInfoWrappClassName={
                          'pl-3 flex items-center mt-[22px] max-[450px]:pl-0 max-[450px]:mb-6 max-[450px]:mt-4'
                        }
                        imgaes={locationAdressIcon}
                        locationTextClassName={
                          'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] ml-1'
                        }
                        locationText={
                          'Almaty town, Amangeldy 59a, 7 floor, 702'
                        }
                      />
                      <AdressLocation
                        locationInfoWrappClassName={
                          'pl-3 flex items-center mt-[22px] max-[450px]:pl-0 max-[450px]:mb-6 max-[450px]:mt-4'
                        }
                        imgaes={locationAdressIcon}
                        locationTextClassName={
                          'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] ml-1'
                        }
                        locationText={
                          'Almaty town, Amangeldy 59a, 7 floor, 702'
                        }
                      />
                      <AdressLocation
                        locationInfoWrappClassName={
                          'pl-3 flex items-center mt-[22px] mb-[70px] max-[450px]:pl-0 max-[450px]:mb-6 max-[450px]:mt-4'
                        }
                        imgaes={locationAdressIcon}
                        locationTextClassName={
                          'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] ml-1'
                        }
                        locationText={
                          'Almaty town, Amangeldy 59a, 7 floor, 702'
                        }
                      />
                      <p className='text-[20px] font-regular leading-[180%] max-[450px]:text-[12px] max-[450px]:mb-10'>
                        Please review the order details and payment details
                        before proceeding to confirm your order{' '}
                      </p>
                      <div className='mb-[26px]'>
                        <h3 className='text-[24px] font-bold mt-[75px] mb-[40px] max-[450px]:mt-0 max-[450px]:text-[16px] max-[450px]:mb-5'>
                          Choose payment Method
                        </h3>
                        <div className='mb-8'>
                          <span className='flex items-center mb-7'>
                            <InputCheckbox
                              type={'radio'}
                              onChange={(value) => setPayment(value)}
                              idName={'3'}
                              inptClass={
                                'accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]'
                              }
                              labelText={'Cash upon receipt'}
                              labelClass={
                                'text-[20px] ml-[30px] max-[450px]:text-[14px] max-[450px]:ml-5 font-semibold'
                              }
                              inputName={'pay'}
                            />
                          </span>
                          {payment == '3' && (
                            <div className='mb-[70px] max-[450px]:mb-[30px]'>
                              <AdressLocation
                                locationInfoWrappClassName={
                                  'pl-3 max-[450px]:pl-0 flex items-center mt-[22px]'
                                }
                                imgaes={locationAdressIcon}
                                locationTextClassName={
                                  'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] max-[450px]:ml-[10px]'
                                }
                                locationText={
                                  'Almaty town, Amangeldy 59a, 7 floor, 702'
                                }
                              />
                              <AdressLocation
                                locationInfoWrappClassName={
                                  'pl-3 max-[450px]:pl-0 flex items-center mt-[22px]'
                                }
                                imgaes={locationAdressIcon}
                                locationTextClassName={
                                  'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] max-[450px]:ml-[10px]'
                                }
                                locationText={
                                  'Almaty town, Amangeldy 59a, 7 floor, 702'
                                }
                              />
                              <AdressLocation
                                locationInfoWrappClassName={
                                  'pl-3 max-[450px]:pl-0 flex items-center mt-[22px]'
                                }
                                imgaes={locationAdressIcon}
                                locationTextClassName={
                                  'ml-[26px]  text-[20px] font-regular max-[450px]:text-[14px] max-[450px]:ml-[10px]'
                                }
                                locationText={
                                  'Almaty town, Amangeldy 59a, 7 floor, 702'
                                }
                              />
                            </div>
                          )}
                          <span className='flex items-center max-[450px]:mb-5'>
                            <InputCheckbox
                              type={'radio'}
                              idName={'4'}
                              onChange={(value) => setPayment(value)}
                              inptClass={
                                'accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]'
                              }
                              labelText={'Card payment'}
                              labelClass={
                                'text-[20px] ml-[30px] max-[450px]:text-[14px] max-[450px]:ml-5 font-semibold'
                              }
                              inputName={'pay'}
                            />
                          </span>
                          {payment == '4' && (
                            <div className='py-[30px] px-[40px] bg-[#CBD5E1] rounded-[10px]'>
                              <Input
                                inputType={'text'}
                                wrapperClassName={'mb-4'}
                                inputClassName={
                                  'w-full py-[12px] px-[12px] border-none outline-none bg-[#E2E8F0] rounded-[5px] max-[450px]:placeholder:text-[10px]'
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
                                      'p-3 border-none outline-none bg-[#E2E8F0] rounded-[5px] w-full placeholder:float-right max-[450px]:placeholder:text-[10px]'
                                    }
                                    inputInnerWrapperClassName={
                                      'flex items-center'
                                    }
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
                                        'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] max-[450px]:placeholder:text-[10px] max-[450px]:px-1 max-[450px]:placeholder:py-3'
                                      }
                                      placeholder={'MM/YY'}
                                      value={cardValidityPeriod}
                                      onChange={(value) =>
                                        setCardValidityPeriod(value)
                                      }
                                      name={'validity_period'}
                                    />
                                    <span className='w-[3px] h-[10px] bg-[#D8D8D8] inline-block'></span>
                                    <Input
                                      inputType={'number'}
                                      wrapperClassName={'flex flex-col w-[25%]'}
                                      inputClassName={
                                        'p-3 border-none rounded-[5px] outline-none bg-[#E2E8F0] w-full placeholder:text-center placeholder:text-[#131515] max-[450px]:placeholder:text-[10px] appearance-none max-[450px]:px-1 max-[450px]:placeholder:py-3'
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
                          )}
                        </div>
                      </div>
                      <div className='flex items-center justify-start mb-10 text-[20px] leading-[180%] max-[450px]:mb-[30px]'>
                        <Savecheckbox
                          id={4}
                          value={'save'}
                          onGetValue={onChecked}
                        />
                        <p className='ml-3 max-[450px]:text-[16px] max-[450px]:leading-[25px]'>
                          Save my card for future purchase
                        </p>
                      </div>
                      <p className='text-[20px] leading-[180%] mb-8 max-[450px]:text-[14px] max-[450px]:leading-[21px] max-[450px]:mb-5'>
                        Please review the order details and payment details
                        before proceeding to confirm your order{' '}
                      </p>
                      <div className='items-center max-[450px]:mb-5 hidden max-[450px]:flex'>
                        <PolicyCheckbox
                          id={'termsPolicy'}
                          onGetValue={onSave}
                          value={'termsPolicy'}
                        />
                        <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                          I agree to the Terms & conditions, Privacy policy &
                          Return policy
                        </div>
                      </div>
                      <div className='items-center hidden max-[450px]:flex'>
                        <PolicyCheckbox
                          id={'emailPolicy'}
                          onGetValue={onSave}
                          value={'emailPolicy'}
                        />
                        <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                          Sign me up to the email list
                        </div>
                      </div>
                      <div className='flex items-center max-[450px]:mb-5 max-[450px]:hidden'>
                        <PolicyCheckbox
                          id={'policyPublic'}
                          onGetValue={onSave}
                          value={'policyPublic'}
                        />
                        <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                          I accept the terms of the{' '}
                          <span
                            onClick={() => setVisible(!visible)}
                            className='text-[20px] leading-[180%] text-[#FF588A] cursor-pointer max-[450px]:text-[14px]'
                          >
                            Public Offer*
                          </span>
                        </div>
                      </div>
                      <div className='flex items-center max-[450px]:hidden'>
                        <PolicyCheckbox
                          id={'paymentPolicy'}
                          onGetValue={onSave}
                          value={'paymentPolicy'}
                        />
                        <div className='ml-[33px] text-[20px] leading-[180%] max-[450px]:text-[14px]'>
                          I have read the{' '}
                          <span className='text-[20px] leading-[180%] text-[#FF588A] cursor-pointer max-[450px]:text-[14px]'>
                            Payment and Return Policy*
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
            <div className='max-w-[580px] w-full'>
              <h3 className='text-[20px] font-[700] mb-[28px] max-[450px]:text-[16px] max-[450px]:mb-[14px]'>
                Products:
              </h3>

              <hr className='bg-[#F9F9FB] w-full border border-solid mb-4' />

              {cart.cart.licenses?.length > 0 &&
                cart.licenses.map(
                  (license) => (
                    console.log(license),
                    (
                      <>
                        <div key={license.id}>
                          <div className='flex items-center justify-between mb-[10px]'>
                            <p className='text-[20px] leading-[140%] font-bold max-[450px]:text-[14px]'>
                              {license.name || license.title}
                            </p>
                            <p className='text-[20px] leading-[140%] font-bold max-[450px]:hidden'>
                              x{license.qty}
                            </p>
                            <p className='text-[20px] leading-[140%] font-bold max-[450px]:text-[14px] max-[450px]:inline-block hidden'>
                              ₸ {license.price}
                            </p>
                          </div>
                          <div className='flex items-center justify-between mb-[10px]'>
                            <p className='max-[450px]:text-[14px]'>Period:</p>
                            <p className='text-[20px] leading-[140%] font-bold max-[450px]:text-[14px]'>
                              {license.period}
                            </p>
                          </div>

                          <div className='flex items-center justify-between w-full mb-[10px]'>
                            <p className='max-[450px]:text-[14px]'>
                              {t('common:users')}:
                            </p>

                            <div className='flex items-center justify-between w-full max-w-[140px]'>
                              <p className='text-[20px] leading-[140%] font-bold max-[450px]:text-[14px]'>
                                +
                                {license.cashier.qty >= license.qty * 2
                                  ? license.cashier.qty - license.qty * 2
                                  : license.cashier.qty}
                              </p>
                              <p className='text-[20px] leading-[140%] font-bold max-[450px]:text-[14px]'>
                                ₸ {license.cashier.price}
                              </p>
                            </div>
                          </div>
                          <div className='w-full mb-7'>
                            <p className='mb-[10px] max-[450px]:text-[14px]'>
                              {t('header:equipment')}:
                            </p>

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
                                  <h3 className='text-[20px] leading-[140%] max-w-[252px] w-full max-[450px]:text-[14px]'>
                                    {product.title || product.name}
                                  </h3>
                                </div>
                                <div className='flex items-center justify-between w-full max-w-[200px] max-[450px]:max-w-[140px]'>
                                  <p className='text-[20px] leading-[180%] font-bold max-[450px]:text-[14px]'>
                                    x{product.qty}
                                  </p>
                                  <p className='text-[20px] leading-[180%] font-bold max-[450px]:text-[14px]'>
                                    ₸ {product.price}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <hr className='bg-[#CBD5E1] border border-solid mb-7' />
                      </>
                    )
                  )
                )}

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
                            <h3 className='text-[20px] leading-[140%] max-w-[252px] w-full max-[450px]:text-[14px]'>
                              {product.title || product.name}
                            </h3>
                          </div>
                          <div className='flex items-center justify-between w-full max-w-[200px] max-[450px]:max-w-[140px]'>
                            <p className='text-[20px] leading-[180%] font-bold max-[450px]:text-[14px]'>
                              x{product.qty}
                            </p>
                            <p className='text-[20px] leading-[180%] font-bold max-[450px]:text-[14px]'>
                              ₸ {product.price}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  : ''}
              </div>
              <hr className='border border-solid mb-4 max-[450px]:block hidden' />
              <div className='flex items-center text-[20px] leading-[140%] font-bold w-full justify-end max-[450px]:text-[16px] max-[450px]:justify-between'>
                <p className='mr-4 max-[450px]:text-[16px]'>Total:</p>₸{' '}
                {cart.totalPrice}
              </div>
            </div>
          </div>
          <div className='flex items-center my-[100px] max-[450px]:flex-col max-[450px]:px-6 max-[450px]:gap-y-4 max-[450px]:my-5'>
            <button
              className={`py-[12px] text-[#fff] max-w-[500px] w-full ${
                checkedPolicy.length > 1
                  ? 'bg-[#7D66BB]'
                  : 'bg-[#eff1fe] text-[#9ca3af]'
              } rounded-[10px] font-bold leading-[140%] text-xl`}
              onClick={() => checkedPolicy.length > 1 && setOpenModal(true)}
            >
              Pay
            </button>
            <Link href={'/cart'} className='max-w-[500px] w-full'>
              <button
                className={
                  'py-[12px] ml-[56px] max-[450px]:ml-0 bg-[transparent] w-full rounded-[10px] font-bold leading-[140%] text-xl border-[2px] border-solid border-[#D1D5DB] text-[#FF588A]'
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
