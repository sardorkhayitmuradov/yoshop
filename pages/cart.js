import Link from "next/link";
import Button from "../components/Button/Button";
// import cartElipsImg from "../public/assets/images/Ellipse-2Big.png"; 
import centerm from "../public/assets/images/centrem.png";
import Image from "next/image";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CancelButton from '../public/assets/images/cart-cancel.svg';
import { CalculatorProduct } from "../components/CalculatorProduct";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input/Input";
import { useSelector } from "react-redux";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'header', 'footer'])),
    }
  };
}
const Cart = () => {

  let cart = useSelector((store) => store.carts.cart);  

  const onChecked = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
  };

  return <>
    <section className="min-h-[90vh] pt-[170px] mb-[250px] text-[#111827]">
      <div className="container max-w-7xl mx-auto">
        <h1 className="font-bold text-[32px] leading-[140%] mb-7">Cart</h1>
        {
          cart?.quantity > 0 ? <> <div className="border-y border-[#CBD5E1] flex items-center py-4 justify-between mb-2">
          <div className="flex items-center max-w-[590px] w-full justify-between pl-[95px]">
            <p>Products</p>
            <p>Qty</p>
          </div>
          <div className="max-w-[500px] w-full">
            <p>Order Summary</p>
          </div>
        </div>
        <p className="text-[#FF588A] mb-5 leading-[180%] cursor-pointer">Select All</p>

        <ul className="mb-16">
          {
            cart.licenses.length > 0 ?
              (
                cart.licenses.map(license => {
                  return (
                    <li className="py-5 border-b borderb-[#cbd5e1]" key={license.id}>
                      <Checkbox id={2} value={'pos'} onGetValue={onChecked} checkboxClass={"checkbox"} />
                      <div className="flex justify-between items-center mb-6">
                        <div className="max-w-[600px] w-full flex justify-between items-center">
                          <div className="py-[5px] pl-[47px] flex items-center justify-between">
                            <Image src={CancelButton} width={23} height={23} alt="cancel-btn" className="mr-[25px]" />
                            <h3 className="text-[20px] font-bold leading-[140%] mr-[25px]">{license.name || license.title}</h3>
                            <Link href={'/licenses'} className="text-[#FF588A] text-[12px] leading-[140%] border-b border-[#ff588a] pb-1">Edit License</Link>
                          </div>
                          <p className="text-[20px] leading-[140%] font-bold">x{license.qty}</p>
                        </div>
                        <div className="max-w-[500px] w-full text-[20px] leading-[180%]">
                          <div className="flex items-center justify-between w-full mb-5">
                            <p>Period</p>
                            <p className="font-bold">{license.period}</p>
                          </div>

                          <div className="flex items-center justify-between w-full mb-5">
                            <p>Users:</p>

                            <div className="flex items-center justify-between w-full max-w-[200px]">
                              <p>+{license.cashier.qty >= license.qty * 2 ? (license.cashier.qty - (license.qty * 2)) : license.cashier.qty}</p>
                              <p>??? {license.cashier.price}</p>
                            </div>
                          </div>
                          <div className="w-full">
                            <p className="mb-[10px]">Equipment:</p>
                            {
                              license.products.length > 0 ?
                                (
                                  license.products.map(product => {
                                    return (

                                      <div className="flex items-center justify-between mb-3" key={product.id}>
                                        <div className="flex items-center">
                                          <Image src={product.image} width={50} height={50} alt="product" className="mr-[3px]" />
                                          <h3 className="text-[20px] leading-[140%]">{product.name || product.title}</h3>
                                        </div>
                                        <div className="flex items-center justify-between w-full max-w-[200px]">
                                          <p>x{product.qty}</p>
                                          <p>??? {product.price}</p>
                                        </div>
                                      </div>

                                    );
                                  })
                                ) : ""
                            }
                          </div>

                        </div>
                      </div>
                      <p className="text-right text-[20px] leading-[140%] font-bold">Subtotal: <span className="ml-[30px]">??? {license.subTotal}</span></p>
                    </li>
                  );
                })
              ) : ""
          }
          {
            cart.products.length > 0 ?
              (
                cart.products.map(product => {
                  return (
                    <li className="py-5 border-b borderb-[#cbd5e1]" key={product.id}>
                      <Checkbox id={1} value={'pos'} onGetValue={onChecked} checkboxClass={"checkbox"} />
                      <div className="flex justify-between items-center mb-6">
                        <div className="max-w-[800px] w-full flex justify-between items-center">
                          <div className="py-[5px] pl-[47px] flex items-center justify-between">
                            <Image src={CancelButton} width={23} height={23} alt="cancel-btn" className="mr-[25px]" />
                            <Image src={product.image} width={50} height={50} alt="product" />
                            <h3 className="text-[20px] font-bold leading-[140%] mr-[25px] font-PoppinsRegular">{product.name || product.title}</h3>
                            <p className="text-[20px] leading-[140%] font-bold">x {product.qty}</p>
                          </div>
                          <CalculatorProduct quantity={product.qty || 0} />
                        </div>

                        <p className="text-right text-[20px] leading-[140%] font-bold">Subtotal: <span className="ml-[30px]">??? {product.price}</span></p>
                      </div>
                    </li>
                  );
                })
              ) : ""
          }
        </ul>

        <div className="w-full flex items-center text-[20px] leading-[180%] justify-end font-bold">
          <div className="w-full max-w-[500px]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                <p>Discount</p>
                <p className="text-[12px] font-PoppinsRegular text-[#FF588A] ml-3">(Your promo code applied)</p>
              </div>
              <p className="text-[#ff588a]">???  1000</p>
            </div>

            <p className="mb-3">Please enter your Promo Code</p>

            <div className="flex items-center justify-between mb-10">
              <Input inputType={'text'} wrapperClassName={'max-w-[307px] w-full'} inputClassName={'text-[#9CA3AF] w-full py-[11px] pl-[14px] placeholder:text-[#9CA3AF] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] outline-none rounded-[6px] border-[#94A3B8] border border-solid'} placeholder={"TALGATXOXO"} value={"TALGATXOXO"} onGetValue={(value) => setTown(value)} />

              <Button className={'cursor-pointer font-PoppinsBold max-w-[185px] w-full text-white text-[20px] flex justify-center items-center bg-[#FF588A] py-[12px] px-[22px] rounded-[10px]'}
              >
                Apply
              </Button>
            </div>

            <div className="flex items-center justify-between mb-5 text-[32px]">
              <p>TOTAL</p>
              <p>??? 193 000</p>
            </div>

            <Link href={"/checkout"} className={'cursor-pointer font-PoppinsBold w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] py-[12px] px-[22px] rounded-[10px]'}
            >
              Checkout
            </Link>
          </div>
        </div></> : <div className="max-w-[510px] w-full mx-auto mt-[250px]">
          <p className="font-bold leading-[140%] text-[44px] text-center text-[#E5E7EB] mb-[21px]">your cart is empty</p>
          <Link href={'/'}>
            <Button className={'cursor-pointer font-PoppinsBold max-w-[507px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[10px]'}>
              Go to main page
            </Button>
          </Link>
        </div>
        }
      </div>
    </section>
  </>;
};

export default Cart;
