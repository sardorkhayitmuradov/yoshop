import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState , useEffect } from "react";
import  {CalculatorProduct}  from "../../components/CalculatorProduct";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import shopIcon from "../../public/assets/images/bascet.svg";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from "next-i18next";
import { useSelector , useDispatch } from "react-redux";
import { addProducts , addToCart, removeProducts } from "../../redux/features/carts";
import NewAccordion from "../../components/NewAccordion";

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
  const [card , setCard] = useState();

  const filterCard = () => {
    let filteredProduct =  productsCounter.filter(pr => {
      return pr.id == id
    })

    setCard(filteredProduct)
  }

  useEffect(()=>{
      filterCard()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [productsCounter, id]);

  const {t} = useTranslation()
  
  return (
    <>
      <div id="equipment"></div>  
      <section className="pt-[130px]">
        {
          card?.map(product => {
            const foundProd = products.find((item) => item.id === product.id);
            return (
              <div key={product.id} className="container max-w-7xl mx-auto text-black flex justify-between">
                <div className="w-[551px] flex flex-col">
                  <div className="max-w-[100%] h-[532px] flex justify-center items-center mb-[70px]">
                    <div>
                      <Image src={product.image} alt="product-terminal" width={300} height={300} />
                    </div>
                  </div>

                  <ul className="w-full flex items-stretch justify-between">
                    <li className="border border-solid border-[#606060] w-full flex items-center justify-center rounded-[10px] max-w-[175px]">
                      <Image src={product.leftImage} alt="product-terminal" width={150} height={146} />
                    </li>
                    <li className="border border-solid border-[#606060] w-full flex items-center justify-center rounded-[10px] max-w-[175px]">
                      <Image src={product.centerImage} alt="product-terminal" width={150} height={146} />
                    </li>
                    <li className="border border-solid border-[#606060] w-full flex items-center justify-center rounded-[10px] max-w-[175px]">
                      <Image src={product.rightImage} alt="product-terminal" width={150} height={146} />
                    </li>
                  </ul>

                </div>

                <div className="w-[550px]">
                  <h2 className="text-[40px] font-bold leading-[140%] mb-[20px]">
                    {product.title}
                  </h2>
                  <p className="mb-[30px] text-[32px] leading-[140%]">₸ {foundProd?.price || product?.price}</p>

                  <div className="flex items-center justify-between">
                    {/* <span className="flex justify-between max-w-[152px] items-center">
                      <button className="py-[10px] px-[22px] text-[26px] text-[#111827] font-[700] rounded-[10px]" onClick={()=> foundProd?.qty > 0 ? dispatch(removeProducts(product)) : ""}>
                        -
                      </button>
                        <p className="w-[20px]">{foundProd?.qty || 0}</p>
                      <button className="py-[10px] px-[22px] text-[26px] text-[#111827] font-[700] rounded-[10px]" onClick={()=> dispatch(addProducts(product))}>
                        +
                      </button>
                    </span> */}
                    <CalculatorProduct
                    decrementItem={()=> foundProd?.qty > 0 ? dispatch(removeProducts(product)) : ""}
                    wrapClass={"!mx-0"}
                    quantity={foundProd?.qty || 0}
                    incrementItem={() => {
                      dispatch(addProducts(product));
                    }}
                  />
                    <Button className={'cursor-pointer font-bold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[11px] px-[22px] rounded-[10px]'}
                    onClick={() => dispatch(addToCart())}
                    >
                      <Image src={shopIcon} alt="shop-icon" className="pr-2" width={40} height={40} />
                      {t("common:add_cart")}
                    </Button>
                  </div>
                  <h2 className="my-9 font-PoppinsBold text-[24px] leading-[140%]">
                    Product information
                  </h2>
                  <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>

                  {/* acardion */}
                  <NewAccordion title={'Main Specifications'}>
                    {product.mainSpecification}
                  </NewAccordion>
                  {
                    product.addInfo ?
                      <>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={'02 Additional information'}>
                          {
                            product.addInfo 
                          }
                        </NewAccordion>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={'03 Fiscalization of monetary transactions:'} >
                          {
                            product.transactions
                          }
                        </NewAccordion>
                      </> : emtyString
                  }
                  {
                    product.description ?
                      <>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={'Description'} >
                          {
                            product.description
                          }
                        </NewAccordion>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={'Network'}>
                          {
                            product.network
                          }
                        </NewAccordion>
                      </> : emtyString
                  }
                  {
                    product.features ? <>
                      <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                      <NewAccordion title={'Features'} >
                        {
                          product.features
                        }
                      </NewAccordion>
                    </> : emtyString
                  }
                  {
                    product.dimensions ?
                      <>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <NewAccordion title={'Dimensions'} >
                          {
                            product.dimensions
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

      <section className="pt-[150px] pb-[230px]">
        <div className="container max-w-7xl mx-auto min-h-[100vh]">
          <h2 className="recomendProductTitle mt-9 mb-[40px] font-[700] text-[32px]">
            You may be interested in
          </h2>

          <div className="flex justify-between flex-wrap gap-[26px]">
            {
              productsCounter?.map(el => {
                return (
                  <Link href={'/equipment/' + el.id+"#equipment"}  key={el.id} className="cursor-pointer">
                    <ProductCard image={el.image} title={el.title} price={el.price} />
                  </Link>
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

