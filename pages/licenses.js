import Image from "next/image";
import topImg from "../public/assets/images/licensesPageProductImg.png";
import topIm2 from "../public/assets/images/prImg22.png";
import checkIcon from "../public/assets/images/successCheckIconLicenses.svg";
import shopIcon from "../public/assets/images/shopIcon.png";
import succesIcon2 from "../public/assets/images/successIcon.png";
import setupIcon2 from "../public/assets/images/setupIcon.png";
import monitorIcon2 from "../public/assets/images/monitorIcon.png";
import productImg2 from "../public/assets/images/monitorProductImg.png";
import Button from "../components/Button/Button";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import ProductCard from "../components/ProductCard/ProductCard";
import TabTitle from "../components/TabTitle/TabTitle";
const Licenses = () => {
  return (
    <section>
      <div className="site-container">
        <h2 className="text-[32px] text-[#fff] font-[700] mt-[100px] mb-[40px]">Yoshop Licenses</h2>

        <div className="tabTitleWrapp flex justify-center">
          <TabTitle titleWrappClassName={"w-[210px] py-[13px] px-[12px] bg-[#FC7941] rounded-t-[10px] text-center cursor-pointer"}>YoShop Mobile License</TabTitle>
          <TabTitle titleWrappClassName={"w-[210px] py-[13px] px-[12px] bg-[#2c2c2c] rounded-t-[10px] text-center cursor-pointer"}>YoShop POS License</TabTitle>
          <TabTitle titleWrappClassName={"w-[210px] py-[13px] px-[12px] bg-[#2c2c2c] rounded-t-[10px] text-center cursor-pointer"}>Android POS License</TabTitle>
          <TabTitle titleWrappClassName={"w-[210px] py-[13px] px-[12px] bg-[#2c2c2c] rounded-t-[10px] text-center cursor-pointer"}>POS Monoblock</TabTitle>
          <TabTitle titleWrappClassName={"w-[210px] py-[13px] px-[12px] bg-[#2c2c2c] rounded-t-[10px] text-center cursor-pointer"}>PC</TabTitle>
        </div>


        <div className="topInfoWrapp flex my-[40px]">
          <div className="topImgWrappLeft w-[500px]">
            <Image
              src={topImg}
              alt="product-img"
              className="w-[200px] h-[204px]"
            />
          </div>
          <div className="topImgWrappRight  flex items-center justify-between py-[10px] w-[100%]">
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
        </div>
        <Button
          className={"bg-[#FC7941] rounded-[20px] py-[10px] px-[100px]"}
        >
          Get 30 day free trail
        </Button>

        <div className="calculateInfoWrapp1  mt-[100px]">
          <div className="flex items-center justify-between h-[220px] mb-[50px]">
            <div className="calculateTopCard w-[380px] h-[100%]  bg-[#2c2c2c] backdrop-blur-[40px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between my-[50px]">
              <span className="flex items-center justify-between">
                <h2 className="text-[#fff] font-[700] text-[25px]">
                  Monthly:
                </h2>{" "}
                <h2 className="text-[#fff] font-[700] text-[28px]">
                  ₸ 3 000
                </h2>
              </span>
              <span className="flex justify-center">
                <button className="moreBtn text-[#fff] font-[700] text-[25px] border-[1px] border-solid border-[#94A3B8] py-[10px] px-[17px] rounded-[10px]">
                  More option
                </button>
              </span>
            </div>
            <div className="calculateTopCard w-[380px] h-[100%]  bg-[#2c2c2c] backdrop-blur-[40px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between my-[50px]">
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
                <button className="moreBtn text-[#fff] font-[700] text-[25px] border-[1px] border-solid border-[#94A3B8] py-[10px] px-[17px] rounded-[10px]">
                  More option
                </button>
              </span>
            </div>
            <div className="calculateTopCard w-[380px] h-[100%]  bg-[#2c2c2c] backdrop-blur-[40px] rounded-[10px] px-[30px] py-[20px] flex flex-col justify-between my-[50px]">
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
                <button className="moreBtn text-[#fff] font-[700] text-[25px] border-[1px] border-solid border-[#94A3B8] py-[10px] px-[17px] rounded-[10px]">
                  More option
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

        <h3 className="text-[32px] font-[700] text-[#fff] mb-[40px]">
          The license price includes:
        </h3>
        <div className="flex items-center justify-between mb-[100px]">
          <EquipmentCard
            image={succesIcon2}
            wrapperClassName={"w-[380px] rounded-[10px]"}
          >
            Software warranty
          </EquipmentCard>
          <EquipmentCard
            image={setupIcon2}
            wrapperClassName={"w-[380px] rounded-[10px]"}
          >
            Setup
          </EquipmentCard>
          <EquipmentCard
            image={monitorIcon2}
            wrapperClassName={"w-[380px] rounded-[10px]"}
          >
            Remote technical support
          </EquipmentCard>
        </div>
        <h3 className="text-[32px] font-[700] text-[#fff] mb-[40px]">
          You can buy an equpment for your license
        </h3>

        <div className="flex items-center justify-between">
          <ProductCard
            image={productImg2}
            title={"Android POS"}
            price={"₸ 200,200"}
          >
            {" "}
            <Button
              className={
                "flex items-center justify-center w-[100%] h-[62px] border-[1px] border-solid border-[#fff] rounded-[10px] py-[12px] text-[20px] font-[700] mt-[20px] bg-[#3D3D46]"
              }
            >
              <Image
                src={shopIcon}
                alt="shop-icon"
                className="w-[35px] mr-[10px]"
              />{" "}
              Add to cart
            </Button>
          </ProductCard>
          <ProductCard
            image={productImg2}
            title={"Android POS"}
            price={"₸ 200,200"}
          >
            {" "}
            <Button
              className={
                "flex items-center justify-center w-[100%] h-[62px] border-[1px] border-solid border-[#fff] rounded-[10px] py-[12px] text-[20px] font-[700] mt-[20px] bg-[#3D3D46]"
              }
            >
              <Image
                src={shopIcon}
                alt="shop-icon"
                className="w-[35px] mr-[10px]"
              />{" "}
              Add to cart
            </Button>
          </ProductCard>
          <ProductCard
            image={productImg2}
            title={"Android POS"}
            price={"₸ 200,200"}
          >
            {" "}
            <Button
              className={
                "flex items-center justify-center w-[100%] h-[62px] border-[1px] border-solid border-[#fff] rounded-[10px] py-[12px] text-[20px] font-[700] mt-[20px] bg-[#3D3D46]"
              }
            >
              <Image
                src={shopIcon}
                alt="shop-icon"
                className="w-[35px] mr-[10px]"
              />{" "}
              Add to cart
            </Button>
          </ProductCard>
        </div>

        <div className="mb-[300px]"></div>






        {/* tab 2 */}

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

        <div className="mb-[300px]"></div>
      </div>
    </section>
  );
};

export default Licenses;
