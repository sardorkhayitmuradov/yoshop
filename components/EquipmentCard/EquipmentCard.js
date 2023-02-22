import Image from 'next/image';
import React from 'react'

const EquipmentCard = ({image ,children , wrapperClassName, titleClass}) => {
  return (
    <div className={`${wrapperClassName} w-full py-[20px] rounded-[10px] pl-[24px] bg-[#eeeff0] flex items-center`}>
        <div className='w-[80px] h-[80px] flex items-center bg-[#d8d9dc] rounded-full mr-[17px]'>
            <Image src={image} className='mx-auto' width={50} height={50} alt='equipment card image' />
        </div>
        <p className={`font-bold text-[20px] text-[#696e77] leading-[140%] ${titleClass}`}>{children}</p>
    </div>
  )
}

export default EquipmentCard