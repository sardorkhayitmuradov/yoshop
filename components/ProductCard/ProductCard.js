import React from 'react'
import Image from 'next/image'


const ProductCard = ({image , title , price ,children}) => {
  const handleScrollToTop = () => {
    console.log(document.querySelector('header').scrollTo({ top: 0, behavior: 
      'smooth' 
    }));
    window.scrollTo(0,0)
  }
  return (
    <div className="max-w-[380px] flex justify-between h-full flex-col text-[#111827]" onClick={handleScrollToTop}>
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