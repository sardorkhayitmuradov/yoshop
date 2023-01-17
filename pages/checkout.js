import React from 'react'
import Image from 'next/image';
import Button from "../components/Button/Button";
import cartElipsImg from "../public/assets/images/Ellipse-2Big.png";
import cartPrImg from "../public/assets/images/checkPageProductsideRotateImg.png";

const Checkout = () => {
  return (
   <>
   
   <section className="min-h-[90vh]">
        <div className="container max-w-7xl mx-auto">
          <h2 className="checkoutPageTitle font-[700] text-[#fff] text-center my-10 text-[32px]">
            Cart
          </h2>
          <hr />
          <div className="flex checkPageTitles items-center">
            <div className="w-[60%] my-6 text-[#fff]">
              <p className="cartText1 font-[400] text-[16px] ">My cart</p>
            </div>
            <div className="w-[40%] my-6 text-[#fff]">
              <p className="cartText1 font-[400] text-[16px]">Order Summary</p>
            </div>
          </div>
          <hr />

          <div className="cartInfoWrapp flex">
        <div className="leftInfoWrapp my-10 flex w-[60%]">
        <div className="cartPageImg relative flex items-center">
              <Image src={cartElipsImg} alt="elips" className="elipsImg" />
              <Image
                src={cartPrImg}
                alt="product-Img"
                className="productsImg absolute left-[40px]"
              />
            </div>
            <div className="cartPageProductTitle">
              <h2 className="font-[700] text-[20px] text-[#fff] mt-7 ml-[40px]">
                YoShop POS (К9 Centerm)
              </h2>
            </div>
        </div>

        <div className="rightInfoWrappcartpage w-[40%]">
          <div className="cartPageInfoTitlesAll flex items-center justify-between mt-[56px] ">
            <h3 className="font-[700] text-[20px] text-[#fff]">YoShop POS (К9 Centerm)</h3>
            <h3 className="font-[700] text-[20px] text-[#fff]">₸ 150 000</h3>
          </div>
          <div className="cartPageInfoTitlesAll flex items-center justify-between mt-[30px] ">
            <h3 className="font-[700] text-[20px] text-[#fff]">Subtotal</h3>
            <h3 className="font-[700] text-[20px] text-[#fff]">₸ 150 000</h3>
          </div>
          <div className="cartPageInfoTitlesAll flex items-center justify-between mt-[30px] ">
            <h3 className="font-[700] text-[20px] text-[#fff]">Discount</h3>
            <h3 className="font-[700] text-[20px] text-[#fff]">₸ 0</h3>
          </div>
        </div>
          </div>
          <hr/>

          <div className="cartPageTotalInfoWrapp w-[40%] float-right">
          <div className="cartPageInfoTitlesAll flex items-center justify-between mt-[30px] ">
            <h3 className="font-[700] text-[32px] text-[#fff]">Discount</h3>
            <h3 className="font-[700] text-[32px] text-[#fff]">₸ 0</h3>
          </div>
          <div className="totalInfoBtnWrapp">
            <Button className={"w-[100%] my-[35px] font-[700] text-[20px] text-[#fff] pt-[16px] pb-[26px] px-[123px] bg-[#4F46E5] border-[1px] border-solid border-[#94A3B8] rounded-[10px] leading-[140%]"}>Check Out</Button>
          </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Checkout