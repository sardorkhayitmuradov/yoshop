import React from "react";
import Image from "next/image";
import Input from "../components/Input/Input";

import checkCircle from "../public/images/check-circle1.png";
import checkCircle2 from "../public/images/check-circle2.png";
import cartElipsImg from "../public/images/Ellipse-2Big.png";
import cartPrImg from "../public/images/checkPageProductsideRotateImg.png";
import Button from "../components/Button/Button";
import confrimSuccessImg from "../public/images/modalSuccessInfo.png";
import locationAdressIcon from "../public/images/locationIcon.svg";
import AdressLocation from "../components/AdressLocation/AdressLocation";
import { useState, useRef } from "react";
import InputCheckbox from "../components/InputCheckbox/InputCheckbox";
const Checkout = () => {
  // const [modalManage, setModalManage] = useState(false);
  const modalInfoBg = useRef();
  const modalInfo = useRef();
  function modal() {
    if (modalInfoBg.current.classList.contains("hidden")) {
      modalInfoBg.current.classList.remove("hidden");
      modalInfoBg.current.classList.add("block");
      modalInfo.current.classList.remove("hidden");
      modalInfo.current.classList.add("block");
    }
  }
  function closeModal() {
    if (modalInfoBg.current.classList.contains("block")) {
      modalInfoBg.current.classList.add("hidden");
      modalInfoBg.current.classList.remove("block");
      modalInfo.current.classList.add("hidden");
      modalInfo.current.classList.remove("block");
    }
  }
  return (
    <>
      <section className="min-h-[110vh] relative">
        <div className="container max-w-7xl mx-auto ">
          <h2 className="chekoutTitle my-[70px] text-[44px] font-[700] text-center text-[#fff]">
            Checkout
          </h2>
          <div className="checkWithInfoWrapp flex justify-between">
            <div className="leftCheckWithInfo w-[590px] pt-[14px]">
              <div className="confrimCheckWrapp flex justify-between">
                <div className="confrimCheckInfoleft bg-[#24242C] px-[20px] py-[20px] w-[280px] flex justify-between rounded-[10px] border-x border-y border-solid border-[#7047EB]">
                  <span>
                    {" "}
                    <h4 className="text-[16px] font-[400] text-[#fff] ">
                      Home delivery
                    </h4>
                    <p className="text-[14px] font-[400] text-[#828282] mt-[10px]">
                      Takes 3-5 business days
                    </p>
                  </span>
                  <Image
                    src={checkCircle}
                    alt="check-circle"
                    className="w-[25px] h-[25px]"
                  />
                </div>
                <div className="confrimCheckInforight bg-[#24242C] px-[20px] py-[20px] w-[280px] flex justify-between rounded-[10px] border-x border-y border-solid border-[#7047EB]">
                  <span>
                    {" "}
                    <h4 className="text-[16px] font-[400] text-[#fff] ">
                      In-store pickup
                    </h4>
                    <p className="text-[14px] font-[400] text-[#828282] mt-[10px]">
                      In-store pickup
                    </p>
                  </span>
                  <Image
                    src={checkCircle2}
                    alt="check-circle"
                    className="w-[25px] h-[25px]"
                  />
                </div>
              </div>

              <div className="checkFormWrapp">
                <Input
                  inputType={"text"}
                  wrapperClassName={
                    "w-[100%] mb-[20px] flex justify-between items-center mt-[76px]"
                  }
                  inputClassName={
                    "w-[377px] py-[14px] px-[14px] placeholder:text-[#fff] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px]  bg-[#4a4d57]"
                  }
                  placeholder={"First/Last Name"}
                  value={""}
                  labelValue={"Name*"}
                  name={"nameInput"}
                  labelClassName={"text-[20px] font-[400] text-[#fff]"}
                />
                <Input
                  inputType={"text"}
                  wrapperClassName={
                    "w-[100%] mb-[20px] flex justify-between items-center mt-[40px]"
                  }
                  inputClassName={
                    "w-[377px] py-[14px] px-[14px] placeholder:text-[#fff] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px]  bg-[#4a4d57]"
                  }
                  placeholder={"+7 700 000 00 00"}
                  value={""}
                  labelValue={"Mobile phone*"}
                  name={"phoneInput"}
                  labelClassName={"text-[20px] font-[400] text-[#fff]"}
                />
                <Input
                  inputType={"text"}
                  wrapperClassName={
                    "w-[100%] mb-[20px] flex justify-between items-center mt-[40px]"
                  }
                  inputClassName={
                    "w-[377px] py-[14px] px-[14px] placeholder:text-[#fff] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px]  bg-[#4a4d57]"
                  }
                  placeholder={"Enter your town"}
                  value={""}
                  labelValue={"Town*"}
                  name={"townInput"}
                  labelClassName={"text-[20px] font-[400] text-[#fff]"}
                />
                <Input
                  inputType={"text"}
                  wrapperClassName={
                    "w-[100%] mb-[20px] flex justify-between items-center mt-[40px]"
                  }
                  inputClassName={
                    "w-[377px] py-[14px] px-[14px] placeholder:text-[#fff] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px]  bg-[#4a4d57]"
                  }
                  placeholder={"Enter your actual address"}
                  value={""}
                  labelValue={"Actual address*"}
                  name={"adressInput"}
                  labelClassName={"text-[20px] font-[400] text-[#fff]"}
                />
              </div>
              <div className="locationAdressWrapp">
                <h3 className="text-[20px] font-[400] text-[#fff] my-[30px]">
                  Pick-up point
                </h3>

                <AdressLocation
                  locationInfoWrappClassName={
                    "pl-3 flex items-center mt-[22px]"
                  }
                  imgaes={locationAdressIcon}
                  locationTextClassName={
                    "ml-[26px]  text-[20px] font-[400] text-[#fff]"
                  }
                  locationText={"Almaty town, Amangeldy 59a, 7 floor, 702"}
                />
                <AdressLocation
                  locationInfoWrappClassName={
                    "pl-3 flex items-center mt-[22px]"
                  }
                  imgaes={locationAdressIcon}
                  locationTextClassName={
                    "ml-[26px]  text-[20px] font-[400] text-[#fff]"
                  }
                  locationText={"Almaty town, Amangeldy 59a, 7 floor, 702"}
                />
              </div>

              <div className="paymentInfoWrapp">
                <h3 className="text-[24px] font-[700] text-[#fff] mt-[75px] mb-[40px]">
                  Choose payment Method
                </h3>
                <div className="checkFormWrapp ">
                  <span className="flex items-center">
                    <InputCheckbox
                      type={"radio"}
                      idName={"payCheck1"}
                      inptClass={"accent-[#37BC15] w-[20px] h-[20px] bg-[#fff]"}
                      labelText={"Сash upon receipt"}
                      labelClass={
                        "text-[20px] font-[400] text-[#fff] ml-[30px]"
                      }
                      inputName={"pay"}
                    />
                  </span>
                  <span className="flex items-center">
                    <InputCheckbox
                      type={"radio"}
                      idName={"payCheck2"}
                      inptClass={"accent-[#37BC15] w-[20px] h-[20px] bg-[#fff]"}
                      labelText={"Credit card payment"}
                      labelClass={
                        "text-[20px] font-[400] text-[#fff] ml-[30px]"
                      }
                      inputName={"pay"}
                    />
                  </span>
                </div>

                <div className="payCardInfoWrapp py-[30px] px-[40px] bg-[#272727] rounded-[10px] my-[40px]">
                  <Input
                    inputType={"text"}
                    wrapperClassName={"mb-[20px]"}
                    inputClassName={
                      "w-full py-[12px] px-[12px] border-none outline-none bg-[#4D5054] rounded-[5px]"
                    }
                    placeholder={""}
                    value={""}
                    labelValue={"Name on card"}
                    name={"paycCardInfo"}
                    labelClassName={"mb-[5px]"}
                  />

                  <div className="payCardNumbInfo">
                    <div>
                    <label htmlFor="cardNumbInfo" className="mb-[5px]">Card Number</label>
                    </div>
                    <div>
                      <input type="text" id="cardNumbInfo"/>
                    </div>
                    {/* <Input
                      inputType={"text"}
                      wrapperClassName={"mb-[20px] flex flex-col"}
                      inputClassName={
                        "py-[12px] px-[12px] border-none outline-none rounded-[5px] w-[70%] placeholder: float-right"
                      }
                      placeholder={"enter card"}
                      value={""}
                      labelValue={"Card Number"}
                      name={"cardNumbInfo"}
                      labelClassName={"mb-[5px]"}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="confrimReq mt-[72px]">
                <h3 className="confrimReqTitle text-[24px] font-[700] text-[#fff] mb-[23px]">
                  Delivery options
                </h3>
                <p className="confrimReqText text-[20px] font-[400] text-[#fff] mb-[23px]">
                  *Delivery is paid by the client separately according to the
                  tariff of the courier company.
                </p>
              </div>
            </div>
            <div className="rightCheckWithInfo w-[580px]">
              <h3 className="checkProductItemTitle text-[20px] font-[700] text-[#fff] mb-[30px]">
                Items(1)
              </h3>
              <hr />

              <div className="flex justify-between items-center mt-[20px]">
                <div className="cartPageImg relative flex items-center w-[60px] h-[60px]">
                  <Image src={cartElipsImg} alt="elips" className="elipsImg" />
                  <Image
                    src={cartPrImg}
                    alt="product-Img"
                    className="productsImg absolute left-[5px] h-[67px]"
                  />
                </div>
                <h3 className="text-[20px] font-[700] text-[#fff]">
                  YoShop POS (К9 Centerm)
                </h3>
                <h3 className="text-[24px] font-[700] text-[#fff]">
                  ₸ 150 000
                </h3>
              </div>
              <div className="confrimProductOnfoTextsWrapp w-[100%]">
                <div className="w-[290px] float-right mt-[23px]">
                  <div className="flex justify-between items-center">
                    <p className="text-[20px] font-[400] text-[#fff]">
                      Subtotal
                    </p>
                    <p className="text-[20px] font-[400] text-[#fff]">
                      ₸ 150 000
                    </p>
                  </div>
                  <div className="flex justify-between items-center mb-[20px]">
                    <p className="text-[20px] font-[400] text-[#fff] mt-[15px]">
                      Shipping
                    </p>
                  </div>
                </div>
              </div>
              <hr className="opacity-40 w-[100%]" />
              <div className="w-[290px] float-right mt-[23px]">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-[700] text-[#fff]">Subtotal</p>
                  <p className="text-[20px] font-[700] text-[#fff]">
                    ₸ 150 000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="confrimBtnWrapp flex justify-between items-center my-[100px]">
            <button
              className={
                "pt-[21px] pb-[21px] px-[123px] bg-[#4F46E5] rounded-[10px] font-bold leading-[140%] text-xl w-[45%]"
              }
              onClick={() => {
                modal();
              }}
            >
              Send
            </button>
            <button
              className={
                "pt-[21px] pb-[21px] px-[123px] bg-[transparent] rounded-[10px] font-bold leading-[140%] text-xl w-[45%] border-[1px] border-solid border-[#FC9D4F] text-[#FC9D4F]"
              }
            >
              Back to equipment
            </button>
          </div>
        </div>
        <div
          className="modalInfoBg hidden fixed w-[100%] h-[120vh] top-0 left-0 bg-[#f0f0f0] opacity-70 z-10"
          ref={modalInfoBg}
        ></div>
        <div
          className="modalInfoWrapp hidden absolute top-[30%] left-0 right-0 mx-auto w-[835px] h-[512px] bg-[#ffff] z-20 rounded-[16px] shadow-xl "
          ref={modalInfo}
        >
          <button
            className="closeModal mr-6 float-right text-[44px] font-[700] opacity-60 text-[#000]"
            onClick={() => closeModal()}
          >
            x
          </button>
          <div className="flex flex-col w-[100%] h-[100%] pt-[50px]  items-center px-[100px] ">
            <Image
              src={confrimSuccessImg}
              alt="success-img"
              className="w-[86px] h-[86px]"
            />
            <h3 className="my-[32px] text-[36px] font-[500] text-center text-[#000]">
              Thank you! Your data has been successfully sent.
            </h3>
            <p className="text-[30px] font-[400] text-center text-[#9CA3AF]">
              Expect feedback.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
