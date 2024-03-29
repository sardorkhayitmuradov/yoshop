import Image from 'next/image';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard/ProductCard';
import EquipmentCard from '../../components/EquipmentCard/EquipmentCard';
import Button from '../../components/Button/Button';
import shopIcon from '../../public/assets/images/bascet.svg';
// import GuaranteeIcon from '../../public/assets/images/badge-check.svg';
// import LearnIcon from '../../public/assets/images/learn.svg';
// import SaveIcon from '../../public/assets/images/save-as.svg';
// import DesktopIcon from '../../public/assets/images/desktop-computer.svg';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSelector, useDispatch } from 'react-redux';
import { addProducts, addToCart, getItems } from '../../redux/features/carts';
import { ModalContext } from '../../context/modal';
import { useTina } from "tinacms/dist/react";
import client from '../../tina/__generated__/client';

export async function getServerSideProps({ locale }) {

  const { data, query, variables } = await client.queries.equipment({
    relativePath: `${locale}/equipment.json`,
  });

  return {
    props: {
      data,
      query,
      variables,
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}

const Equipment = (props) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState('all');
  const [filteredProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const productsCounter = useSelector((store) => store.productCounter.products);
  const dispatch = useDispatch();
  const { visible, setVisible } = useContext(ModalContext);
  // const [town, setTown] = useState('');
  // const [number, setNumber] = useState("");

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
    productsCounter.forEach((pr) => {
      if (pr.category.trim().toLowerCase() == e.trim().toLowerCase()) {
        filteredProducts.push(pr);
      }
    });
    setFilterProduct(filteredProducts);
    setCurrentTab(e.trim().toLowerCase());
  };

  const handleAddToCart = (product) => {
    if (typeof window !== 'undefined') {
      if (isMobile || window.innerWidth <= 450) {
        dispatch(addProducts(product)), dispatch(addToCart())
      } else {
        dispatch(addProducts(product)), dispatch(addToCart()), setVisible(!visible);
      }
    }
  };

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  let pageData = data.equipment;
  // console.log(pageData)

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        const datas = JSON.parse(localStorage.getItem("data"));
        if (datas) {
          dispatch(getItems(datas))
        }
      }
      filterCategories();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <section
        className={`relative pt-[158px] pb-[150px] bg-[url("../public/assets/images/equipment-hero.png")] bg-[length:453px_176px] bg-no-repeat bg-[right_7rem_top_12.7rem] max-[450px]:bg-none max-[450px]:pt-[50px] max-[450px]:pb-5`}
      >
        <div className='equipment-bg-red w-[600px] h-[485px] max-[450px]:hidden'></div>
        <div className='equipment-bg-blue w-[207px] h-[223px] max-[450px]:hidden'></div>
        <div className={`max-w-xl mx-auto w-full`}>
          <div className='max-w-[1204px] mx-auto w-full pt-[34px] max-[450px]:py-0'>
            <h2 className='max-[450px]:px-6 font-bold text-[32px] leading-[140%] mb-[26px] max-[450px]:mb-2'>
              {pageData.heroSection.title}
            </h2>
            <p className='max-[450px]:px-6 text-[18px] leading-[180%] mb-[26px] max-[450px]:mb-8'>
              {pageData.heroSection.text}
            </p>
            <h3 className='max-[450px]:px-6 font-bold text-[32px] leading-[140%] mb-[40px] max-[450px]:text-[26px] max-[450px]:mb-5'>
              {pageData.heroSection.offers.title}
            </h3>
            <div className='flex items-center justify-between w-full max-[450px]:flex-col max-[450px]:items-stretch max-[450px]:gap-[10px] max-[450px]:pl-6'>
              {
                pageData.heroSection.offers.items.map((el, index) => {
                  return (
                    <EquipmentCard
                      key={index}
                      wrapperClassName={`max-w-[280px] max-[450px]:max-w-[100%] ${index % 2 === 0 ? "animate-equipment-card" :"animate-equipment-card-even"}`}
                      image={el.image}
                      titleClass={'max-w-[106px] w-full]'}
                    >
                      {el.title}
                    </EquipmentCard>

                  )
                })
              }

              {/* animate-equipment-card-even */}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-xl mx-auto pt-[26px] pb-[150px] max-[450px]:px-6 max-[450px]:pt-5 w-full'>
          <div className='overflow-hidden'>
            <div className='flex max-[450px]:gap-4 overflow-hidden mb-16 max-[450px]:overflow-x-auto w-full  justify-between max-[450px]:scroll-smooth max-[450px]:mb-7'>
              <div
                onClick={() => handleTab('All')}
                className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'all'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB] '
                  }`}
              >
                {router.locale == 'ru' ? 'Все' : 'All'}
              </div>
              <div
                onClick={() => handleTab('POS')}
                className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'pos'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB] '
                  }`}
              >
                POS
              </div>
              <div
                onClick={() => handleTab('Scales')}
                className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'scales'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB] '
                  }`}
              >
                {router.locale == 'ru' ? 'Весы' : 'Scales'}
              </div>
              <div
                onClick={() => handleTab('Cash drawer')}
                className={`max-[450px]:max-w-[139px] px-3 flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'cash drawer'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB]'
                  }`}
              >
                {router.locale == 'ru' ? 'Денежный ящик' : 'Cash drawer'}
              </div>
              <div
                onClick={() => handleTab('Scanner')}
                className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'scanner'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB] '
                  }`}
              >
                {router.locale == 'ru' ? 'Сканер' : 'Scanner'}
              </div>
              <div
                onClick={() => handleTab('Accessories')}
                className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'accessories'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB] '
                  }`}
              >
                {router.locale == 'ru' ? 'Аксессуары' : 'Accessories'}
              </div>
              <div
                onClick={() => handleTab('Cables')}
                className={`max-[450px]:max-w-[139px] max-w-[139px] w-full flex items-center justify-center max-[450px]:w-full h-auto max-[450px]:leading-[120%] max-[450px]:text-center max-[450px]:px-10 rounded-md text-[18px] leading-[140%] font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] text-[#111827] cursor-pointer ${currentTab === 'cables'
                  ? 'bg-[#FF588A] text-[#FFF]'
                  : 'border capitalize leading-[180%] border-[#D1D5DB] '
                  }`}
              >
                {router.locale == 'ru' ? 'Кабели' : 'Cables'}
              </div>
            </div>
          </div>

          <div className='gap-[26px] grid grid-cols-4 mb-[50px] max-[450px]:justify-between max-[450px]:grid-cols-2'>
            {currentTab == 'all'
              ? productsCounter.map((product) => {
                return (
                  <div
                    key={product.id}
                    className='flex items-center flex-col justify-between'
                  >
                    <Link
                      href={'/equipment/' + product.id + '#equipment'}
                      scroll={true}
                    >
                      <ProductCard
                        image={product.image}
                        title={
                          router.locale == 'ru'
                            ? product.titleru || product.title
                            : product.title
                        }
                        price={product.price}
                      ></ProductCard>
                    </Link>
                    <Button
                      className={
                        'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-bold text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[4px] text-[#F9F9FB] max-[450px]:py-[2px] max-[450px]:text-[14px] max-[450px]:leading-[140%]'
                      }
                      onClick={() => handleAddToCart(product)}
                    >
                      <Image
                        src={shopIcon}
                        alt='shop-icon'
                        className='pr-2 max-[450px]:hidden'
                      />
                      {pageData.addCart}
                    </Button>
                  </div>
                );
              })
              : filteredProduct.map((product) => {
                return (
                  <div
                    key={product.id}
                    className='flex items-center flex-col justify-between'
                  >
                    <Link
                      href={'/equipment/' + product.id + '#equipment'}
                      scroll={true}
                    >
                      <ProductCard
                        image={product.image}
                        title={
                          router.locale == 'ru'
                            ? product.titleru || product.title
                            : product.title
                        }
                        price={product.price}
                      ></ProductCard>
                    </Link>
                    <Button
                      className={
                        'cursor-pointer border-[#94A3B8] bg-[#7D66BB] font-bold text-[20px] flex justify-center items-center w-full border-solid border-x border-y mt-[20px] py-[12px] px-[22px] rounded-[4px] text-[#F9F9FB] max-[450px]:px-[8px] max-[450px]:py-[2px] max-[450px]:text-[14px] max-[450px]:leading-[140%]'
                      }
                      onClick={() => handleAddToCart(product)}
                    >
                      <Image
                        src={shopIcon}
                        alt='shop-icon'
                        className='pr-2 max-[450px]:hidden'
                      />
                      {pageData.addCart}
                    </Button>
                  </div>
                );
              })}
          </div>
          {currentTab !== 'all' ? (
            <p
              className='text-center text-[#FF588A] border-[#FF588A] border-b-[1px] w-[246px] mx-auto pb-[3px] cursor-pointer'
              onClick={handleUploadMore}
            >
              {t('common:load')}
            </p>
          ) : (
            ''
          )}
        </div>
      </section>
    </main>
  );
};

export default Equipment;

{
  /* {
              category.map((ct, i) => {
                return (
                  <p key={i} onClick={handleTab} className={ct == currentTab ? ` w-fit flex items-center justify-center h-[50px] rounded-md text-[18px] leading-[140%] font-PoppinsBold bg-[#FF588A] text-[#FFF] shadow-[0_1px_2px_rgba(0,0,0,0.07)]` : `max-w-[139px] cursor-pointer w-full flex items-center justify-center h-[50px] rounded-md text-[18px] border capitalize leading-[180%] text-[#111827] drop-shadow-[0_1px_2px_rgba(0,0,0,0.07)] border-[#D1D5DB]`}>
                    {
                      ct
                    }
                  </p>
                );
              })
            } */
}
