import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Input from "../../components/Input/Input";
import ProductCard from "../../components/ProductCard/ProductCard";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";
import Button from "../../components/Button/Button";
import shopIcon from '../../public/assets/images/bascet.svg'
import GuaranteeIcon from '../../public/assets/images/badge-check.svg'
import TruckIcon from '../../public/assets/images/truck.svg'
import SaveIcon from '../../public/assets/images/save-as.svg'
import DesktopIcon from '../../public/assets/images/desktop-computer.svg'
import {equipments} from '../../constants/equipments'
import { useTranslation } from "next-i18next";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['common', 'header', 'footer'])),
    }
  }
}

const Equipment = () => {
  const {t} = useTranslation()
  const [town , setTown] = useState('');
  const [number, setNumber] = useState("");
  const [currentTab, setCurrentTab] = useState('all')
  const [filteredProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  console.log(category)

  const filterCategories = () => {
    let categories = ['all']
    equipments.forEach((product) => {
      categories.push(product.category.trim().toLowerCase())
    });
    let uniqueCategories = [...new Set(categories)];
    setCategory(uniqueCategories)
  }

  const handleUploadMore = () => {
    setCurrentTab('all')
  }

  const handleTab = (e) => {
    let filteredProducts = []
    equipments.forEach(pr => {
      if(pr.category.trim().toLowerCase() == e.target.outerText.trim().toLowerCase()){
        filteredProducts.push(pr)
      }
    })
    setFilterProduct(filteredProducts)
    setCurrentTab(e.target.outerText.trim().toLowerCase())
  }

  useEffect(() => {
    return () => {
      filterCategories()
      // filterProductsByCategories(currentTab)
    };
  }, [currentTab]);
  

  return (
    <main>
      <section className={`pt-[150px] pb-[150px] bg-[url("../public/assets/images/equipment-hero.png")] bg-no-repeat bg-[right_0.5rem_bottom_4.5rem] bg-cover`}>
        <div className={`max-w-[1292px] mx-auto w-full`}>
          <div className="max-w-[1204px] mx-auto w-full pt-[34px]">
              <h2 className="font-PoppinsBold text-[44px] leading-[140%] mb-[26px]">{t("common:equipment_shop")}</h2>
              <p className="font-PoppinsRegular text-[18px] leading-[180%] mb-[26px]">{t("common:set")}
              </p>
              <div className="max-w-[728px] w-full flex items-center justify-between mb-[75px]">
  
                  <Input inputType={'text'} wrapperClassName={'max-w-[232px] w-full'} inputClassName={'text-[#9CA3AF] w-full py-[20px] pl-[30px] placeholder:text-[#9CA3AF] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1]'} placeholder={t("common:town")} value={town} onGetValue={(value)=> setTown(value)}  />
                  
                  <Input inputType={'tel'} wrapperClassName={'max-w-[232px] w-full'} inputClassName={'text-[#9CA3AF] w-full py-[20px] pl-[30px] placeholder:text-[#9CA3AF] placeholder:poppins placeholder:text-[16px] placeholder:leading-[25px] border-none outline-none rounded-[10px] bg-[#F1F1F1]'} placeholder={t("common:number")} value={number} onGetValue={(value) => setNumber(value)} />
              
                  <Button className={'max-w-[232px] py-[20px] text-white w-full bg-[#7D66BB] rounded-[10px] font-bold text-base leading-[140%] font-PromptBold'}>
                  {t("common:order_call")}
                  </Button>
              </div>
              <h3 className="font-PoppinsBold text-[32px] leading-[140%] mb-[40px]">{t("common:you_get")}</h3>
              <div className="flex items-center justify-between w-full">
                  <EquipmentCard wrapperClassName={'max-w-[280px]'} image={GuaranteeIcon} >
                  {t("common:guarantee")}
                  </EquipmentCard>  
                  <EquipmentCard wrapperClassName={'max-w-[280px]'} image={TruckIcon} >
                  {t("common:delivery")}
                  </EquipmentCard>  
                  <EquipmentCard wrapperClassName={'max-w-[280px]'} image={SaveIcon} >
                  {t("common:setup")}
                  </EquipmentCard>  
                  <EquipmentCard wrapperClassName={'max-w-[280px]'} image={DesktopIcon} >
                  {t("common:support")}
                  </EquipmentCard>  
              </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1204px] mx-auto pt-[26px] pb-[150px]">
          <div className="flex items-center justify-between flex-wrap mb-16">
            {
              category.map((ct,i) => {
                return(
                  <p key={i} onClick={handleTab} className={ct == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]`:`max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
                    {
                      ct
                    } 
                  </p>
                )
              })
            }
          </div>

          <div className="gap-[26px] grid grid-cols-4 mb-[50px]">
            {
              currentTab == 'all' ? equipments.map(el => {
                return (
                  <Link key={el.id} href={'/equipment/' + el.id+"#equipment"} scroll={true}>
                    <ProductCard image={el.image} title={el.title} price={el.price}>
                      <Button className={'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-[700] text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[10px] text-[#F9F9FB]'} >
                          <Image src={shopIcon} alt="shop-icon" className="pr-2" />
                          {t("common:add_cart")}
                      </Button>
                    </ProductCard>
                  </Link>
                )
              }) : filteredProduct.map(el => {
                return (
                  <Link key={el.id} href={'/equipment/' + el.id+"#equipment"}>
                    <ProductCard image={el.image} title={el.title} price={el.price}>
                      <Button className={'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-[700] text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[16px] px-[22px] rounded-[10px] text-[#F9F9FB]'} 
                        onClick={() => {
                          if (modalWindowBg.current.classList.contains("hidden")) {
                            modalWindowBg.current.classList.remove("hidden");
                            modalWindowBg.current.classList.add("block");
                            modalWindowInfo.current.classList.remove("hidden");
                            modalWindowInfo.current.classList.add("block");
                          }
                        }}>
                          <Image src={shopIcon} alt="shop-icon" className="pr-2" />
                          {t("common:add_cart")}
                      </Button>
                    </ProductCard>
                  </Link>
                )
              })
            }
          </div>
          {
            currentTab !== 'all' ? <p className="text-center text-[#FF588A] border-[#FF588A] border-b-[1px] w-[246px] mx-auto pb-[3px] cursor-pointer" onClick={handleUploadMore}>{t('common:load')}</p> : ""
          }
        </div>
      </section>
    </main>
  )
}

export default Equipment