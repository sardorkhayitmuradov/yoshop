import React from 'react'
import Image from 'next/image'


const ProductCard = ({image , title , price ,children}) => {
  
  return (
    <div className="max-w-[380px] flex justify-between h-full flex-col text-[#111827]">
        <div className="py-[60px] px-[30px] bg-[#E2E8F0] min-h-[560px] flex justify-center items-center">
          <Image src={image} alt="card-img" width={300} height={300} />
        </div>
        <div>
          <p className="font-[400] text-[16px] mt-[20px] leading-[25px]">
          {title}
          </p>
          <p className="font-[400] text-[14px] mt-[10px] leading-[25px]">
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