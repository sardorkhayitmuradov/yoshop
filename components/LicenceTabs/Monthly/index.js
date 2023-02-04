import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Accordion from '../../Accordion/Accordion'
import TickIcon from '../../../public/assets/images/tick.svg'
import { CalculatorProduct } from '../../CalculatorProduct'
import { useSelector , useDispatch } from "react-redux";
import { addLicences, removeLicences } from '../../../redux/features/carts'

export const Monthly = () => {
    // const [cart, setcart] = useState([]);
    const dispatch = useDispatch();
    const licences = useSelector((store) => store.licence.licences);
    const carts = useSelector((store) => store.carts.licences);
    console.log(carts);
    const monthly = licences.filter((item) => item.period === "Monthly");

    
  return (
    <>
        {
            monthly.map(el => {
                const foundProd = carts.find((item) => item.id === el.id);
                return (
                    <Accordion key={el.id} title={
                        <div className='flex items-center justify-between max-w-[700px] w-full'>
                            <h2 className='max-w-[300px] w-full'>{el.name}</h2>
                            <CalculatorProduct incrementItem={()=> {
                                dispatch(addLicences(el));
                            }} quantity={foundProd?.qty || 0} decrementItem={()=> {
                                dispatch(removeLicences(el));
                            }}/>
                            <span className='text-[16px] leading-[25px] font-PoppinsRegular'>₸ {foundProd?.price || 0}</span>
                        </div>
                    } accordionClassName={"border border-solid border-[#E5E7EB] mb-[11px]"} accordionBodyClassname={"py-[20px] pl-[100px]"} accordionHeaderClassName={"py-[10px] px-[34px]"} imgColor={"#FF588A"}>
                        <div className='flex w-full'>
                            <ul className='flex flex-col w-full'>
                                <li className='flex items-center mb-[15px] justify-between max-w-[700px]'>
                                    <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                        <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                        <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Trading place</p>
                                    </div>
                                    <CalculatorProduct quantity={0} incrementItem={(e)=> console.log(e)} decrementItem={(e)=> console.log(e)} />
                                    <span className='max-w-[201px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5'></span>
                                </li>
                                <li className='flex items-center mb-[15px] justify-between max-w-[700px]'>
                                    <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                        <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                        <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Admin</p>
                                    </div>
                                    <CalculatorProduct quantity={0} incrementItem={(e)=> e} decrementItem={(e)=> e}/>
                                    <span className='max-w-[201px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5'></span>
                                </li>
                                <li className='flex items-center mb-[15px] justify-between max-w-[700px]'>
                                    <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                        <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                        <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cash zone</p>
                                    </div>
                                    <CalculatorProduct quantity={0} incrementItem={(e)=> e} decrementItem={(e)=> e}/>
                                    <span className='max-w-[201px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5'>₸ 2 000 per additional</span>
                                </li>
                                <li className='flex items-center mb-[15px] justify-between max-w-[700px]'>
                                    <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                                        <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                                        <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cashier</p>
                                    </div>
                                    <CalculatorProduct quantity={0} incrementItem={(e)=> e} decrementItem={(e)=> e}/>
                                    <span className='max-w-[201px] w-full text-[16px] leading-[25px] font-PoppinsRegular ml-5'>₸ 1 000 per additional</span>
                                </li>
                            </ul>
                        </div>
                    </Accordion>
                )
            })
        } 
    </>
  )
}
