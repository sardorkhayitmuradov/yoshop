import Input from "../components/Input/Input";
import ProductCard from "../components/ProductCard/ProductCard";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import Button from "../components/Button/Button";
import Image from "next/image";
import shopIcon from '../public/assets/images/shopIcon.png'
import GuaranteeIcon from '../public/assets/images/badge-check.svg'
import TruckIcon from '../public/assets/images/truck.svg'
import SaveIcon from '../public/assets/images/save-as.svg'
import DesktopIcon from '../public/assets/images/desktop-computer.svg'
import { products } from "../constants/products";
import { productSelectors } from "../constants/productSelectors";
import { useState } from "react";
import Link from "next/link";

const Equipment = () => {
  const [town , setTown] = useState('');
  const [number, setNumber] = useState();
  return (
    <main>
      <section className={`pt-[87px] pb-[150px] bg-[url("../public/assets/images/equpment.png")] bg-no-repeat bg-[right_1rem_top_3rem]`}>
        <div className={`max-w-[1292px] mx-auto w-full`}>
          <div className="max-w-[1204px] mx-auto w-full pt-[34px]">
              <h2 className="font-PoppinsBold text-[44px] leading-[140%] mb-[26px]">Equipments for your shop</h2>
              <p className="font-PoppinsRegular text-[18px] leading-[180%] mb-[26px]">We will assemble a set of our license and equipment for them.
              </p>
              <div className="max-w-[728px] w-full flex items-center justify-between mb-[75px]">
  
                  <Input inputType={'text'} wrapperClassName={'max-w-[232px] w-full'} inputClassName={'text-[#98989C] w-full py-[20px] pl-[30px] placeholder:text-[#98989C] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[20px] bg-[#F1F1F1]'} placeholder={'Enter a your Town'} value={town} onGetValue={setTown} />
                  
                  <Input inputType={'tel'} wrapperClassName={'max-w-[232px] w-full'} inputClassName={'text-[#98989C] w-full py-[20px] pl-[30px] placeholder:text-[#98989C] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[20px] bg-[#F1F1F1]'} placeholder={'Enter a phone number'} value={number} onGetValue={setNumber} />
              
                  <Button className={'max-w-[232px] py-[20px] w-full bg-[#F97316] rounded-[20px] font-bold text-base leading-[140%] poppins'}>
                  Order a call
                  </Button>
              </div>
              <h3 className="font-PoppinsBold text-[32px] leading-[140%] mb-[40px]">With YoShop you get</h3>
              <div className="flex items-center justify-between w-full">
                  <EquipmentCard image={GuaranteeIcon} >
                    Guarantee
                  </EquipmentCard>  
                  <EquipmentCard image={TruckIcon} >
                    Delivery
                  </EquipmentCard>  
                  <EquipmentCard image={SaveIcon} >
                    Setup 
                  </EquipmentCard>  
                  <EquipmentCard image={DesktopIcon} >
                    Technical Support
                  </EquipmentCard>  
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1204px] mx-auto pt-[26px] pb-[150px]">
          <select name="equipment" id="equipment" className="bg-transparent border-[1px] font-PoppinsRegular py-[10px] px-[32px] text-white mb-[70px]">
            {
              productSelectors.map(option=>{
                return (
                  <option key={option.value} value={option.value} className="bg-black border-none p-3 m-3 text-white">{option.name}</option>
                )
              })
            }
          </select>
          <div className="gap-[30px] flex justify-between flex-wrap mb-[50px]">
            {
              products.map(el => {
                return (
                  <Link key={el.id} href={'/product/' + el.id}>
                    <ProductCard image={el.image} title={el.title} price={el.price}>
                      <Button className={'cursor-pointer text-[#FC7941] font-[700] text-[20px] flex justify-center items-center w-full border-solid border-x border-y border-[#fff] mt-[20px] py-[16px] px-[22px] rounded-[10px]'} 
                        onClick={() => {
                          if (modalWindowBg.current.classList.contains("hidden")) {
                            modalWindowBg.current.classList.remove("hidden");
                            modalWindowBg.current.classList.add("block");
                            modalWindowInfo.current.classList.remove("hidden");
                            modalWindowInfo.current.classList.add("block");
                          }
                        }}>
                          <Image src={shopIcon} alt="shop-icon" className="pr-2" />
                          Add to cart{" "}
                      </Button>
                    </ProductCard>
                  </Link>
                )
              })
            }
          </div>
          <p className="text-center border-b-[1px] w-[246px] mx-auto pb-[3px] cursor-pointer">upload more</p>
        </div>
      </section>
    </main>
  )
}

export default Equipment