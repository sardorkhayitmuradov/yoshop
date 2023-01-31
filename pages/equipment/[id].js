import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState , useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import AccordionWrapper from "../../components/Accordion/Accordion";
import shopIcon from "../../public/assets/images/bascet.svg";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useSelector , useDispatch } from "react-redux";
import { incrementQuantity , decrementQuantity } from "../../redux/ProductCounterSlice";

const Details = () => {
  const productsCounter = useSelector((store) => store.productCounter.products);
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

  // const {t} = useTranslation()
  // const {pathname, asPath,route} = router
  // console.log(router)

  return (
    <>
      <div id="equipment"></div>  
      <section className="pt-[130px]">
        {
          card?.map(product => {
            const {id} = product
            return (
              <div key={product.id} className="container max-w-7xl mx-auto text-black flex justify-between">
                <div className="w-[551px] flex flex-col">
                  <div className="max-w-[100%] h-[532px] flex justify-center items-center mb-[70px]">
                    <div className="mainImgProductWrapp ">
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

                <div className="w-[550px] font-PoppinsRegular">
                  <h2 className="text-[40px] font-PoppinsBold leading-[140%] mb-[20px]">
                    {product.title}
                  </h2>
                  <p className="mb-[30px] text-[32px] leading-[140%]">₸ {product.price}</p>

                  <div className="flex items-center justify-between">
                    <span className="flex justify-between max-w-[152px] items-center rounded-[10px] border border-solid border-[#7D66BB]">
                      <button className="py-[10px] px-[22px] text-[26px] text-[#111827] font-[700] rounded-[10px]" onClick={()=> dispatch(decrementQuantity(id))}>
                        -
                      </button>
                      {   
                        product.quantity
                      }
                      <button className="py-[10px] px-[22px] text-[26px] text-[#111827] font-[700] rounded-[10px]" onClick={()=> dispatch(incrementQuantity(id))}>
                        +
                      </button>
                    </span>
                    <Button className={'cursor-pointer font-PoppinsBold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[16px] px-[22px] rounded-[10px]'}
                    // onClick={() => {
                    //   if (modalWindowBg.current.classList.contains("hidden")) {
                    //     modalWindowBg.current.classList.remove("hidden");
                    //     modalWindowBg.current.classList.add("block");
                    //     modalWindowInfo.current.classList.remove("hidden");
                    //     modalWindowInfo.current.classList.add("block");
                    //   }
                    // }}
                    >
                      <Image src={shopIcon} alt="shop-icon" className="pr-2" width={40} height={40} />
                      Add to cart
                    </Button>
                  </div>
                  <h2 className="my-9 font-PoppinsBold text-[24px] leading-[140%]">
                    Product information
                  </h2>
                  <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>

                  {/* acardion */}
                  <AccordionWrapper title={'Main Specifications'}>
                    {product.mainSpecification}
                  </AccordionWrapper>
                  {
                    product.addInfo ?
                      <>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <AccordionWrapper title={'02 Additional information'}>
                          {
                            product.addInfo 
                          }
                        </AccordionWrapper>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <AccordionWrapper title={'03 Fiscalization of monetary transactions:'} >
                          {
                            product.transactions
                          }
                        </AccordionWrapper>
                      </> : emtyString
                  }
                  {
                    product.description ?
                      <>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <AccordionWrapper title={'Description'} >
                          {
                            product.description
                          }
                        </AccordionWrapper>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <AccordionWrapper title={'Network'}>
                          {
                            product.network
                          }
                        </AccordionWrapper>
                      </> : emtyString
                  }
                  {
                    product.features ? <>
                      <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                      <AccordionWrapper title={'Features'} >
                        {
                          product.features
                        }
                      </AccordionWrapper>
                    </> : emtyString
                  }
                  {
                    product.dimensions ?
                      <>
                        <span className='mb-[26px] w-full bg-[#111827] border border-solid block'></span>
                        <AccordionWrapper title={'Dimensions'} >
                          {
                            product.dimensions
                          }
                        </AccordionWrapper>
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

          <div className="flex justify-between flex-wrap gap-[30px]">
            {
              productsCounter?.map(el => {
                return (
                  <Link href={'/equipment/' + el.id+"#equipment"} key={el.id} className="cursor-pointer">
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

export async function getStaticProps({locale}){
  return{
    props: {
      ...(await serverSideTranslations(locale , ['home', 'header', 'footer'])),
    }
  }
}
export const getStaticPaths = () => {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: true //indicates the type of fallback
  }
}
