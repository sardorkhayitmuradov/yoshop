import Image from "next/image";
import { useReducer, useState } from "react";
import Link from "next/link";
import { Monthly, Annual, SemiAnnual } from "../components/LicenceTabs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/carts";
import Button from "../components/Button/Button";
import TabTitle from "../components/TabTitle/TabTitle";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import GuaranteeIcon from "../public/assets/images/badge-check.svg";
import SaveIcon from "../public/assets/images/save-as.svg";
import DesktopIcon from "../public/assets/images/desktop-computer.svg";
import shopIcon from "../public/assets/images/bascet.svg";
import UserGuide from '../public/assets/images/document-text.svg';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
    },
  };
}

const Licenses = () => {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const carts = useSelector((store) => store.carts);

  let priceTotal = carts.totalPrice;

  return (
    <section>
      <div className="site-container !pt-[120px] !pb-[150px]">
        <h2 className="text-[44px] leading-[140%] text-[#0F172A] font-PoppinsBold mb-[30px]">
          {t("common:tariffs")}
        </h2>

        <div className="flex items-center mb-[30px]">
          <p className="font-PoppinsBold text-[#F36784] text-[32px] leading-[140%] mr-[25px]">
            {t("common:choose_package")}
          </p>
          <Button
            className={
              "bg-[#7D66BB] border border-solid border-[#94A3B8] rounded-[10px] p-4 max-w-[361px] w-full font-PoppinsBold text-white text-[20px] leading-[140%]"
            }
          >
            {t("common:free_version")}
          </Button>
        </div>

        <div className="flex justify-center mb-[25px]">
          <TabTitle
            onClick={() => setActiveTab("1")}
            titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] ${activeTab == "1"
                ? "bg-[#FF588A] text-white"
                : "bg-[#D1D5DB] text-[#4B5563]"
              } rounded-t-[6px] text-center cursor-pointer`}
          >
            {t("common:monthly")}
          </TabTitle>
          <TabTitle
            onClick={() => setActiveTab("2")}
            titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] ${activeTab == "2"
                ? "bg-[#FF588A] text-white"
                : "bg-[#D1D5DB] text-[#4B5563]"
              } rounded-t-[6px] text-center cursor-pointer`}
          >
            {t("common:semi_annual")}
          </TabTitle>
          <TabTitle
            onClick={() => setActiveTab("3")}
            titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] ${activeTab == "3"
                ? "bg-[#FF588A] text-white"
                : "bg-[#D1D5DB] text-[#4B5563]"
              } rounded-t-[6px] text-center cursor-pointer`}
          >
            {t("common:annual")}
          </TabTitle>
        </div>
        <div className="mb-6">
          {(activeTab == "1" && <Monthly key={'1'} />) ||
            (activeTab == "2" && <SemiAnnual key={'2'} />) ||
            (activeTab == "3" && <Annual key={'3'} />)}
        </div>


        <Link href={'/guide'}>
          <div className="flex items-center mb-14">
            <Image src={UserGuide} width={30} height={30} alt="user guide" />
            <p className="ml-3 mb-0 text-[18px] leading-[180%] text-[#F36784]">User guide</p>
          </div>
        </Link>

        {/* <Link href={'/assets/files/manual.pdf'}>
          <div className="flex items-center mb-14">
            <Image src={UserGuide} width={30} height={30} alt="user guide" />
            <p className="ml-3 mb-0 text-[18px] leading-[180%] text-[#F36784]">User guide</p>
          </div>
        </Link> */}

        <h2 className="font-PoppinsBold text-[32px] text-[#111827] leading-[140%] mb-[40px]">
          {t("common:price_includes")}:
        </h2>

        <div className="flex items-center justify-between w-full mb-20">
          <EquipmentCard
            wrapperClassName={"max-w-[380px]"}
            image={GuaranteeIcon}
          >
            {t("common:warranty")}
          </EquipmentCard>
          <EquipmentCard wrapperClassName={"max-w-[380px]"} image={SaveIcon}>
            {t("common:setup")}
          </EquipmentCard>
          <EquipmentCard wrapperClassName={"max-w-[380px]"} image={DesktopIcon}>
            {t("common:support")}
          </EquipmentCard>
        </div>

        <div className="flex items-center justify-end">
          <p className="mr-[30px] font-PoppinsBold text-[32px] leading-[140%] text-[#0F172A]">
            {t("common:total")}:
            <span className="ml-[10px]">₸ {priceTotal}</span>
          </p>
          <Button
            className={
              "cursor-pointer font-PoppinsBold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[10px]"
            }
            onClick={() => dispatch(addToCart())}
          >
            <Image
              src={shopIcon}
              alt="shop-icon"
              className="pr-2"
              width={35}
              height={35}
            />
            {t("common:add_cart")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Licenses;
