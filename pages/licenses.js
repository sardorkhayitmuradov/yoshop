import { useState } from "react";
import Image from "next/image";
import Button from "../components/Button/Button";
import TabTitle from "../components/TabTitle/TabTitle";
import Input from "../components/Input/Input";
import Modal from "../components/Modal";
import ModalCancelIcon from '../public/assets/images/modalCancel.svg';
// TABS
import { YoShopMobileLicense, YoShopPOSLicense, AndroidPOSLicense, PC, POSMonoblock } from "../components/LicenceTabs";

const Licenses = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <section>
      <Modal modalClassName={'pt-[50px] pb-[75px] px-[50px]'} modalWrapperClassName={'hidden'}>
        <div className="max-w-[760px] w-full ml-auto flex items-center justify-between mb-[75px]">
          <h2 className="font-PoppinsBold text-[40px] leading-[140%] corder-[#fff] text-[#0F172A]">
            Get 30-day free trial
          </h2>
          <Image src={ModalCancelIcon} width={50} height={50} alt="modal cancel icon" />
        </div>
        <div className="mx-auto max-w-[428px] w-full">
          <Input inputType={'text'} wrapperClassName={'w-full mb-[44px]'} inputClassName={'text-[#94A3B8] w-full py-[20px] pl-[16px] placeholder:text-[#94A3B8] placeholder:font-PoppinsRegular placeholder:text-[14px] placeholder:leading-[180%] outline-none border-solid border border-[#94A3B8] rounded-[8px] bg-[#fff]'} placeholder={'Enter a name'} />
          <Input inputType={'tel'} wrapperClassName={'w-full mb-[44px]'} inputClassName={'text-[#94A3B8] w-full py-[20px] pl-[16px] placeholder:text-[#94A3B8] placeholder:font-PoppinsRegular placeholder:text-[14px] placeholder:leading-[180%] outline-none border-solid border border-[#94A3B8] rounded-[8px] bg-[#fff]'} placeholder={'Enter a phone number'} />
          <Button className={'py-[16px] w-full bg-[#FC7941] rounded-[10px] font-bold text-xl leading-[140%] poppins'}>
            Request access
          </Button>
        </div>
      </Modal>
      <div className="site-container">
        <h2 className="text-[32px] text-[#fff] font-[700] mt-[100px] mb-[40px]">Yoshop Licenses</h2>

        <div className="tabTitleWrapp flex justify-center">
          <TabTitle onClick={()=> setActiveTab("1")} titleWrappClassName={`w-[210px] py-[13px] px-[12px] ${activeTab == "1" ? "bg-[#FC7941]": "bg-[#2c2c2c]"} rounded-t-[10px] text-center cursor-pointer`}>
            YoShop Mobile License
          </TabTitle>
          <TabTitle onClick={()=> setActiveTab("2")} titleWrappClassName={`w-[210px] py-[13px] px-[12px] ${activeTab == "2" ? "bg-[#FC7941]": "bg-[#2c2c2c]"} rounded-t-[10px] text-center cursor-pointer`}>
            YoShop POS License
          </TabTitle>
          <TabTitle onClick={()=> setActiveTab("3")} titleWrappClassName={`w-[210px] py-[13px] px-[12px] ${activeTab == "3" ? "bg-[#FC7941]": "bg-[#2c2c2c]"} rounded-t-[10px] text-center cursor-pointer`}>
            Android POS License
          </TabTitle>
          <TabTitle onClick={()=> setActiveTab("4")} titleWrappClassName={`w-[210px] py-[13px] px-[12px] ${activeTab == "4" ? "bg-[#FC7941]": "bg-[#2c2c2c]"} rounded-t-[10px] text-center cursor-pointer`}>
            POS Monoblock
          </TabTitle>
          <TabTitle onClick={()=> setActiveTab("5")} titleWrappClassName={`w-[210px] py-[13px] px-[12px] ${activeTab == "5" ? "bg-[#FC7941]": "bg-[#2c2c2c]"} rounded-t-[10px] text-center cursor-pointer`}>
            PC
          </TabTitle>
        </div>

        {
            activeTab == "2" && <YoShopPOSLicense /> || activeTab == "3" && <AndroidPOSLicense /> || activeTab == "4" && <POSMonoblock /> || activeTab == "1" && <YoShopMobileLicense /> || activeTab == "5" && <PC />
        }
      </div>
    </section>
  );
};

export default Licenses;