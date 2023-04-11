import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Monthly, Annual, SemiAnnual } from "../components/LicenceTabs";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getItems } from "../redux/features/carts";
import Button from "../components/Button/Button";
import TabTitle from "../components/TabTitle/TabTitle";
import EquipmentCard from "../components/EquipmentCard/EquipmentCard";
import GuaranteeIcon from "../public/assets/images/badge-check.svg";
import SaveIcon from "../public/assets/images/save-as.svg";
import DesktopIcon from "../public/assets/images/desktop-computer.svg";
import shopIcon from "../public/assets/images/bascet.svg";
import UserGuide from '../public/assets/images/document-text.svg';
import PriceFormatNumber from "../components/PriceFormatNumber";
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';

export async function getStaticProps({ locale }) {

  const { data, query, variables } = await client.queries.licenses({
    relativePath: `${locale}/licenses.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
      ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
    },
  };
}

const Licenses = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const carts = useSelector((store) => store.carts);

  let priceTotal = carts.totalPrice;

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart())
  }, [dispatch])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const datas = JSON.parse(localStorage.getItem("data"));
      if (datas) {
        dispatch(getItems(datas))
      }
    }
  }, [addToCartHandler, dispatch]);

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.licenses;

  return (
    <section>
      <div className="max-w-xl mx-auto pt-[120px] pb-[150px] max-[450px]:py-14 max-[450px]:px-6">
        <h2 className="text-[44px] leading-[140%] text-[#0F172A] font-bold mb-[30px] max-[450px]:text-[34px] max-[450px]:font-bold max-[450px]:mb-[20px]">
          {t("common:tariffs")}
        </h2>

        <div className="flex items-center mb-[30px] max-[450px]:flex-col max-[450px]:mb-[70px]">
          <p className="font-bold text-[#F36784] text-[32px] leading-[140%] mr-[25px] max-[450px]:mb-[6px]">
            {t("common:choose_package")}
          </p>
          <Button
            className={
              "bg-[#7D66BB] border border-solid border-[#94A3B8] rounded-[10px] p-4 max-w-[361px] w-full font-bold text-white text-[20px] leading-[140%] max-[450px]:py-[13px] max-[450px]:text-[16px]"
            }
          >
            {t("common:free_version")}
          </Button>
        </div>

        <div className="flex justify-center mb-[25px]">
          <TabTitle
            onClick={() => setActiveTab("1")}
            titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] max-[450px]:w-[33%] ${activeTab == "1"
              ? "bg-[#FF588A] text-white"
              : "bg-[#D1D5DB] text-[#4B5563]"
              } rounded-t-[6px] text-center cursor-pointer`}
          >
            {t("common:monthly")}
          </TabTitle>
          <TabTitle
            onClick={() => setActiveTab("2")}
            titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] max-[450px]:w-[33%] ${activeTab == "2"
              ? "bg-[#FF588A] text-white"
              : "bg-[#D1D5DB] text-[#4B5563]"
              } rounded-t-[6px] text-center cursor-pointer`}
          >
            {t("common:semi_annual")}
          </TabTitle>
          <TabTitle
            onClick={() => setActiveTab("3")}
            titleWrappClassName={`max-w-[400px] w-full py-[13px] px-[12px] max-[450px]:w-[33%] ${activeTab == "3"
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
          <div className="flex items-center mb-14 max-w-[300px] w-full max-[450px]:mb-5">
            <Image src={UserGuide} width={30} height={30} alt="user guide" />
            <p className="ml-3 mb-0 text-[18px] leading-[180%] text-[#F36784]">{t("common:guide")}</p>
          </div>
        </Link>

        {/* <div className="flex items-center justify-end max-[450px]:justify-between max-[450px]:mb-[50px]">
          <p className="mr-[30px] font-bold text-[32px] leading-[140%] text-[#0F172A] max-[450px]:text-[16px]">
            {t("common:total")}:
            <span className="ml-[10px]">₸ {priceTotal}</span>
          </p>
          <Button
            className={
              `cursor-pointer font-bold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center ${priceTotal > 0 ? "bg-[#7D66BB]" : "bg-[#EFF1FE] text-[#D1D5DB]"} border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[4px] max-[450px]:py-[10px] max-[450px]:max-w-[146px] max-[450px]:text-[14px]`
            }
            onClick={() => dispatch(addToCart())}
          >
            <Image
              src={shopIcon}
              alt="shop-icon"
              className="pr-2 max-[450px]:hidden"
              width={35}
              height={35}
            />
            {t("common:add_cart")}
          </Button>
        </div> */}

        <h2 className="font-bold text-[32px] text-[#111827] leading-[140%] mb-[40px] max-[450px]:text-[26px] max-[450px]:mb-5">
          {t("common:price_includes")}:
        </h2>

        <div className="flex items-center justify-between w-full mb-20 max-[450px]:flex-col max-[450px]:gap-2">
          <EquipmentCard
            wrapperClassName={"max-w-[380px] animate-equipment-card"}
            image={GuaranteeIcon} titleClass={"max-w-[242px] w-full"}
          >
            {t("common:warranty")}
          </EquipmentCard>
          <EquipmentCard wrapperClassName={"max-w-[380px] animate-equipment-card-even"} image={SaveIcon} titleClass={"max-w-[242px] w-full"}>
            {t("common:setup")}
          </EquipmentCard>
          <EquipmentCard wrapperClassName={"max-w-[380px] animate-equipment-card"} image={DesktopIcon} titleClass={"max-w-[242px] w-full"}>
            {t("common:support")}
          </EquipmentCard>
        </div>

        <div className="flex items-center justify-end max-[450px]:hidden">
          <p className="mr-[30px] font-bold text-[32px] leading-[140%] text-[#0F172A]">
            {t("common:total")}:
            <span className="ml-[10px]">₸ <PriceFormatNumber value={priceTotal} /></span>
          </p>
          <Button
            className={
              "cursor-pointer font-bold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[13px] px-[22px] rounded-[10px]"
            }
            onClick={addToCartHandler}
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
