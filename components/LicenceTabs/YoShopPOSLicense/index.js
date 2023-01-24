import React from 'react'
import Image from 'next/image'
import Button from '../../Button/Button'
import topIm2 from "../../../public/assets/images/prImg22.png";
import checkIcon from "../../../public/assets/images/successCheckIconLicenses.svg";
import shopIcon from "../../../public/assets/images/shopIcon.png";


const YoShopPOSLicense = () => {
  return (
    <>
          <div className="topInfoWrapp flex my-[40px]">
          <div className="topImgWrappLeft w-[600px]">
            <Image
              src={topIm2}
              alt="product-img"
              className="w-[200px] h-[204px]"
            />
          </div>
          <div className="topImgWrappRight w-[100%] flex flex-col justify-center">
            <div className="flex items-center justify-between py-[10px] w-[100%]">
              <div className="flex flex-col">
                <span className="flex items-center">
                  <Image src={checkIcon} alt="check-icon" />{" "}
                  <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                    1 trading place
                  </p>
                </span>
                <span className="flex items-center mt-[24px]">
                  <Image src={checkIcon} alt="check-icon" />{" "}
                  <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                    1 cashier
                  </p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center ">
                  <Image src={checkIcon} alt="check-icon" />{" "}
                  <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                    1 trading place
                  </p>
                </span>
                <span className="flex items-center mt-[24px]">
                  <Image src={checkIcon} alt="check-icon" />{" "}
                  <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                    1 cashier
                  </p>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="flex items-center">
                  <Image src={checkIcon} alt="check-icon" />{" "}
                  <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                    1 trading place
                  </p>
                </span>
                <span className="flex items-center mt-[24px]">
                  <Image src={checkIcon} alt="check-icon" />{" "}
                  <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                    1 cashier
                  </p>
                </span>
              </div>
            </div>
            <span className="flex items-center mt-[31px]">
              <Image src={checkIcon} alt="check-icon" />{" "}
              <p className="text-[#fff] text-[20px] font-[400] ml-[13px]">
                add 1 user for 500 ₸ per month
              </p>
            </span>
          </div>
        </div>


        <div className="calculateInfoWrapp1  mt-[100px]">
          <div className="flex items-center justify-between h-[220px] mb-[50px]">
            <div className="calculateTopCard relative w-[380px] h-[100%]  bg-[#2c2c2c] backdrop-blur-[40px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between mt-[50px] mb-[55px] after:content-[''] after:absolute after:bottom-[-40px] after:left-0 after:right-0 after:mx-auto after:w-[30px] after:h-[30px] after:bg-[#24242C] after:rounded-[50%]">
              <span className="flex items-center justify-between">
                <h2 className="text-[#fff] font-[700] text-[25px]">
                  Monthly:
                </h2>{" "}
                <h2 className="text-[#fff] font-[700] text-[28px]">
                  ₸ 3 000
                </h2>
              </span>
              <span className="flex justify-center">
                <button className="moreBtn text-[#fff] font-[700] text-[20px] border-[1px] border-solid border-[#FC7941] py-[10px] px-[60px] bg-[#FC7941]  rounded-[10px]">
                  Buy
                </button>
              </span>
            </div>
            <div className="calculateTopCard w-[380px] h-[100%]  bg-[#2c2c2c] backdrop-blur-[40px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between mt-[50px] mb-[55px] after:content-[''] after:absolute after:bottom-[-40px] after:left-0 after:right-0 after:mx-auto after:w-[30px] after:h-[30px] after:bg-[#FC7941] after:rounded-[50%]">
              <span className="flex items-center justify-between">
                <h2 className="text-[#fff] font-[700] text-[25px]">
                  Semi annual:
                </h2>{" "}
                <h2 className="text-[#fff] font-[700] text-[28px]">
                  ₸ 3 000
                </h2>
              </span>
              <span className="mx-auto px-[12px] py-[6px] border-[1px] border-solid border-[#fff] rounded-[20px]">
                <p className="text-center text-[17px] font-[400] text-[#22C55E]">
                  - ₸ 3 000{" "}
                </p>
              </span>
              <span className="flex justify-center">
                <button className="moreBtn text-[#fff] font-[700] text-[20px] border-[1px] border-solid border-[#FC7941] py-[10px] px-[60px] bg-[#FC7941]  rounded-[10px]">
                  Buy
                </button>
              </span>
            </div>
            <div className="calculateTopCard w-[380px] h-[100%]  bg-[#2c2c2c] backdrop-blur-[40px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between mt-[50px] mb-[55px] after:content-[''] after:absolute after:bottom-[-40px] after:left-0 after:right-0 after:mx-auto after:w-[30px] after:h-[30px] after:bg-[#24242C] after:rounded-[50%]">
              <span className="flex items-center justify-between">
                <h2 className="text-[#fff] font-[700] text-[25px]">
                  Annual:
                </h2>{" "}
                <h2 className="text-[#fff] font-[700] text-[28px]">
                  ₸ 3 000
                </h2>
              </span>
              <span className="mx-auto px-[12px] py-[6px] border-[1px] border-solid border-[#fff] rounded-[20px]">
                <p className="text-center text-[17px] font-[400] text-[#22C55E]">
                  - ₸ 11 000{" "}
                </p>
              </span>
              <span className="flex justify-center">
                <button className="moreBtn text-[#fff] font-[700] text-[20px] border-[1px] border-solid border-[#FC7941]  py-[10px]  px-[60px] bg-[#FC7941] rounded-[10px]">
                  Buy
                </button>
              </span>
            </div>
          </div>

          <div className="claculateBottomCard py-[38px] px-[100px] bg-[#2c2c2c] rounded-[10px] mb-[100px]">
            <h3 className="text-[#fff] text-[32px] font-[700] text-center mb-[40px]">
              Сalculate your tariff
            </h3>

            <div className="flex justify-between items-center">
              <div className="rounded-[20px] border-[1px] border-solid border-[#E2E8F0] py-[16px] px-[30px] w-[480px] flex items-center justify-between">
                <div className="w-[480px]">
                  <h3 className="text-[#fff] font-[700] text-[24px]">
                    Stores
                  </h3>
                  <p className="text-[#fff] font-[400] text-[18px]">
                    ₸ 3 000 per month{" "}
                  </p>
                </div>
                <div className="w-[480px] flex items-center justify-between">
                  <Button
                    className={
                      "text-[#FC7941] rounded-[50%] text-[40px] border-[1px] border-solid border-[#CBD5E1] w-[50px] h-[50px] flex items-center justify-center"
                    }
                  >
                    -
                  </Button>
                  <p className="calculateValue text-[32px] text-[#fff] font-[500]">
                    1
                  </p>
                  <Button
                    className={
                      "text-[#FC7941] rounded-[50%] text-[40px] border-[1px] border-solid border-[#CBD5E1] w-[50px] h-[50px] flex items-center justify-center"
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="rounded-[20px] border-[1px] border-solid border-[#E2E8F0] py-[16px] px-[30px] w-[480px] flex items-center justify-between">
                <div className="w-[44%]">
                  <h3 className="text-[#fff] font-[700] text-[24px]">
                    POS App
                  </h3>
                  <p className="text-[#fff] font-[400] text-[18px]">
                    ₸ 1 750 per month{" "}
                  </p>
                </div>
                <div className="w-[44%] flex items-center justify-between">
                  <Button
                    className={
                      "text-[#FC7941] rounded-[50%] text-[40px] border-[1px] border-solid border-[#CBD5E1] w-[50px] h-[50px] flex items-center justify-center"
                    }
                  >
                    -
                  </Button>
                  <p className="calculateValue text-[32px] text-[#fff] font-[500]">
                    1
                  </p>
                  <Button
                    className={
                      "text-[#FC7941] rounded-[50%] text-[40px] border-[1px] border-solid border-[#CBD5E1] w-[50px] h-[50px] flex items-center justify-center"
                    }
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end my-[30px]">
              <h3 className="text-[#fff] text-[32px] font-[700]">TOTAL : </h3>
              <h3 className="text-[#fff] text-[32px] font-[700]">
                {" "}
                ₸ 15 000
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <Button
                className={
                  "flex items-center justify-center w-[480px] h-[62px] border-[1px] border-solid border-[#fff] rounded-[10px] py-[12px] text-[20px] font-[700]"
                }
              >
                <Image
                  src={shopIcon}
                  alt="shop-icon"
                  className="w-[35px] mr-[10px]"
                />{" "}
                Add to cart
              </Button>
              <Button
                className={
                  "flex items-center justify-center w-[480px] h-[62px] border-[1px] border-solid border-[#fff] bg-[#4F46E5] rounded-[10px] py-[12px] text-[20px] font-[700]"
                }
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default YoShopPOSLicense