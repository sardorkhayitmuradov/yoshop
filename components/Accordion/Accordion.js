import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button/Button";
import PlusWhite from "../../public/assets/images/plusWhite.svg";
import Cancel from "../../public/assets/images/cancel.svg";
import { CalculatorProduct } from "../CalculatorProduct";
import { addEquipments, removeEquipments } from "../../redux/features/carts";
import { useDispatch } from "react-redux";

const AccordionWrapper = ({
  title,
  titleMobile,
  imgColor,
  accordionClassName,
  accordionHeaderClassName,
  accordionBodyClassname,
  children,
  products,
  subTotal,
  foundLicense,
  elId
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={`mb-[40px] ${accordionClassName ? accordionClassName : ""}`}>
        <div className="accordion-item">
          <div className="border border-solid border-[#E5E7EB] max-[450px]:border-none" id={elId}>
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
              <div className={`w-full flex justify-between items-center text-gray-600 z-10 max-[450px]:flex-col ${accordionHeaderClassName ? accordionHeaderClassName : ""
                }`}>
                <div className="flex items-center w-full">
                  <div className="font-bold text-left text-[20px] leading-[140%] w-full text-[#111827] max-[450px]:text-[16px]">{title}</div>
                  <svg
                    className={`w-6 h-6 ${!isActive || elId === 23 || elId === 26 || elId === 29 ? "" : "rotate-90"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      color={imgColor ? imgColor : ""}
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="max-[450px]:block hidden w-full">
                  {titleMobile}
                </div>
              </div>
            </div>
            {
              elId === 23 || elId === 26 || elId === 29 ? "" : isActive && <div
                className={`font-light text-left w-full py-[20px] ${accordionBodyClassname ? accordionBodyClassname : ""
                  }`}
              >
                {children}
              </div>}
          </div>
        </div>
        {elId === 23 || elId === 26 || elId === 29 ? "" : isActive &&
          <div
            className={`mb-[70px] px-[20px] max-[450px]:px-0 max-[450px]:mt-0 ${open ? "block" : "hidden"
              } mt-[40px] max-[450px]:mb-5`}
          >
            {isOpen ? (
              <Button
                className={
                  "cursor-pointer mb-5 max-w-[60px] w-full text-white text-[20px] flex justify-center items-center bg-[#FF588A] border-solid border-x border-y border-[#fff] py-[13px] rounded-[10px] max-[450px]:px-[10px] max-[450px]:py-[7] max-[450px]:text-[14px]"
                }
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src={Cancel}
                  alt="cancel-icon"
                  width={30}
                  height={30}
                  className="max-[450px]:w-[18px] max-[450px]:h-[18px]"
                />
              </Button>
            ) : (
              <Button
                className={
                  "cursor-pointer mb-5 max-w-[220px] w-full text-white text-[20px] flex justify-center items-center bg-[#FF588A] border-solid border-x border-y border-[#fff] py-[13px] rounded-[10px] font-bold"
                }
                onClick={() => setIsOpen(true)}
              >
                <Image
                  src={PlusWhite}
                  alt="shop-icon"
                  className="pr-2 max-[450px]:w-[27px] max-[450px]:h-[27px] max-[450px]:mr-[10px]"
                  width={35}
                  height={35}
                  
                />
                Add equipment
              </Button>
            )}
            <ul>
              {isOpen
                ? products?.map((product) => {
                  let prod = foundLicense?.products.find(l => l.id === product.id);
                  // let p = prod?.slice(-1).pop()
                  // console.log(p)
                  // console.log(prod)
                  return (
                    <li
                      key={product.id}
                      className="mb-[25px] justify-between max-w-[700px] w-full"
                    >
                      <div className="flex items-center justify-between max-w-[800px] w-full pl-[100px] max-[450px]:flex-col max-[450px]:px-0 max-[450px]:items-stretch">
                        <div className="flex items-center max-w-[290px] w-full">
                          <Image
                            src={product.image}
                            height={50}
                            width={50}
                            alt='product name'
                          />
                          <p className="text-[20px] leading-[180%] text-[#111827] ml-10 max-[450px]:w-full max-[450px]:ml-2">
                            {product.title}
                          </p>
                        </div>
                        <div className="flex items-center justify-between w-full max-[450px]:flex-row-reverse">
                          <CalculatorProduct wrapClass={'mx-0'} quantity={prod?.qty || 0} decrementItem={() => dispatch(removeEquipments({ elId, product }))} incrementItem={() => dispatch(addEquipments({ elId, product }))} />
                          <span className="text-[16px] leading-[25px]">
                            ₸ {prod?.price || product?.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  );
                })
                : ""}
            </ul>
            <div className="max-w-[300px] w-full ml-auto text-right font-bold text-[24px] leading-[140%] max-[450px]:text-left max-[450px]:mx-0 max-[450px]:text-[16px]">
              <p>SUBTOTAL: ₸ {subTotal}</p>
            </div>
          </div>}
      </div>
    </>
  );
};

export default AccordionWrapper;

{/* <Accordion
        alwaysOpen={true}
        transition={{
          duration: "300ms",
          timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        }}
        className={`mb-[40px] ${accordionClassName ? accordionClassName : ""}`}
      >
        <AccordionItem>
          {({ open }) => (
            <>
              <div className="border border-solid border-[#E5E7EB]" id={elId}>
                <AccordionHeader
                  as={"div"}
                  className={`w-full flex justify-between items-center text-gray-600 z-10 ${accordionHeaderClassName ? accordionHeaderClassName : ""
                    }`}
                >
                  <div className= text-left text-[20px] leading-[140%] w-full text-[#111827]">
                    {title}
                  </div>
                  <svg
                    className={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      color={imgColor ? imgColor : ""}
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </AccordionHeader>

                <AccordionBody>
                  <div
                    className={`font-light text-left w-full py-[20px] ${accordionBodyClassname ? accordionBodyClassname : ""
                      }`}
                  >
                    {children}
                  </div>
                </AccordionBody>
              </div>
              <div
                className={`mb-[70px] px-[20px] ${open ? "block" : "hidden"
                  } mt-[40px]`}
              >
                {isOpen ? (
                  <Button
                    className={
                      "cursor-pointer mb-5 max-w-[60px] w-full text-white text-[20px] flex justify-center items-center bg-[#FF588A] border-solid border-x border-y border-[#fff] py-[13px] rounded-[10px]"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={Cancel}
                      alt="cancel-icon"
                      width={30}
                      height={30}
                    />
                  </Button>
                ) : (
                  <Button
                    className={
                      "cursor-pointer mb-5 max-w-[220px] w-full text-white text-[20px] flex justify-center items-center bg-[#FF588A] border-solid border-x border-y border-[#fff] py-[13px] rounded-[10px]"
                    }
                    onClick={() => setIsOpen(true)}
                  >
                    <Image
                      src={PlusWhite}
                      alt="shop-icon"
                      className="pr-2"
                      width={35}
                      height={35}
                    />
                    Add equipment
                  </Button>
                )}
                <ul>
                  {isOpen
                    ? products?.map((product) => {
                      let prod = foundLicense?.products.find(l => l.id === product.id);
                      // let p = prod?.slice(-1).pop()
                      // console.log(p)
                      // console.log(prod)
                      return (
                        <li
                          key={product.id}
                          className="mb-[25px] justify-between max-w-[700px] w-full"
                        >
                          <div className="flex items-center justify-between max-w-[800px] w-full pl-[100px]">
                            <div className="flex items-center  max-w-[290px] w-full">
                              <Image
                                src={product.image}
                                height={50}
                                width={50}
                                alt='product name'
                              />
                              <p className="text-[20px] leading-[180%] text-[#111827] ml-10">
                                {product.title}
                              </p>
                            </div>
                            <CalculatorProduct quantity={prod?.qty || 0} decrementItem={() => dispatch(removeEquipments({ elId, product }))} incrementItem={() => dispatch(addEquipments({ elId, product }))} />
                            <span className="text-[16px] leading-[25px]">
                              ₸ {prod?.price || product?.price}
                            </span>
                          </div>
                        </li>
                      );
                    })
                    : ""}
                </ul>
                <div className="max-w-[300px] w-full ml-auto text-right font-bold text-[24px] leading-[140%]">
                  <p>SUBTOTAL: ₸ {subTotal}</p>
                </div>
              </div>
            </>
          )}
        </AccordionItem>
    </Accordion> */}
