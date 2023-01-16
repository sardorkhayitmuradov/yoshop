import Image from 'next/image'
import Link from 'next/link'
// import CommunityCardImage from '../../public/assets/images/communityCard.png'

const CommunityCard = ({ CommunityCardImage , title , date , description , link}) => {
  return (
    <div className='flex items-center justify-between'>
        <Image src={CommunityCardImage} width={385} height={234} alt='Community Image' className='rounded-[10px]' />
        <div className='max-w-[795px] w-full'>
            <h3 className='mb-[8px] poppins font-bold text-[20px] leading-[140%] text-[#F9F9FB]'>{title}</h3>
            <span className='mb-[13px] poppins text-[16px] leading-[25px] text-[#F9F9FB]'>{date}</span>
            <p className='poppins text-[16px] mb-[22px] leading-[25px] text-[#F9F9FB]'>{description}</p>
            <Link href={'/readMore'} className='underline underline-offset-8 poppins text-[12px] leading-[180%] text-[#F9F9FB]'>
                {link}
            </ Link>
        </div>
    </div>
  )
}

export default CommunityCard