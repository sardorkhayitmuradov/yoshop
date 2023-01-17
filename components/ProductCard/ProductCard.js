import React from 'react'
import Image from 'next/image'


const ProductCard = ({image , title , price ,children}) => {
  return (
    <div className="max-w-[380px] flex justify-between flex-col">
        <div className="py-[103px] px-[43px] bg-[#24242C] min-h-[560px] flex justify-center items-center">
          <Image src={image} alt="card-img" width={300} height={300} objectFit='contain' />
        </div>
        <div>
          <p className="cardProductName font-[400] text-[16px] text-[#fff] mt-[20px]">
          {title}
          </p>
          <p className="cardProductPrice font-[400] text-[14px] text-[#fff] mt-[10px]">
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