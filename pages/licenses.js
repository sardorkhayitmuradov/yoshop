import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button/Button";
import TabTitle from "../components/TabTitle/TabTitle";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
// import Input from "../components/Input/Input";
// import Modal from "../components/Modal";
// import ModalCancelIcon from '../public/assets/images/modalCancel.svg';
import GuaranteeIcon from '../public/assets/images/badge-check.svg';
import SaveIcon from '../public/assets/images/save-as.svg';
import DesktopIcon from '../public/assets/images/desktop-computer.svg';
import shopIcon from "../public/assets/images/bascet.svg";
import { Monthly, Annual , SemiAnnual } from "../components/LicenceTabs";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['home', 'header', 'footer'])),
    }
  }
}

const Licenses = () => {
  const [activeTab, setActiveTab] = useState("1");
  const router = useRouter()
  // const {t} = useTranslation()
  const {pathname, asPath,route} = router
  console.log(router)
  return (
    <section>
      <div className="site-container !pt-[120px] !pb-[150px]">
        <h2 className="text-[44px] leading-[140%] text-[#0F172A] font-PoppinsBold mb-[30px]">Licenses and tariffs</h2>

        <div className="flex items-center mb-[30px]">
          <p className="font-PoppinsBold text-[#F36784] text-[32px] leading-[140%] mr-[25px]">Choose your license package or</p>
          <Button className={'bg-[#7D66BB] border border-solid border-[#94A3B8] rounded-[10px] p-4 max-w-[361px] w-full font-PoppinsBold text-white text-[20px] leading-[140%]'}>
            Get a free version
          </Button>
        </div>

        <div className="tabTitleWrapp flex justify-center mb-[25px]">
          <TabTitle onClick={() => setActiveTab("1")} titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] ${activeTab == "1" ? "bg-[#FF588A] text-white" : "bg-[#D1D5DB] text-[#4B5563]"} rounded-t-[6px] text-center cursor-pointer`}>
            Monthly
          </TabTitle>
          <TabTitle onClick={() => setActiveTab("2")} titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] ${activeTab == "2" ? "bg-[#FF588A] text-white" : "bg-[#D1D5DB] text-[#4B5563]"} rounded-t-[6px] text-center cursor-pointer`}>
            Semi-annual
          </TabTitle>
          <TabTitle onClick={() => setActiveTab("3")} titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] ${activeTab == "3" ? "bg-[#FF588A] text-white" : "bg-[#D1D5DB] text-[#4B5563]"} rounded-t-[6px] text-center cursor-pointer`}>
            Annual
          </TabTitle>
        </div>
        <div className="mb-24">
          {
            activeTab == "1" && <Monthly /> || activeTab == "2" && <SemiAnnual /> || activeTab == "3" && <Annual /> 
          }
        </div>

        <h2 className="font-PoppinsBold text-[32px] text-[#111827] leading-[140%] mb-[40px]">The license price includes:</h2>

        <div className="flex items-center justify-between w-full mb-20">
          <EquipmentCard wrapperClassName={'max-w-[380px]'} image={GuaranteeIcon} >
            Software warranty
          </EquipmentCard>
          <EquipmentCard wrapperClassName={'max-w-[380px]'} image={SaveIcon} >
            Setup
          </EquipmentCard>
          <EquipmentCard wrapperClassName={'max-w-[380px]'} image={DesktopIcon} >
            Remote technical support
          </EquipmentCard>
        </div>
        
          <div className="flex items-center justify-end">
            <p className="mr-[30px] font-PoppinsBold text-[32px] leading-[140%] text-[#0F172A]">
              TOTAL: ₸
              <span>
                0
              </span>
            </p>
            <Button className={'cursor-pointer font-PoppinsBold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[10px]'}
            >
              <Image src={shopIcon} alt="shop-icon" className="pr-2" width={35} height={35} />
              Add to cart
            </Button>
          </div>
      </div>
    </section>
  );
};

export default Licenses;