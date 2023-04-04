import Image from "next/image";
import React, { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import TickIcon from "../../../public/assets/images/tick.svg";
import { CalculatorProduct } from "../../CalculatorProduct";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  addLicences,
  removeLicences,
  addEquipments,
  removeEquipments,
  addUsers,
  removeUsers,
} from "../../../redux/features/carts";
import { useTranslation } from "next-i18next";
import PriceFormatNumber from "../../PriceFormatNumber";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
    },
  };
}


export const Monthly = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const licences = useSelector((store) => store.licence);
  const products = useSelector((store) => store.productCounter.products);
  const carts = useSelector((store) => store.carts.licenses);
  const monthly = licences.monthly;
  let filtered = products.filter((idx) => {
    return idx.id != 1;
  });
  const { t } = useTranslation()

  return (
    <>
      {monthly.map((el) => {
        const foundProd = carts.find((item) => item.id === el.id);
        const elFound = el.id === 29;
        console.log(el)
        return (
          <div key={el.id}>
            <Accordion
              subTotal={foundProd?.subTotal || 0}
              elId={el.id}
              accordionClassName={`mb-[11px] ${elFound ? "opacity-40" : ""}`}
              products={filtered}
              foundLicense={foundProd}
              accordionBodyClassname={"py-[20px]"}
              accordionHeaderClassName={"py-[10px] px-[34px] max-[450px]:px-0"}
              imgColor={"#FF588A"}
              titleMobile={
                <div className="flex items-center w-full justify-between flex-row-reverse">
                  <CalculatorProduct
                    incrementItem={() => {
                      elFound
                        ? ""
                        : dispatch(addLicences({ el }));
                    }}
                    quantity={foundProd?.qty || 0}
                    decrementItem={() => {
                      elFound ? "" : dispatch(removeLicences(el));
                    }}
                  />
                  <span className={`text-[16px] w-full ${foundProd?.qty >= 2 && "text-[#D4006E]"} leading-[25px]`}>
                    ₸ <PriceFormatNumber value={foundProd?.price || el.price} />
                    {foundProd?.qty > 1 && <span className="text-[#ff588a]">({t("common:discount")} ₸ {(el.price * foundProd.qty) - foundProd.price})</span>}
                  </span>
                </div>
              }
              title={
                <div className="flex items-center max-w-[830px] max-[450px]:mb-[10px]">
                  <h2 className="max-w-[300px] w-full">{router.locale == 'ru' ? el.nameru : el.name}</h2>
                  <CalculatorProduct
                    wrapClass={"max-[450px]:hidden"}
                    incrementItem={() => {
                      elFound
                        ? ""
                        : dispatch(addLicences({ el }));
                    }}
                    quantity={foundProd?.qty || 0}
                    decrementItem={() => {
                      elFound ? "" : dispatch(removeLicences(el));
                    }}
                  />
                  <span className={`text-[16px] max-w-[300px] w-full max-[450px]:hidden ${foundProd?.qty >= 2 && "text-[#D4006E]"} leading-[25px] `}>
                    ₸ <PriceFormatNumber value={foundProd?.price || el.price} />
                    {foundProd?.qty > 1 && <span className="text-[#ff588a]">({t("common:discount")} ₸ {(el.price * foundProd.qty) - foundProd.price})</span>}
                  </span>
                </div>
              } >
              <div className="flex w-full">
                <ul className="flex flex-col w-full">
                  <li className="flex items-center mb-[15px] justify-between max-w-[700px] pl-[100px] w-full max-[450px]:px-0 max-[450px]:w-full">
                    <div className="flex items-center max-w-[215px] w-full mr-[110px] max-[450px]:mx-0">
                      <Image
                        src={TickIcon}
                        alt={"verify icon"}
                        width={15}
                        height={15}
                        className="mr-[18px]"
                      />
                      <p className=" text-[20px] w-full leading-[180%] text-[#111827] max-[450px]:text-[16px] max-[450px]:leading-[25px]">
                        {router.locale == 'ru' ? "Торговая точка" : "Trading place"}
                      </p>
                    </div>
                    <CalculatorProduct
                      wrapClass={'max-[450px]:w-full'}
                      quantity={foundProd?.qty || 0}
                      opacity={true}
                    />
                    <span className="max-w-[90px] w-full text-[16px] leading-[25px]  ml-5 max-[450px]:hidden"></span>
                  </li>
                  <li className="flex items-center mb-[15px] justify-between max-w-[700px] pl-[100px] w-full max-[450px]:px-0">
                    <div className="flex items-center max-w-[215px] w-full mr-[110px] max-[450px]:mx-0">
                      <Image
                        src={TickIcon}
                        alt={"verify icon"}
                        width={15}
                        height={15}
                        className="mr-[18px]"
                      />
                      <p className="w-full  text-[20px] leading-[180%] text-[#111827] max-[450px]:text-[16px] max-[450px]:leading-[25px]">
                        {router.locale == 'ru' ? "Кассовая зона" : "Cash zone"}
                      </p>
                    </div>
                    <CalculatorProduct
                      quantity={foundProd?.qty || 0}
                      opacity={true}
                    />
                    <span className="max-w-[90px] w-full ml-5 max-[450px]:hidden"></span>
                  </li>
                  <li className="flex items-center mb-[15px] justify-between max-w-[800px] pl-[100px] w-full max-[450px]:px-0 max-[450px]:justify-between">
                    <div className="flex items-center max-w-[215px] w-full mr-[110px] max-[450px]:mx-0 max-[450px]:max-w-[100px]">
                      <Image
                        src={TickIcon}
                        alt={"verify icon"}
                        width={15}
                        height={15}
                        className="mr-[18px]"
                      />
                      <p className=" text-[20px] leading-[180%] text-[#111827] max-[450px]:text-[16px] max-[450px]:leading-[25px]">
                        {t("common:users")}
                      </p>
                    </div>
                    {
                      el.products ? <>
                        <CalculatorProduct
                          wrapClass={'mx-0'}
                          quantity={foundProd?.cashier.qty || 0}
                          incrementItem={(e) => {
                            dispatch(addUsers({ elId: el.id, price: 1000 }));
                          }}
                          decrementItem={(e) => {
                            dispatch(removeUsers({ elId: el.id, price: 1000 }));
                          }}
                        />
                        <span className="max-w-[190px] w-full text-[16px] leading-[25px]  ml-5 max-[450px]:hidden">
                          ₸ 1 000 {t("common:per_additional")}
                        </span>
                      </> : <>
                        <CalculatorProduct
                          wrapClass={'max-[450px]:w-full max-[450px]:mx-0'}
                          quantity={foundProd?.cashier.qty || 0}
                          opacity={true}
                        />
                        <span className="max-w-[190px] w-full text-[16px] leading-[25px]  ml-5 max-[450px]:hidden">
                        </span>
                      </>
                    }
                  </li>
                  {el.product?.map((product) => {
                    let prod = foundProd?.products.find(
                      (l) => l.id === product.id
                    );
                    return (
                      <li
                        className="flex justify-between mb-[15px] w-full flex-col max-[450px]:mb-0"
                        key={product.id}
                      >
                        <h2 className="w-full px-[34px] mb-3 text-[16px] leading-[140%] font-bold max-[450px]:text-[16px] max-[450px]:px-0">
                          <span className="text-[#FF588A]">*</span> {t("common:use_method")}
                        </h2>
                        <div className="flex items-center w-full mr-[110px] max-[450px]:mx-0 pl-[90px] max-[450px]:px-0 justify-between max-w-[1000px] max-[450px]:flex-col">
                          <div className="flex items-center w-full max-w-[340px] max-[450px]:mb-1">
                            <Image
                              src={product.image}
                              alt={"harware icon icon"}
                              width={50}
                              height={50}
                            />
                            <p className=" text-[20px] leading-[180%] text-[#111827]">
                              {product.name}
                            </p>
                          </div>
                          <div className="flex items-center w-full max-[450px]:flex-row-reverse">
                            <CalculatorProduct
                              quantity={prod?.qty || 0}
                              incrementItem={() =>
                                dispatch(
                                  addEquipments({ elId: el.id, product })
                                )
                              }
                              decrementItem={() =>
                                dispatch(
                                  removeEquipments({ elId: el.id, product })
                                )
                              }
                            />
                            <span className="w-full text-[16px] leading-[25px] ml-5 max-[450px]:mx-0">
                              ₸ <PriceFormatNumber value={prod?.price || product.price} /> 
                              {/* <span className="max-[450px]:hidden">{t("common:per_additional")}</span> */}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Accordion>
          </div>
        );
      })}
    </>
  );
};
