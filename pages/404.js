import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button/Button";
import NotFoundNavbarImage from '../public/assets/images/notfoundNavbar.svg';
import NotFoundImage from '../public/assets/images/notFoundImage.png'
import NotFoundUserImage from '../public/assets/images/notFoundUser.png'

const NotFound = () => {
  return (
    <div className="mx-auto max-w-[1230px] w-full pt-[95px] pb-[254px]">
        <div className="flex items-center justify-between mb-[84px]">
            <Link href={'/'}>
              <Image
                  src={NotFoundNavbarImage}
                  alt='Not Found Navbar Image'
                  width={32}
                  height={32}
              />
            </Link> 
            <p className="poppins font-bold text-[56px] leading-[140%] text-[ #F9F9FB]">
                404
            </p>
        </div>
        <div className="flex items-center justify-center">
          <Image 
            src={NotFoundImage}
            alt='Not Found Image'
            width={600}
            height={482}
            className="mr-[35px]"
          />
          <div className={`max-w-[552px] w-full flex items-center`}>
            <Image 
              src={NotFoundUserImage}
              alt='Not Found Image'
              width={61}
              height={139} 
              className="mb-5"
            />
            <div className="-ml-2">
              <p className="poppins font-bold text-[56px] leading-[140%] text-[ #F9F9FB] mb-[41px]">
                404
              </p>
              <p className="poppins font-bold text-[32px] leading-[140%] text-[ #F9F9FB] mb-[23px]">
                Oh No! Something went wrong
              </p>
              <p className="poppins font-bold text-[24px] leading-[140%] text-[ #F9F9FB]">
                Please try again later !
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NotFound