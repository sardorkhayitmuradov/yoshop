import Image from "next/image";
import React, { useState } from "react";
import Accordion from "../../Accordion/Accordion";
import TickIcon from "../../../public/assets/images/tick.svg";
import { CalculatorProduct } from "../../CalculatorProduct";
import { useSelector, useDispatch } from "react-redux";
import {
  addLicences,
  removeLicences,
  addEquipments,
  removeEquipments,
  addUsers,
  removeUsers,
} from "../../../redux/features/carts";

export const Annual = () => {
  const dispatch = useDispatch();
  const licences = useSelector((store) => store.licence);
  const products = useSelector((store) => store.productCounter.products);
  const carts = useSelector((store) => store.carts.licenses);
  const monthly = licences.annual;
  let filtered = products.filter((idx) => {
    return idx.id != 1;
  });

  return (
    <>
      {monthly.map((el) => {
        const foundProd = carts.find((item) => item.id === el.id);
        const elFound = el.id === 23;
        return (
          <div key={el.id}>
            <Accordion
              subTotal={foundProd?.subTotal || 0}
              elId={el.id}
              accordionClassName={`mb-[11px] ${elFound ? "opacity-40" : ""}`}
              products={filtered}
              foundLicense={foundProd}
              accordionBodyClassname={"py-[20px]"}
              accordionHeaderClassName={"py-[10px] px-[34px]"}
              imgColor={"#FF588A"}
              title={
                <div className="flex items-center max-w-[830px]">
                  <h2 className="max-w-[300px] w-full">{el.name}</h2>
                  <CalculatorProduct
                    incrementItem={(e) => {
                      elFound
                        ? ""
                        : dispatch(addLicences({ el, period: "monthly" }));
                    }}
                    quantity={foundProd?.qty || 0}
                    decrementItem={() => {
                      elFound ? "" : dispatch(removeLicences(el));
                    }}
                  />
                  <span className={`text-[16px] max-w-[190px] w-full ${foundProd?.qty >= 2 && "text-[#D4006E]"} leading-[25px] font-PoppinsRegular`}>
                    ??? {foundProd?.price || el.price}
                    {foundProd?.qty > 1 && `(-??? ${(el.price * foundProd.qty) - foundProd.price})`}
                  </span>
                </div>
              } >
              <div className="flex w-full">
                <ul className="flex flex-col w-full">
                  <li className="flex items-center mb-[15px] justify-between max-w-[700px] pl-[100px] w-full">
                    <div className="flex items-center max-w-[215px] w-full mr-[110px]">
                      <Image
                        src={TickIcon}
                        alt={"verify icon"}
                        width={15}
                        height={15}
                        className="mr-[18px]"
                      />
                      <p className="font-PoppinsRegular text-[20px] w-full leading-[180%] text-[#111827]">
                        Trading place
                      </p>
                    </div>
                    <CalculatorProduct
                      quantity={foundProd?.qty || 0}
                      opacity={true}
                    />
                    <span className="max-w-[90px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5"></span>
                  </li>
                  <li className="flex items-center mb-[15px] justify-between max-w-[700px] pl-[100px] w-full">
                    <div className="flex items-center max-w-[215px] w-full mr-[110px]">
                      <Image
                        src={TickIcon}
                        alt={"verify icon"}
                        width={15}
                        height={15}
                        className="mr-[18px]"
                      />
                      <p className="w-full font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]">
                        Cash zone
                      </p>
                    </div>
                    <CalculatorProduct
                      quantity={foundProd?.qty || 0}
                      opacity={true}
                    />
                    <span className="max-w-[90px] w-full ml-5"></span>
                  </li>
                  <li className="flex items-center mb-[15px] justify-between max-w-[800px] pl-[100px] w-full">
                    <div className="flex items-center max-w-[215px] w-full mr-[110px]">
                      <Image
                        src={TickIcon}
                        alt={"verify icon"}
                        width={15}
                        height={15}
                        className="mr-[18px]"
                      />
                      <p className="font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]">
                        Users
                      </p>
                    </div>
                    {
                      el.products ? <>
                        <CalculatorProduct
                          quantity={foundProd?.cashier.qty || 0}
                          incrementItem={(e) => {
                            dispatch(addUsers({ elId: el.id, price: 1000 }));
                          }}
                          decrementItem={(e) => {
                            dispatch(removeUsers({ elId: el.id, price: 1000 }));
                          }}
                        />
                        <span className="max-w-[190px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5">
                          ??? 1 000 per additional
                        </span>
                      </> : <>
                        <CalculatorProduct
                          quantity={foundProd?.cashier.qty || 0}
                          opacity={true}
                        />
                        <span className="max-w-[190px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5">
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
                        className="flex justify-between mb-[15px] w-full flex-col"
                        key={product.id}
                      >
                        <h2 className="w-full px-[34px] mb-3 text-[16px] leading-[140%] font-PoppinsBold">
                          <span className="text-[#FF588A]">*</span> You can use
                          this license only on the following hardware:
                        </h2>
                        <div className="flex items-center w-full mr-[110px] pl-[90px] justify-between max-w-[1000px]">
                          <div className="flex items-center w-full max-w-[340px]">
                            <Image
                              src={product.image}
                              alt={"harware icon icon"}
                              width={50}
                              height={50}
                            />
                            <p className="font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]">
                              {product.name}
                            </p>
                          </div>
                          <div className="flex items-center w-full">
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
                            <span className="w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5">
                              ??? {prod?.price || product.price} per additional
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
