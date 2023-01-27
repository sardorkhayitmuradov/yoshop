import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import shopIcon from "../../public/assets/images/bascet.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import { equipments } from '../../constants/equipments'
import AccordionWrapper from "../../components/Accordion/Accordion";
import Modal from "../../components/Modal";
  
const Details = () => {
    const [showModal, setShowModal] = useState(false);
    const [product , setProduct] = useState([]);
    const router = useRouter();
    const {id} = router.query;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const renderDynamicRoutedProduct = () => {
      equipments.forEach(pr => {
        if(pr.id == id){
          setProduct(pr)
        }
      })
    }
    useEffect(() => {
      renderDynamicRoutedProduct()
      window.scrollTo(0, 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    


    // const goToTop = () => {
    //   window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //   });
    // };
    let emtyString = ""

    return (
      <>
        <section className="pt-[87px]">       
          {
            equipments.map(product=> {
              if(product.id == id){
                ()=> setContenModal(product)
                return(
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
                          <button className="py-[10px] px-[22px] text-[26px] text-[#111827] font-[700] rounded-[10px]">
                            -
                          </button>
                          <span className="py-[10px] px-[14px] text-[16px] text-[#262626]">
                            1
                          </span>
                          <button className="py-[10px] px-[22px] text-[26px] text-[#111827] font-[700] rounded-[10px]">
                            +
                          </button>
                        </span>
                        <Button className={'cursor-pointer font-PoppinsBold max-w-[200px] w-full text-white text-[20px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[16px] px-[22px] rounded-[10px]'} 
                          onClick={() => {
                            if (modalWindowBg.current.classList.contains("hidden")) {
                              modalWindowBg.current.classList.remove("hidden");
                              modalWindowBg.current.classList.add("block");
                              modalWindowInfo.current.classList.remove("hidden");
                              modalWindowInfo.current.classList.add("block");
                            }
                          }}>
                            <Image src={shopIcon} alt="shop-icon" className="pr-2" width={40} height={40} />
                            Add to cart
                        </Button>
                      </div>
                      <h2 className="my-9 font-PoppinsBold text-[24px] leading-[140%]">
                        Product information
                      </h2>
          
                      {/* acardion */}
                      <AccordionWrapper title={'Main Specifications'} content={product.mainSpecification} />
                      {
                        product.addInfo ? 
                        <>
                          <AccordionWrapper title={'02 Additional information'} content={product.addInfo} /> 
                          <AccordionWrapper title={'03 Fiscalization of monetary transactions:'} content={product.transactions} /> 
                        </> : emtyString
                      }
                      {
                        product.description ? 
                        <>
                        <AccordionWrapper title={'Description'} content={product.description} /> 
                        <AccordionWrapper title={'Network'} content={product.network} /> 
                        </> : emtyString
                      }
                      {
                        product.features ? <AccordionWrapper title={'Features'} content={product.features} /> : emtyString
                      }
                      {
                        product.dimensions ? 
                        <AccordionWrapper title={'Dimensions'} content={product.dimensions} /> : emtyString
                      }
                      {/* <div className="acardion_wrapp mt-6">
                        <div className="accardionItem border-y border-solid border-[#5E5E5E]">
                          <div
                            className="acardion_tab cursor-pointer py-[26px] font-[700] text-[20px] flex justify-between"
                            ref={acTabRef}
                            onClick={() => {
                              if (acContentRef.current.classList.contains("max-h-0")) {
                                acContentRef.current.classList.remove("max-h-0");
                                acContentRef.current.classList.add("max-h-[290px]");
                                acSetting.current.textContent = "-";
                              } else {
                                acContentRef.current.classList.remove("max-h-[290px]");
                                acContentRef.current.classList.add("max-h-0");
                                acSetting.current.textContent = "+";
                              }
                            }}
                          >
                            <h2 className="font-PoppinsBold text-[20px] leading-[140%]">Main Specifications</h2>
                            <span
                              className="acSetting ease-linear  duration-[300ms]"
                              ref={acSetting}
                            >
                              -
                            </span>
                          </div>
                          <div
                            className="ac_content max-h-[290px] overflow-hidden ease-linear  duration-[300ms]"
                            ref={acContentRef}
                          >
                            <p className="max-w-[240px] pb-3 font-[400] text-[16px] leading-[25px]">
                              {product.description}
                            </p>
                          </div>
                        </div>
                        <div className="accardionItem">
                          <div
                            className="acardion_tab cursor-pointer font-[700] text-[20px] py-[26px] flex justify-between"
                            onClick={() => {
                              if (acContentRef2.current.classList.contains("max-h-0")) {
                                acContentRef2.current.classList.remove("max-h-0");
                                acContentRef2.current.classList.add("max-h-[290px]");
                                acSetting2.current.textContent = "-";
                              } else {
                                acContentRef2.current.classList.remove("max-h-[290px]");
                                acContentRef2.current.classList.add("max-h-0");
                                acSetting2.current.textContent = "+";
                              }
                            }}
                            ref={acTabRef2}
                          >
                            <h2 className="font-PoppinsBold text-[20px] leading-[140%]"> 02 Additional information</h2>
                            <span
                              className="acSetting ease-linear  duration-[300ms]"
                              ref={acSetting2}
                            >
                              +
                            </span>
                          </div>
                          <div
                            className="ac_content max-h-0 overflow-hidden   cursor-pointer ease-linear duration-[300ms]"
                            ref={acContentRef2}
                          >
                            <p className="max-w-[240px] pb-3 font-[400] text-[16px] leading-[25px]">
                              {product.description}
                            </p>
                          </div>
                        </div>
                        <div className="accardionItem border-y border-solid border-[#5E5E5E]">
                          <div
                            className="acardion_tab cursor-pointer py-[26px] font-[700] text-[20px] flex justify-between"
                            onClick={() => {
                              if (acContentRef3.current.classList.contains("max-h-0")) {
                                acContentRef3.current.classList.remove("max-h-0");
                                acContentRef3.current.classList.add("max-h-[290px]");
                                acSetting3.current.textContent = "-";
                              } else {
                                acContentRef3.current.classList.remove("max-h-[290px]");
                                acContentRef3.current.classList.add("max-h-0");
                                acSetting3.current.textContent = "+";
                              }
                            }}
                            ref={acTabRef3}
                          >
                            <h2 className="font-PoppinsBold text-[20px] leading-[140%]">
                              03 Fiscalization of monetary transactions:
                            </h2>
                            <span
                              className="acSetting ease-linear  duration-[300ms]"
                              ref={acSetting3}
                            >
                              +
                            </span>
                          </div>
                          <div
                            className="ac_content max-h-0 overflow-hidden  cursor-pointer ease-linear duration-[300ms]"
                            ref={acContentRef3}
                          >
                            <p className="max-w-[240px] pb-3 font-[400] text-[16px] leading-[25px]">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                )
              }
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
                equipments.map(el=> {
                  return(
                    <Link href={'/equipment/' + el.id} key={el.id} className="cursor-pointer">
                      <ProductCard image={el.image} title={el.title} price={el.price} />
                    </Link>
                  )
                })
              }
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Details;
  