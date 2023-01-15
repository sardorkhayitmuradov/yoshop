import Image from "next/image"

const CompanyCard = ({image ,wrapperClassName , title , description , children}) => {
  return (
    <div className={`w-full flex items-center justify-between ${wrapperClassName}`}>
        <Image src={image} width={566} height={500} alt='company item image' className="rounded-[20px]" />
        <div className="max-w-[566px] w-full">
            <h4 className="mb-[40px] font-bold poppins text-[32px] leading-[140%] text-[#F9F9FB]">{title}</h4>
            <p className="poppins text-[20px] leading-[180%] text-[#F9F9FB]">{description ? description : children}</p>
        </div>
    </div>
  )
}

export default CompanyCard