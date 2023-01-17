import Image from 'next/image';
import React from 'react'

const EquipmentCard = ({image ,children , wrapperClassName}) => {
  return (
    <div className={`${wrapperClassName} w-full py-[20px] pl-[20px] bg-[#23232C] flex items-center`}>
        <div className='w-[80px] h-[80px] flex items-center bg-[#2B2B32] rounded-full mr-[17px]'>
            <Image src={image} className='mx-auto' width={23} height={23} alt='equipment card image' />
        </div>
        <p className='font-PoppinsBold text-[20px] text-[#F9F9FB] leading-[140%]'>{children}</p>
    </div>
  )
}

export default EquipmentCard