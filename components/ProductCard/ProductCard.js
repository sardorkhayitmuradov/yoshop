import React from 'react'
import Image from 'next/image'


const ProductCard = ({image , title , price}) => {
  return (
    <div className="recomendCard max-w-[350px]">
        <div className="recomendCardImgWrapp py-[103px] px-[43px] bg-[#24242C] min-h-[560px] flex justify-center items-center">
        <Image src={image} alt="card-img" className='w-full h-full' />
        </div>
        <p className="cardProductName font-[400] text-[16px] text-[#fff] mt-[20px]">
        {title}
        </p>
        <p className="cardProductPrice font-[400] text-[14px] text-[#fff] mt-[10px]">
        ₸ {price}
        </p>
    </div>
  )
}

export default ProductCard