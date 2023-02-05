import Image from 'next/image';
import React, { useState } from 'react';
import Accordion from '../../Accordion/Accordion';
import TickIcon from '../../../public/assets/images/tick.svg';
import { CalculatorProduct } from '../../CalculatorProduct';
import { useSelector, useDispatch } from "react-redux";
import { addLicences, removeLicences } from '../../../redux/features/carts';

export const Monthly = () => {
    const [cart, setcart] = useState([]);
    const dispatch = useDispatch();
    const licences = useSelector((store) => store.licence.licences);
    const products = useSelector((store) => store.productCounter.products);
    const carts = useSelector((store) => store.carts.licences);
    const monthly = licences.filter((item) => item.period === "Monthly");
    var filtered = products.filter((idx) => { return idx.id != 1 });

    return (
        <>
            {
                monthly.map(el => {
                    const foundProd = carts.find((item) => item.id === el.id);
                    const elFound = el.id === 3;
                    return (
                        <>
                            <Accordion onclick={(e) => console.log(e)} key={el.id} title={
                                <div className='flex items-center justify-between max-w-[700px] w-full'>
                                    <h2 className='max-w-[300px] w-full'>{el.name}</h2>
                                    <CalculatorProduct incrementItem={() => {
                                        elFound ? "" : dispatch(addLicences(el));
                                    }} quantity={foundProd?.qty || 0} decrementItem={() => {
                                        elFound ? "" : dispatch(removeLicences(el));
                                    }} />
                                    <span className='text-[16px] leading-[25px] font-PoppinsRegular'>₸ {foundProd?.price || 4500}</span>
                                </div>
                            } accordionClassName={`mb-[11px] ${elFound ? "opacity-40": ""}`} products={filtered} accordionBodyClassname={"py-[20px]"} accordionHeaderClassName={"py-[10px] px-[34px]"} imgColor={"#FF588A"}>
                                <div className='flex w-full'>
                                    <ul className='flex flex-col w-full'>
                                        <li className='flex items-center mb-[15px] justify-between max-w-[700px] pl-[100px] w-full'>
                                            <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                                <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                                <p className='font-PoppinsRegular text-[20px] w-full leading-[180%] text-[#111827]'>Trading place</p>
                                            </div>
                                            <CalculatorProduct quantity={1} opacity={true} />
                                            <span className='max-w-[90px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5'></span>
                                        </li>
                                        <li className='flex items-center mb-[15px] justify-between max-w-[700px] pl-[100px] w-full'>
                                            <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                                <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                                <p className='w-full font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cash zone</p>
                                            </div>
                                            <CalculatorProduct quantity={1} opacity={true} />
                                            <span className='max-w-[90px] w-full ml-5'></span>
                                        </li>
                                        <li className='flex items-center mb-[15px] justify-between max-w-[800px] pl-[100px] w-full'>
                                            <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                                <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                                <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cashier</p>
                                            </div>
                                            <CalculatorProduct quantity={0} incrementItem={(e) => e} decrementItem={(e) => e} />
                                            <span className='max-w-[190px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5'>₸ 1 000 per additional</span>
                                        </li>
                                        {
                                            el?.products?.map(product => {
                                                return (
                                                    <li key={product.id} className='mb-[15px] justify-between max-w-[700px] w-full'>
                                                        <h2 className='text-[16px] font-PoppinsRegular font-bold leading-[140%] mb-[10px] py-[10px] px-[34px]'><span className='text-[#FF588A]'>*</span> You can use this license only on the following hardware:</h2>
                                                        <div className='flex items-center justify-between max-w-[800px] w-full pl-[100px]'>
                                                            <div className='flex items-center  max-w-[290px] w-full'>
                                                                <Image src={product.image} height={50} width={50} alt={product.name} />
                                                                <p className='text-[20px] leading-[180%] text-[#111827]'>{product.name}</p>
                                                            </div>
                                                            <CalculatorProduct quantity={0} />
                                                            <span className='text-[16px] leading-[25px]'>₸ {product?.price || 4500}</span>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </Accordion>
                        </>
                    );
                })
            }
        </>
    );
};
