import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Input from "../../components/Input/Input";
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
  const { t } = useTranslation();
  const [town, setTown] = useState('');
  const [number, setNumber] = useState("");
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
    console.log(e.target.outerText);
    let filteredProducts = [];
    productsCounter.forEach(pr => {
      if (pr.category.trim().toLowerCase() == e.target.innerHTML.trim().toLowerCase()) {
        filteredProducts.push(pr);
      }
    });
    setFilterProduct(filteredProducts);
    setCurrentTab(e.target.outerText.trim().toLowerCase());
  };

  useEffect(() => {
    return () => {
      filterCategories();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <main>
      <section className={`relative pt-[158px] pb-[150px] bg-[url("../public/assets/images/equipment-hero.png")] bg-[length:453px_176px] bg-no-repeat bg-[right_7rem_top_12.7rem]`}>
        <div className="equipment-bg-red w-[600px] h-[485px]"></div>
        <div className="equipment-bg-blue w-[207px] h-[223px]"></div>
        <div className={`max-w-[1292px] mx-auto w-full`}>
          <div className="max-w-[1204px] mx-auto w-full pt-[34px]">
            <h2 className="font-bold text-[32px] leading-[140%] mb-[26px]">{t("common:equipment_shop")}</h2>
            <p className="text-[18px] leading-[180%] mb-[26px]">{t("common:set")}
            </p>
            <div className="max-w-[728px] w-full flex items-center justify-between mb-[75px]">

              <Input inputType={'text'} wrapperClassName={'max-w-[232px] w-full'} inputClassName={'text-[#9CA3AF] w-full py-[13px] pl-[30px] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:leading-[24px] border-none outline-none rounded-[10px] bg-[#F1F1F1]'} placeholder={t("common:town")} value={town} onChange={(value) => setTown(value)} />

              <Input inputType={'tel'} wrapperClassName={'max-w-[232px] w-full'} inputClassName={'text-[#9CA3AF] w-full py-[13px] pl-[30px] placeholder:text-[#9CA3AF] placeholder:text-[16px] placeholder:leading-[24px] border-none outline-none rounded-[10px] bg-[#F1F1F1]'} placeholder={t("common:number")} value={number} onChange={(value) => setNumber(value)} />

              <Button className={'max-w-[232px] py-[13px] text-white w-full bg-[#7D66BB] rounded-[10px] font-bold text-base leading-[140%]'}>
                {t("common:order_call")}
              </Button>
            </div>
            <h3 className="font-bold text-[32px] leading-[140%] mb-[40px]">{t("common:you_get")}</h3>
            <div className="flex items-center justify-between w-full">
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
        <div className="max-w-[1204px] mx-auto pt-[26px] pb-[150px]">
          <div className="flex items-center justify-between flex-wrap mb-16">
            {/* {
              category.map((ct, i) => {
                return (
                  <p key={i} onClick={handleTab} className={ct == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
                    {
                      ct
                    }
                  </p>
                );
              })
            } */}
            <p onClick={(e) => handleTab(e)} className={'all' == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
              All
            </p>
            <p onClick={(e) => handleTab(e)} className={'pos' == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
              POS
            </p>
            <p onClick={(e) => handleTab(e)} className={'scales' == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
              Scales
            </p>
            <p onClick={(e) => handleTab(e)} className={'cashdrawer' == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
              Cash drawer
            </p>
            <p onClick={(e) => handleTab(e)} className={'scanner' == currentTab ? `max-w-[139px] w-full flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
              Scanner
            </p>
          </div>

          <div className="gap-[26px] grid grid-cols-4 mb-[50px]">
            {
              currentTab == 'all' ? productsCounter.map(product => {
                return (
                  <div key={product.id} className="flex items-center flex-col">
                    <Link href={'/equipment/' + product.id + "#equipment"} scroll={true}>
                      <ProductCard image={product.image} title={product.title} price={product.price}>
                      </ProductCard>
                    </Link>
                    <Button className={'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-bold text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[10px] text-[#F9F9FB]'} onClick={() => {
                      dispatch(addProducts(product)),
                        dispatch(addToCart()),
                        setVisible(!visible);
                    }}>
                      <Image src={shopIcon} alt="shop-icon" className="pr-2" />
                      {t("common:add_cart")}
                    </Button>
                  </div>
                );
              }) : filteredProduct.map(product => {
                return (
                  <div key={product.id} className="flex items-center flex-col">
                    <Link href={'/equipment/' + product.id + "#equipment"} scroll={true}>
                      <ProductCard image={product.image} title={product.title} price={product.price}>
                      </ProductCard>
                    </Link>
                    <Button className={'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-bold text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[10px] text-[#F9F9FB]'} onClick={() => {
                      dispatch(addProducts(product)),
                        dispatch(addToCart()),
                        setVisible(!visible);
                    }}>
                      <Image src={shopIcon} alt="shop-icon" className="pr-2" />
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