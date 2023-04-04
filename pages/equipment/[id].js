import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useCallback } from "react";
import { CalculatorProduct } from "../../components/CalculatorProduct";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import shopIcon from "../../public/assets/images/bascet.svg";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useSelector, useDispatch } from "react-redux";
import { addProducts, addToCart, removeProducts, getItems } from "../../redux/features/carts";
import NewAccordion from "../../components/NewAccordion/NewAccordion";
import PriceFormatNumber from "../../components/PriceFormatNumber";

export async function getStaticProps({ locale }) {
  return {
    props: {
      fallback: true,
      ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: ["/equipment/id"],
    fallback: true,
  };
};

const Details = () => {
  const productsCounter = useSelector((store) => store.productCounter.products);
  const products = useSelector((store) => store.carts.products);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  let emtyString = "";
  const [card, setCard] = useState();
  // const [datas, setDatas] = useState("");

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart())
  }, [dispatch])

  const filterCard = useCallback(() => {
    let filteredProduct = productsCounter.filter(pr => {
      return pr.id == id;
    });
    setCard(filteredProduct);
  }, [id, productsCounter]);

  useEffect(() => {
    filterCard();
    if (typeof window !== "undefined") {
      const data = JSON.parse(localStorage.getItem("data"));
      if (data) {
        // setDatas(data)
        dispatch(getItems(data))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsCounter, id, dispatch, filterCard]);

  const { t } = useTranslation();

  return (
    <>
      <div id="equipment"></div>
      <section className="pt-[130px] max-[450px]:py-[50px]">
        {
          card?.map(product => {
            const foundProd = products.find((item) => item.id === product.id);
            return (
              <div key={product.id} className="max-w-xl mx-auto text-black flex justify-between max-[450px]:px-6 max-[450px]:flex-col items-start">
                <h2 className="font-bold text-[32px] leading-[140%] mb-[26px] max-[450px]:mb-2 hidden max-[450px]:block">{t("common:equipment_shop")}</h2>
                <h2 className="text-[40px] leading-[140%] mb-[20px] max-[450px]:block hidden max-[450px]:text-[16px] max-[450px]:leading-[140%]">
                  {router.locale == 'ru' ? product.titleru || product.title : product.title}
                </h2>
                <p className="mb-[30px] text-[32px] leading-[140%] max-[450px]:block hidden max-[450px]:text-[16px] max-[450px]:leading-[140%] font-bold">₸ {foundProd?.price || product?.price}</p>
                <div className="max-w-[551px] w-full max-[450px]:w-full flex flex-col max-[450px]:mb-[25px]">
                  <div className="max-w-[100%] max-h-[532px] h-full max-[450px]:bg-[#E2E8F0] max-[450px]:rounded-[10px] flex justify-center items-center mb-[70px] max-[450px]:py-5 max-[450px]:mb-1">
                    <div>
                      <Image src={product.image} alt="product-terminal" width={300} height={300} />
                    </div>
                  </div>

                  <ul className="w-full flex items-stretch justify-between">
                    <li className="border border-solid border-[#606060] max-[450px]:bg-[#e2e8f0] max-[540px]:py-4 max-[450px]:border-none w-full flex items-center justify-center rounded-[10px] max-w-[175px] mr-1">
                      <Image src={product.leftImage} alt="product-terminal" width={150} height={146} className="max-[540px]:w-[90px] max-[540px]:h-[90px]" />
                    </li>
                    <li className="border border-solid border-[#606060] max-[450px]:bg-[#e2e8f0] max-[540px]:py-4 max-[450px]:border-none w-full flex items-center justify-center rounded-[10px] max-w-[175px] mr-1">
                      <Image src={product.centerImage} alt="product-terminal" width={150} height={146} className="max-[540px]:w-[90px] max-[540px]:h-[90px]" />
                    </li>
                    <li className="border border-solid border-[#606060] max-[450px]:bg-[#e2e8f0] max-[540px]:py-4 max-[450px]:border-none w-full flex items-center justify-center rounded-[10px] max-w-[175px]">
                      <Image src={product.rightImage} alt="product-terminal" width={150} height={146} className="max-[540px]:w-[90px] max-[540px]:h-[90px]" />
                    </li>
                  </ul>

                </div>

                <div className="max-w-[550px] w-full">
                  <h2 className="text-[40px] font-bold leading-[140%] mb-[20px] max-[450px]:hidden block">
                    {router.locale == 'ru' ? product.titleru || product.title : product.title}
                  </h2>
                  <p className="mb-[30px] text-[32px] leading-[140%] max-[450px]:hidden block">₸ <PriceFormatNumber value={foundProd?.price || product?.price} /></p>

                  <div className="flex items-center justify-between max-[450px]:mb-[50px]">
                    <CalculatorProduct
                      decrementItem={() => foundProd?.qty > 0 ? dispatch(removeProducts(product)) : ""}
                      wrapClass={"!mx-0"}
                      quantity={foundProd?.qty || 0}
                      incrementItem={() => {
                        dispatch(addProducts(product));
                      }}
                    />
                    <Button className={'cursor-pointer font-bold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[11px] px-[22px] rounded-[10px] max-[450px]:text-[14px] max-[450px]:leading-[140%]'}
                      onClick={addToCartHandler}
                    >
                      <Image src={shopIcon} alt="shop-icon" className="pr-2 max-[450px]:hidden" width={40} height={40} />
                      {t("common:add_cart")}
                    </Button>
                  </div>
                  <h2 className="my-9 font-bold text-[24px] leading-[140%] max-[540px]:my-[9px]">
                    {t("common:product_information")}
                  </h2>
                  <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>

                  {/* acardion */}
                  <NewAccordion title={t("common:main_specification")}>
                    {
                      router.locale == 'ru' ? product.mainSpecificationru : product.mainSpecification
                    }
                  </NewAccordion>
                  {
                    product.addInfo ?
                      <>
                        <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={`02 ${t("common:add_info")}`}>
                          {
                            router.locale == 'ru' ? product.addInforu : product.addInfo
                          }
                        </NewAccordion>
                        <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={`03 ${t("common:fisc_mon_trans")}`} >
                          {
                            router.locale == 'ru' ? product.transactionsru : product.transactions
                          }
                        </NewAccordion>
                      </> : emtyString
                  }
                  {
                    product.description ?
                      <>
                        <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={t("common:description")} >
                          {
                            router.locale == 'ru' ? product.descriptionru : product.description
                          }
                        </NewAccordion>
                        <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={t("common:network")}>
                          {
                            router.locale == 'ru' ? product.networkru : product.network

                          }
                        </NewAccordion>
                      </> : emtyString
                  }
                  {
                    product.features ? <>
                      <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>
                      <NewAccordion title={t("common:features")} >
                        {
                          router.locale == 'ru' ? product.featuresru : product.features
                        }
                      </NewAccordion>
                    </> : emtyString
                  }
                  {
                    product.dimensions ?
                      <>
                        <span className='mb-[26px] max-[540px]:mb-[10px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={t("common:dimensions")} >
                          {
                            router.locale == 'ru' ? product.dimensionsru : product.dimensions
                          }
                        </NewAccordion>
                      </> : emtyString
                  }
                </div>
              </div>
            );
          })
        }
      </section>

      <section className="pt-[150px] pb-[230px] max-[450px]:py-0">
        <div className="max-w-xl mx-auto max-[450px]:px-6">
          <h2 className="mt-9 mb-[40px] font-[700] text-[32px] max-[450px]:text-[20px] max-[450px]:mt-0 max-[450px]:mb-5">
            {t("common:interested")}
          </h2>

          <div className="gap-[26px] grid grid-cols-4 mb-[50px] max-[450px]:flex  max-[450px]:justify-between max-[450px]:overflow-auto max-[450px]:flex-nowrap max-[450px]:items-stretch max-[450px]:h-full">
            {
              productsCounter?.map(product => {
                return (
                  <div key={product.id} className=" max-[540px]:flex-none max-[450px]:max-w-[250px] max-[450px]:items-stretch max-[450px]:flex-nowrap flex items-center flex-col justify-between">
                    <Link href={'/equipment/' + product.id + "#equipment"} scroll={true} className="cursor-pointer">
                      <ProductCard image={product.image} title={router.locale == 'ru' ? product.titleru || product.title : product.title} price={product.price}>
                      </ProductCard>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;

