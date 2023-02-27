import React from 'react'
import Image from 'next/image'


const ProductCard = ({image , title , price ,children}) => {
  
  return (
    <div className="max-w-[280px] flex justify-between h-full flex-col text-[#111827] max-[450px]:w-full">
        <div className="py-[30px] px-[30px] bg-[#E2E8F0] flex justify-center items-center h-[360px] max-[450px]:h-[200px] max-[450px]:px-[8px] max-[450px]:py-[20px] max-[450px]:mb-[10px] max-[450px]:w-full">
          <Image src={image} alt="card-img" width={247} height={300} className='max-[450px]:w-[90%] max-[450px]:h-[90%]' />
        </div>
        <div>
          <p className="text-[16px] mt-[20px] leading-[25px] max-[450px]:text-[12px] max-[450px]:leading-[18px]">
          {title}
          </p>
          <p className="font-bold text-[14px] mt-[10px] leading-[25px] max-[450px]:text-[12px] max-[450px]:leading-[180%] max-[450px]:mb-[6px]">
          ₸ {price}
          </p>
        </div>
        {
          children ? children : ''
        }
    </div>
  )
}

export default ProductCard