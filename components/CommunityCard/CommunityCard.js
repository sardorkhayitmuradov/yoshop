import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
// import CommunityCardImage from '../../public/assets/images/communityCard.png'

const CommunityCard = ({ CommunityCardImage , title , date , description , link}) => {
  const {t} = useTranslation()
  return (
    <div className='flex items-center justify-between'>
        <Image src={CommunityCardImage} width={385} height={234} alt='Community Image' className='rounded-[10px]' />
        <div className='max-w-[795px] w-full'>
            <h3 className='mb-[8px] poppins font-bold text-[20px] leading-[140%] text-[#111827]'>{title}</h3>
            <span className='mb-[13px] poppins text-[16px] leading-[25px] text-[#111827]'>{date}</span>
            <p className='poppins text-[16px] mb-[22px] leading-[25px] text-[#111827]'>{description}</p>
            <Link href={'/readMore'} className='underline underline-offset-8 poppins text-[12px] leading-[180%] text-[#FF588A]'>
                {t('common:read_more_link')}
            </ Link>
        </div>
    </div>
  )
}

export default CommunityCard