import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard/ProductCard";
import EquipmentCard from "../../components/EquipmentCard/EquipmentCard";
import Button from "../../components/Button/Button";
import shopIcon from '../../public/assets/images/bascet.svg';
import GuaranteeIcon from '../../public/assets/images/badge-check.svg';
import LearnIcon from '../../public/assets/images/learn.svg';
import SaveIcon from '../../public/assets/images/save-as.svg';
import DesktopIcon from '../../public/assets/images/desktop-computer.svg';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from "react-redux";
import { addProducts, addToCart } from "../../redux/features/carts";
import { ModalContext } from "../../context/modal";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    }
  };
}

const Equipment = () => {
  const router = useRouter();
  const { t } = useTranslation();
  // const [town, setTown] = useState('');
  // const [number, setNumber] = useState("");
  const [currentTab, setCurrentTab] = useState('all');
  const [filteredProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const productsCounter = useSelector((store) => store.productCounter.products);
  const dispatch = useDispatch();
  const { visible, setVisible } = useContext(ModalContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterCategories = () => {
    let categories = ['all'];
    productsCounter.forEach((product) => {
      categories.push(product.category.trim().toLowerCase());
    });
    let uniqueCategories = [...new Set(categories)];
    setCategory(uniqueCategories);
  };

  const handleUploadMore = () => {
    setCurrentTab('all');
  };

  const handleTab = (e) => {
    let filteredProducts = [];
    productsCounter.forEach(pr => {
      if (pr.category.trim().toLowerCase() == e.trim().toLowerCase()) {
        filteredProducts.push(pr);
      }
    });
    setFilterProduct(filteredProducts);
    setCurrentTab(e.trim().toLowerCase());
  };

  useEffect(() => {
    return () => {
      filterCategories();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <main>
      <section className={`relative pt-[158px] pb-[150px] bg-[url("../public/assets/images/equipment-hero.png")] bg-[length:453px_176px] bg-no-repeat bg-[right_7rem_top_12.7rem] max-[450px]:bg-none max-[450px]:pt-[50px] max-[450px]:pb-5`}>
        <div className="equipment-bg-red w-[600px] h-[485px] max-[450px]:hidden"></div>
        <div className="equipment-bg-blue w-[207px] h-[223px] max-[450px]:hidden"></div>
        <div className={`max-w-xl mx-auto w-full max-[450px]:px-6`}>
          <div className="max-w-[1204px] mx-auto w-full pt-[34px] max-[450px]:py-0">
            <h2 className="font-bold text-[32px] leading-[140%] mb-[26px] max-[450px]:mb-2">{t("common:equipment_shop")}</h2>
            <p className="text-[18px] leading-[180%] mb-[26px] max-[450px]:mb-8">{t("common:set")}
            </p>
            {/* <div className="max-w-[728px] w-full flex items-center justify-between mb-[75px] max-[450px]:flex-col max-[450px]:items-stretch max-[450px]:mb-[40px]">

              <Input inputType={'text'} wrapperClassName={'max-w-[232px] w-full max-[450px]:max-w-[100%] max-[450px]:mb-5'} inputClassName={'text-[#9CA3AF] w-full py-[19px] max-[450px]:px-3 pl-[30px] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:leading-[24px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:py-[13px]'} placeholder={t("common:town")} value={town} onChange={(value) => setTown(value)} />

              <Input inputType={'tel'} wrapperClassName={'max-w-[232px] w-full max-[450px]:max-w-[100%] max-[450px]:mb-5'} inputClassName={'text-[#9CA3AF] w-full py-[19px] max-[450px]:px-3 pl-[30px] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:leading-[24px] border-none outline-none rounded-[10px] bg-[#F1F1F1] max-[450px]:py-[13px]'} placeholder={t("common:number")} value={number} onChange={(value) => setNumber(value)} />

              <Button className={'max-w-[232px] py-[19px] max-[450px]:px-3 text-white w-full bg-[#7D66BB] rounded-[10px] font-bold text-base leading-[140%] max-[450px]:max-w-[100%] max-[450px]:py-[13px]'}>
                {t("common:order_call")}
              </Button>
            </div> */}
            <h3 className="font-bold text-[32px] leading-[140%] mb-[40px] max-[450px]:text-[26px] max-[450px]:mb-5">{t("common:you_get")}</h3>
            <div className="flex items-center justify-between w-full max-[450px]:flex-col max-[450px]:items-stretch max-[450px]:gap-[10px]">
              <EquipmentCard wrapperClassName={'max-w-[280px]'} image={GuaranteeIcon} titleClass={"max-w-[106px] w-full]"} >
                {t("common:guarantee")}
              </EquipmentCard>
              <EquipmentCard wrapperClassName={'max-w-[280px]'} image={LearnIcon} titleClass={"max-w-[106px] w-full]"} >
                {t("common:training")}
              </EquipmentCard>
              <EquipmentCard wrapperClassName={'max-w-[280px]'} image={SaveIcon} titleClass={"max-w-[106px] w-full]"} >
                {t("common:setup")}
              </EquipmentCard>
              <EquipmentCard wrapperClassName={'max-w-[280px]'} image={DesktopIcon} titleClass={"max-w-[106px] w-full]"} >
                {t("common:tech_support")}
              </EquipmentCard>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-xl mx-auto pt-[26px] pb-[150px] max-[450px]:px-6 max-[450px]:pt-5 w-full">
          <div className="overflow-hidden">
          <div className="flex max-[450px]:gap-4 overflow-hidden mb-16 max-[450px]:overflow-x-auto w-full  justify-between max-[450px]:scroll-smooth max-[450px]:mb-7">
            <div onClick={() => handleTab("All")} className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'all'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB] "}`}>
              {router.locale == 'ru' ? "Все":"All"}
            </div>
            <div onClick={() => handleTab("POS")} className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'pos'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB] "}`}>
              POS
            </div>
            <div onClick={() => handleTab("Scales")} className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'scales'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB] "}`}>
              {router.locale == 'ru' ? "Весы":"Scales"}
            </div>
            <div onClick={() => handleTab("Cash drawer")} className={`max-[450px]:max-w-[139px] px-3 flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'cash drawer'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB]"}`}>
          
              {router.locale == 'ru' ? "Денежный ящик":"Cash drawer"}
             
            </div>
            <div onClick={() => handleTab("Scanner")} className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'scanner'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB] "}`}>
              {router.locale == 'ru' ? "Сканер":"Scanner"}
            </div>
            <div onClick={() => handleTab("Accessories")} className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'accessories'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB] "}`}>
              {router.locale == 'ru' ? "Аксессуары":"Accessories"}
            </div>
            <div onClick={() => handleTab("Cables")} className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'cables'?  "bg-[#FF588A] text-[#FFF]": "border capitalize leading-[180%] border-[#D1D5DB] "}`}>
              {router.locale == 'ru' ? "Кабели":"Cables"}
            </div>
          </div>
          </div>

          <div className="gap-[26px] grid grid-cols-4 mb-[50px] max-[450px]:justify-between max-[450px]:grid-cols-2">
            {
              currentTab == 'all' ? productsCounter.map(product => {
                return (
                  <div key={product.id} className="flex items-center flex-col justify-between">
                    <Link href={'/equipment/' + product.id + "#equipment"} scroll={true}>
                      <ProductCard image={product.image} title={router.locale == 'ru' ? product.titleru || product.title : product.title} price={product.price}>
                      </ProductCard>
                    </Link>
                    <Button className={'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-bold text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[4px] text-[#F9F9FB] max-[450px]:py-[2px] max-[450px]:text-[14px] max-[450px]:leading-[140%]'} onClick={() => {
                      dispatch(addProducts(product)),
                        dispatch(addToCart()),
                        setVisible(!visible);
                    }}>
                      <Image src={shopIcon} alt="shop-icon" className="pr-2 max-[450px]:hidden" />
                      {t("common:add_cart")}
                    </Button>
                  </div>
                );
              }) : filteredProduct.map(product => {
                return (
                  <div key={product.id} className="flex items-center flex-col justify-between">
                    <Link href={'/equipment/' + product.id + "#equipment"} scroll={true}>
                      <ProductCard image={product.image} title={router.locale == 'ru' ? product.titleru || product.title : product.title} price={product.price}>
                      </ProductCard>
                    </Link>
                    <Button className={'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-bold text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[4px] text-[#F9F9FB] max-[450px]:px-[8px] max-[450px]:py-[2px] max-[450px]:text-[14px] max-[450px]:leading-[140%]'} onClick={() => {
                      dispatch(addProducts(product)),
                        dispatch(addToCart()),
                        setVisible(!visible);
                    }}>
                      <Image src={shopIcon} alt="shop-icon" className="pr-2 max-[450px]:hidden" />
                      {t("common:add_cart")}
                    </Button>
                  </div>
                );
              })
            }
          </div>
          {
            currentTab !== 'all' ? <p className="text-center text-[#FF588A] border-[#FF588A] border-b-[1px] w-[246px] mx-auto pb-[3px] cursor-pointer" onClick={handleUploadMore}>{t('common:load')}</p> : ""
          }
        </div>
      </section>
    </main>
  );
};

export default Equipment;


{/* {
              category.map((ct, i) => {
                return (
                  <p key={i} onClick={handleTab} className={ct == currentTab ? ` w-fit flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
                    {
                      ct
                    }
                  </p>
                );
              })
            } */}