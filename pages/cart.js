import Button from "../components/Button/Button";
// import cartElipsImg from "../public/assets/images/Ellipse-2Big.png"; 
import centerm from "../public/assets/images/centrem.png";
import Image from "next/image";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CancelButton from '../public/assets/images/cart-cancel.svg';
import { CalculatorProduct } from "../components/CalculatorProduct";
import Checkbox from "../components/Checkbox";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'header', 'footer'])),
    }
  };
}
const Cart = () => {
  const onChecked = (e) => {
    const {value , checked} = e.target;
    console.log(value, checked)
  } 

  return <>
    <section className="min-h-[90vh] pt-[170px] mb-[250px] font-PoppinsBold text-[#111827]">
      <div className="container max-w-7xl mx-auto">
        <h1 className="font-bold text-[32px] leading-[140%] mb-7">Cart</h1>
        <div className="border-y border-[#CBD5E1] flex items-center py-4 justify-between mb-2">
          <div className="flex items-center max-w-[590px] w-full justify-between pl-[95px]">
            <p>Products</p>
            <p>Qty</p>
          </div>
          <div className="max-w-[510px] w-full">
            <p>Order Summary</p>
          </div>
        </div>
        <p className="text-[#FF588A] mb-5 leading-[180%] cursor-pointer">Select All</p>

        <ul>
          <li className="py-5 border-b borderb-[#cbd5e1]">
            <Checkbox id={1} value={'mobile'} onGetValue={onChecked}/>
            <div className="flex justify-between items-center mb-6">
              <div className="max-w-[590px] w-full flex justify-between items-center">
                <div className="py-[5px] pl-[47px] flex items-center justify-between">
                  <Image src={CancelButton} width={23} height={23} alt="cancel-btn" className="mr-[25px]" />
                  <h3 className="text-[20px] font-bold leading-[140%] mr-[25px]">YoShop Mobile License</h3>
                  <p className="text-[#FF588A] text-[12px] leading-[140%] border-b border-[#ff588a] pb-1">Edit License</p>
                </div>
                <p className="text-[20px] leading-[140%] font-bold">x1</p>
              </div>
              <div className="max-w-[510px] w-full flex items-center justify-between text-[20px] leading-[180%]">
                <div className="flex items-center justify-between w-full">
                  <p>Period</p>
                  <p>monthly</p>
                </div>
              </div>
            </div>
            <p className="text-right text-[20px] leading-[140%]">Subtotal: <span className="ml-[30px]">₸ 4 500</span></p>
          </li>
          <li className="py-5 border-b borderb-[#cbd5e1]">
            <Checkbox id={2} value={'pos'} onGetValue={onChecked}/>
            <div className="flex justify-between items-center mb-6">
              <div className="max-w-[590px] w-full flex justify-between items-center">
                <div className="py-[5px] pl-[47px] flex items-center justify-between">
                  <Image src={CancelButton} width={23} height={23} alt="cancel-btn" className="mr-[25px]" />
                  <h3 className="text-[20px] font-bold leading-[140%] mr-[25px]">YoShop POS License</h3>
                  <p className="text-[#FF588A] text-[12px] leading-[140%] border-b border-[#ff588a] pb-1">Edit License</p>
                </div>
                <p className="text-[20px] leading-[140%] font-bold">x1</p>
              </div>
              <div className="max-w-[510px] w-full text-[20px] leading-[180%]">
                <div className="flex items-center justify-between w-full mb-5">
                  <p>Period</p>
                  <p>monthly</p>
                </div>
             
                <div className="flex items-center justify-between w-full mb-5">
                  <p>Users:</p>
                  
                  <div className="flex items-center justify-between w-full max-w-[200px]">
                    <p>+1</p>
                    <p>₸ 1 000</p>
                  </div>
                </div>

                <div className="w-full">
                  <p className="mb-[10px]">Equipment:</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image src={centerm} width={50} height={50} alt="product" className="mr-[3px]" />
                      <h3 className="text-[20px] font-bold leading-[140%]">YoShop POS</h3>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-[200px]">
                      <p>x1</p>
                      <p>₸ 160 000</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <p className="text-right text-[20px] leading-[140%]">Subtotal: <span className="ml-[30px]">₸ 161 000</span></p>
          </li>
          <li className="py-5 border-b borderb-[#cbd5e1]">
            <Checkbox id={1} value={'pos'} onGetValue={onChecked}/>
            <div className="flex justify-between items-center mb-6">
              <div className="max-w-[590px] w-full flex justify-between items-center">
                <div className="py-[5px] pl-[47px] flex items-center justify-between">
                  <Image src={CancelButton} width={23} height={23} alt="cancel-btn" className="mr-[25px]" />
                  <Image src={centerm} width={50} height={50} alt="product" />
                  <h3 className="text-[20px] font-bold leading-[140%] mr-[25px] font-PoppinsRegular">Yoshop POS</h3>
                  <p className="text-[20px] leading-[140%] font-bold">x1</p>
                </div>
                <CalculatorProduct quantity={0} />
              </div>
              <div className="max-w-[510px] w-full flex items-center justify-between text-[20px] leading-[180%]">
                <p>Period</p>
                <p>monthly</p>
              </div>
            </div>
            <p className="text-right text-[20px] leading-[140%]">Subtotal: <span className="ml-[30px]">₸ 4 500</span></p>
          </li>
        </ul>

        <div className="max-w-[510px] w-full mx-auto mt-[250px]">
          <p className="font-bold leading-[140%] text-[44px] text-center text-[#E5E7EB] mb-[21px]">your cart is empty</p>
          <Button className={'cursor-pointer font-PoppinsBold max-w-[507px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[10px]'}
          >
            Go to main page
          </Button>
        </div>
      </div>
    </section>
  </>;
};

export default Cart;
