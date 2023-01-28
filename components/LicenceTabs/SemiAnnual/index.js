import Image from 'next/image'
import React from 'react'
import Accordion from '../../Accordion/Accordion'
import TickIcon from '../../../public/assets/images/tick.svg'
import { CalculatorProduct } from '../../CalculatorProduct'

export const SemiAnnual = () => {
  return (
    <>
        <Accordion title={
            <div className='flex items-center justify-between max-w-[700px] w-full'>
                <h2 className='max-w-[300px] w-full'>Yoshop Retail for Yoshop POS</h2>
                <CalculatorProduct />
                <span className='text-[16px] leading-[25px] font-PoppinsRegular'>₸ 25 000</span>
            </div>
        } accordionClassName={"border border-solid border-[#E5E7EB] mb-[11px]"} accordionBodyClassname={"py-[20px] pl-[100px]"} accordionHeaderClassName={"py-[10px] px-[34px]"} imgColor={"#FF588A"}>
            <div className='flex w-full'>
                <ul className='flex flex-col w-full'>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Trading place</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 4 500</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Admin</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 4 500</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cash zone</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 11 000 per additional</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cashier</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 5 000 per additional</span>
                    </li>
                </ul>
            </div>
        </Accordion>

        <Accordion title={
            <div className='flex items-center justify-between max-w-[700px] w-full'>
                <h2 className='max-w-[300px] w-full'>Yoshop retail for mobile</h2>
                <CalculatorProduct />
                <span className='text-[16px] leading-[25px] font-PoppinsRegular'>₸ 25 000</span>
            </div>
        } accordionClassName={"border border-solid border-[#E5E7EB] mb-[11px]"} accordionBodyClassname={"py-[20px] pl-[100px]"} accordionHeaderClassName={"py-[10px] px-[34px]"} imgColor={"#FF588A"}>
            <div className='flex w-full'>
                <ul className='flex flex-col w-full'>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Trading place</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 4 500</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Admin</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 4 500</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cash zone</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 11 000 per additional</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cashier</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 5 000 per additional</span>
                    </li>
                </ul>
            </div>
        </Accordion>

        <Accordion title={
            <div className='flex items-center justify-between max-w-[700px] w-full'>
                <h2 className='max-w-[300px] w-full'>Yoshop retail for Android POS</h2>
                <CalculatorProduct />
                <span className='text-[16px] leading-[25px] font-PoppinsRegular'>₸ 25 000</span>
            </div>
        } accordionClassName={"border border-solid border-[#E5E7EB] mb-[11px]"} accordionBodyClassname={"py-[20px] pl-[100px]"} accordionHeaderClassName={"py-[10px] px-[34px]"} imgColor={"#FF588A"}>
            <div className='flex w-full'>
                <ul className='flex flex-col w-full'>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Trading place</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 4 500</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Admin</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 4 500</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cash zone</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 11 000 per additional</span>
                    </li>
                    <li className='flex items-center mb-[15px]'>
                        <div className='flex items-center max-w-[215px] w-full mr-[110px]'>
                            <Image src={TickIcon} alt={"verify icon"} width={15} height={15} className='mr-[18px]' />
                            <p className='font-PoppinsRegular text-[20px] leading-[180%] text-[#111827]'>Cashier</p>
                        </div>
                        <CalculatorProduct/>
                        <span className='max-w-[201px] w-full ml-[95px] text-[16px] leading-[25px] font-PoppinsRegular'>₸ 5 000 per additional</span>
                    </li>
                </ul>
            </div>
        </Accordion>
    </>
  )
}
