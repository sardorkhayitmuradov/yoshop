import React from 'react'
import Image from 'next/image'


const ProductCard = ({image , title , price ,children}) => {
  
  return (
    <div className="max-w-[280px] flex justify-between h-full flex-col text-[#111827]">
        <div className="py-[30px] px-[30px] bg-[#E2E8F0] flex justify-center items-center h-[360px]">
          <Image src={image} alt="card-img" width={247} height={300} />
        </div>
        <div>
          <p className="font-[400] text-[16px] mt-[20px] leading-[25px]">
          {title}
          </p>
          <p className="font-bold text-[14px] mt-[10px] leading-[25px]">
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