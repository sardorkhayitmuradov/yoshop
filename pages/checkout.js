import React, { useState, useRef } from "react";
import Image from "next/image";
import Input from "../components/Input/Input";
import checkCircle from "../public/assets/images/check-circle1.png";
import checkCircle2 from "../public/assets/images/check-circle2.png";
import cartPrImg from "../public/assets/images/checkPageProductsideRotateImg.png";
import confrimSuccessImg from "../public/assets/images/modalSuccessInfo.png";
import locationAdressIcon from "../public/assets/images/locationIcon.svg";
import AdressLocation from "../components/AdressLocation/AdressLocation";
import InputCheckbox from "../components/InputCheckbox/InputCheckbox";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Savecheckbox from "../components/SaveCheckbox";
import Checkbox from "../components/Checkbox";
import Link from "next/link";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'header', 'footer'])),
    }
  };
}

const Checkout = () => {
  const [tab, setTab] = useState("1");
  const [openModal, setOpenModal] = useState(false);

  const onChecked = (e) => {
    console.log(e.target.value);
  };

  return <>

    <section className="pt-[170px]">
      <div className="container max-w-7xl mx-auto">
        <h2 className="font-bold mb-10 text-[32px] leading-[140%]">
          Checkout
        </h2>

        <div className="flex justify-between mb-8">
          <div className="pt-[14px] max-w-[580px] w-full">
            <h2 className="font-bold mb-[40px] text-[20px] leading-[140%]">
              Delivery options
            </h2>
            <div className="flex justify-between max-w-[392px] w-full mb-5">
              <div className={`bg-[#F9FAFB] p-[14px] flex justify-between items-start rounded-[3px] max-w-[187px] w-full border border-solid ${tab === '1' ? 'border-[#7047EB]': "border-[#9CA3AF]"}`} onClick={() => setTab("1")}>
                <span>
                  <h4 className="text-[14px] leading-[17px] mb-[10px] font-medium">
                    Home delivery
                  </h4>
                  <p className="text-[12px] leading-[150%] text-[#828282]">
                    Takes 3-5 business days
                  </p>
                </span>
                {
                   tab == '1' ?  <Image
                   src={checkCircle}
                   alt="check-circle"
                   width={20}
                   height={20} 
                 /> : <Image
                 src={checkCircle2}
                 alt="check-circle"
                 width={20}
                 height={20} 
               />
                }
              </div>
              <div className={`bg-[#F9FAFB] p-[14px] flex justify-between items-start rounded-[3px] max-w-[187px] w-full border border-solid ${tab === '2' ? 'border-[#7047EB]': "border-[#9CA3AF]"}`} onClick={() => setTab("2")}>
                <span>
                  <h4 className="text-[14px] leading-[17px] mb-[10px] font-medium">
                    In-store pickup
                  </h4>
                  <p className="text-[12px] leading-[150%] text-[#828282]">
                    Pick from store location
                  </p>
                </span>
                {
                  tab == '2' ?  <Image
                  src={checkCircle}
                  alt="check-circle"
                  width={20}
                  height={20} 
                /> : ""
                }
              </div>
            </div>

            {
              tab === '1' && <> <p className="text-[16px] leading-[25px] max-w-[500px] w-full mb-10">*Delivery is paid by a private person according to the tariff of the courier company.</p>

                <div className="w-full mb-[70px]">
                  <Input
                    inputType={"text"}
                    wrapperClassName={
                      "w-full mb-8 flex justify-between items-center"
                    }
                    inputClassName={
                      "max-w-[377px] w-full py-[14px] px-[14px] placeholder placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]"
                    }
                    placeholder={"First/Last Name"}
                    value={""}
                    labelValue={"Name*"}
                    name={"nameInput"}
                    labelClassName={"text-[20px] font-regular"}
                  />
                  <Input
                    inputType={"text"}
                    wrapperClassName={
                      "w-full mb-8 flex justify-between items-center"
                    }
                    inputClassName={
                      "max-w-[377px] w-full py-[14px] px-[14px] placeholder placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]"
                    }
                    placeholder={"+7 700 000 00 00"}
                    value={""}
                    labelValue={"Mobile phone*"}
                    name={"phoneInput"}
                    labelClassName={"text-[20px] font-regular"}
                  />
                  <Input
                    inputType={"text"}
                    wrapperClassName={
                      "w-full mb-8 flex justify-between items-center"
                    }
                    inputClassName={
                      "max-w-[377px] w-full py-[14px] px-[14px] placeholder placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]"
                    }
                    placeholder={"Enter your e-mail"}
                    value={""}
                    labelValue={"E-mail*"}
                    name={"emailInput"}
                    labelClassName={"text-[20px] font-regular"}
                  />
                  <Input
                    inputType={"text"}
                    wrapperClassName={
                      "w-full mb-8 flex justify-between items-center"
                    }
                    inputClassName={
                      "max-w-[377px] w-full py-[14px] px-[14px] placeholder placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]"
                    }
                    placeholder={"Enter your town"}
                    value={""}
                    labelValue={"Town*"}
                    name={"townInput"}
                    labelClassName={"text-[20px] font-regular"}
                  />
                  <Input
                    inputType={"text"}
                    wrapperClassName={
                      "w-full mb-8 flex justify-between items-center"
                    }
                    inputClassName={
                      "max-w-[377px] w-full py-[14px] px-[14px] placeholder placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] placeholder:text-[#9CA3AF]  bg-[#eff2f6]"
                    }
                    placeholder={"Enter your actual address"}
                    value={""}
                    labelValue={"Actual address*"}
                    name={"adressInput"}
                    labelClassName={"text-[20px] font-regular"}
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

                <div className="mb-[26px]">
                  <h3 className="text-[24px] font-[700] mt-[75px] mb-[40px]">
                    Choose payment Method
                  </h3>
                  <div className="mb-8">
                    <span className="flex items-center">
                      <InputCheckbox
                        type={"radio"}
                        idName={"payCheck1"}
                        inptClass={"accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]"}
                        labelText={"Cash upon receipt"}
                        labelClass={
                          "text-[20px] font-regular ml-[30px]"
                        }
                        inputName={"pay"}
                      />
                    </span>
                    <span className="flex items-center">
                      <InputCheckbox
                        type={"radio"}
                        idName={"payCheck2"}
                        inptClass={"accent-[#FF588A] w-[20px] h-[20px] bg-[#fff]"}
                        labelText={"Card payment"}
                        labelClass={
                          "text-[20px] font-regular ml-[30px]"
                        }
                        inputName={"pay"}
                      />
                    </span>
                  </div>

                  <div className="py-[30px] px-[40px] bg-[#CBD5E1] rounded-[10px]">
                    <Input
                      inputType={"text"}
                      wrapperClassName={"mb-4"}
                      inputClassName={
                        "w-full py-[12px] px-[12px] border-none outline-none bg-[#E2E8F0] rounded-[5px]"
                      }
                      placeholder={""}
                      value={""}
                      labelValue={"Name on card"}
                      name={"paycCardInfo"}
                      labelClassName={"mb-[3px] font-bold"}
                    />

                    <div className="payCardNumbInfo">
                      <div>
                        <Input
                          inputType={"text"}
                          wrapperClassName={"mb-4 flex flex-col"}
                          inputClassName={
                            "py-[12px] px-[12px] border-none outline-none bg-[#E2E8F0] rounded-[5px] w-full placeholder: float-right"
                          }
                          placeholder={""}
                          value={""}
                          labelValue={"Card Number"}
                          name={"cardNumbInfo"}
                          labelClassName={"mb-[3px] font-bold"}
                        />

                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start mb-10 text-[20px] leading-[180%]">
                  <Savecheckbox id={4} value={'save'} onGetValue={onChecked} />
                  <p className="ml-3">Save my card for future purchase</p>
                </div>

                <p className="text-[20px] leading-[180%] mb-8">Please review the order details and payment details before proceeding to confirm your order </p>

                <div className="flex items-start">
                  <input type="checkbox" name="terms" id="terms" className="w-[20px] h-[20px] mt-2" />
                  <div className="ml-[33px] text-[20px] leading-[180%]">I agree to the <span className="text-[20px] leading-[180%] text-[#FF588A] cursor-pointer">Terms & conditions</span>, Privacy policy & Return policy</div>
                </div> </> || tab === '2' && "hello"
            }
          </div>
          <div className="rightCheckWithInfo max-w-[580px] w-full">
            <h3 className="checkProductItemTitle text-[20px] font-[700] mb-[30px]">
              Items(1)
            </h3>
            <hr />

            <div className="flex justify-between items-center mt-[20px]">
              <div className="cartPageImg relative flex items-center w-[60px] h-[60px]">
                {/* <Image src={cartElipsImg} alt="elips" className="elipsImg" /> */}
                <Image
                  src={cartPrImg}
                  alt="product-Img"
                  className="productsImg absolute left-[5px] h-[67px]"
                />
              </div>
              <h3 className="text-[20px] font-[700]">
                YoShop POS (К9 Centerm)
              </h3>
              <h3 className="text-[24px] font-[700]">
                ₸ 150 000
              </h3>
            </div>
            <div className="confrimProductOnfoTextsWrapp w-full">
              <div className="w-[290px] float-right mt-[23px]">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-regular">
                    Subtotal
                  </p>
                  <p className="text-[20px] font-regular">
                    ₸ 150 000
                  </p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[20px] font-regular mt-[15px]">
                    Shipping
                  </p>
                </div>
              </div>
            </div>
            <hr className="opacity-40 w-full" />
            <div className="w-[290px] float-right mt-[23px]">
              <div className="flex justify-between items-center">
                <p className="text-[20px] font-[700]">Subtotal</p>
                <p className="text-[20px] font-[700]">
                  ₸ 150 000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center my-[100px]">
          <button
            className={
              "py-[12px] text-[#fff] max-w-[500px] w-full bg-[#7D66BB] rounded-[10px] font-bold leading-[140%] text-xl"
            }
            onClick={() => setOpenModal(true)}
          >
            Send
          </button>
          <Link href={'/cart'} className="max-w-[500px] w-full">
            <button
              className={
                "py-[12px] ml-[56px] bg-[transparent] w-full rounded-[10px] font-bold leading-[140%] text-xl border-[2px] border-solid border-[#D1D5DB] text-[#FF588A]"
              }
            >
              Back to Cart
            </button>
          </Link>
        </div>
      </div>
      {
        openModal ?
          <>
            <div
              className="fixed w-screen h-screen top-0 left-0 bg-[#e1e1e1] opacity-80 z-[20]"
              onClick={() => setOpenModal(false)}
            ></div>
            <div
              className="absolute flex top-[22%] items-center justify-center left-0 right-0 mx-auto w-[835px] bg-[#ffff] z-50 rounded-[16px] shadow-xl "

            >
              <div>
                <button
                  className="mr-6 float-right text-[40px] font-[700] opacity-60 text-[#000]"
                  onClick={() => setOpenModal(false)}
                >
                  x
                </button>
                <div className="flex flex-col w-full h-[100%] py-[50px]  items-center px-[100px] ">
                  <Image
                    src={confrimSuccessImg}
                    alt="success-img"
                    className="w-[86px] h-[86px]"
                  />
                  <h3 className="my-[32px] text-[36px] font-medium text-center text-[#000]">
                    Thank you! Your data has been successfully sent.
                  </h3>
                  <p className="text-[30px] font-regular text-center text-[#9CA3AF]">
                    Expect feedback.
                  </p>
                </div>
              </div>
            </div>
          </>
          : ""
      }
    </section>
  </>;




};

export default Checkout;
