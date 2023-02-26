import Image from 'next/image';
import React from 'react';

const EquipmentCard = ({ image, children, wrapperClassName, titleClass }) => {
  return (
    <div className={`${wrapperClassName} w-full py-[20px] max-[450px]:py-0 rounded-[10px] pl-[24px] bg-[#eeeff0] max-[450px]:bg-white flex items-center max-[450px]:px-0`}>
      <div className='w-[80px] h-[80px] flex items-center bg-[#d8d9dc] rounded-full mr-[17px] max-[450px]:hidden'>
        <Image src={image} className='mx-auto' width={50} height={50} alt='equipment card image' />
      </div>
      <div className='hidden max-[450px]:block h-full bg-[#eeeff0] max-[450px]:px-1 max-[450px]:py-[12px] max-[450px]:mr-[10px]'>
        <div className='w-[80px] h-[80px] flex items-center max-[450px]:w-[40px] max-[450px]:h-[40px] bg-[#d8d9dc] rounded-full mr-[17px] max-[450px]:m-0'>
          <Image src={image} className='mx-auto max-[450px]:w-[20px] max-[450px]:h-[20px]' width={50} height={50} alt='equipment card image' />
        </div>
      </div>
      <p className={`font-bold text-[20px] text-[#696e77] leading-[140%] max-[450px]:text-[16px] ${titleClass}`}>{children}</p>
    </div>
  );
};

export default EquipmentCard;