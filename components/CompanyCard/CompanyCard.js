import Image from "next/image"

const CompanyCard = ({image ,wrapperClassName , title , description , children}) => {
  return (
    <div className={`w-full flex items-center justify-between ${wrapperClassName}`}>
        <Image src={image} width={566} height={500} alt='company item image' className="rounded-[20px] max-[450px]:hidden" />
        <div className="max-w-[566px] w-full">
            <h4 className="mb-[40px] font-bold text-[32px] leading-[140%] text-[#111827] max-[450px]:mb-5">{title}</h4>
            <Image src={image} width={566} height={500} alt='company item image' className="rounded-[20px] max-[450px]:block hidden max-[450px]:mb-5" />
            <div className="text-[20px] leading-[180%] text-[#111827]">{description ? description : children}</div>
        </div>
    </div>
  )
}

export default CompanyCard