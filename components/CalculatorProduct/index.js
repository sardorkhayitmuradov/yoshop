import Image from 'next/image';
import React from 'react'
import PlusIcon from '../../public/assets/images/plusIcon.svg'
import MinusIcon from '../../public/assets/images/minus.svg'

export const CalculatorProduct = ({incrementItem , decrementItem , quantity , wrapClass}) => {
  return (
    <div className={`flex items-center justify-between max-w-[157px] w-full ${wrapClass}`}>
        <Image src={MinusIcon} className='cursor-pointer py-[10px]' alt='minus icon' width={24} height={24} onClick={(e)=> decrementItem(e)} />
        <div className='max-w-[70px] w-full flex items-center justify-center border-[2px] border-solid rounded-[10px] border-[#E5E7EBs] py-[3px] text-[20px] leading-[140%] font-PoppinsBold text-[#111827]'>
            {quantity}
        </div>
        <Image src={PlusIcon} className='cursor-pointer py-[10px]' alt='plus icon' width={24} height={24} onClick={(e)=> incrementItem(e)} />
    </div>
  )
}
