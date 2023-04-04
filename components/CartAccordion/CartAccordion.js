// import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
// import Button from '../Button/Button';
// import PlusWhite from '../../public/assets/images/plusWhite.svg';
// import Cancel from '../../public/assets/images/cancel.svg';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';
import PriceFormatNumber from '../PriceFormatNumber';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}

const CartAccordion = ({
  title,
  accordionClassName,
  accordionHeaderClassName,
  accordionBodyClassname,
  licensePrice,
  children,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`mb-[10px] ${accordionClassName ? accordionClassName : ''}`}
    >
      <div className='accordion-item'>
        <div className='border border-solid border-[#E5E7EB] px-3 rounded-md'>
          <div
            className='accordion-title'
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className={`w-full flex justify-between items-center text-gray-600 z-10 ${
                accordionHeaderClassName ? accordionHeaderClassName : ''
              }`}
            >
              <div
                className='flex flex-col items-center w-full'
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className={`w-6 h-6 self-end mb-2 ${
                    !isActive ? '-rotate-90' : 'rotate-90'
                  }`}
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() => setIsActive(!isActive)}
                >
                  <path
                    className=''
                    fillRule='evenodd'
                    color='#FF588A'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
                <div className='font-bold text-left text-[20px] leading-[140%] w-full text-[#111827] max-[450px]:text-[16px]'>
                  {title}
                  {!isActive && (
                    <li className='flex items-center ml-auto w-[82%] justify-between'>
                      <h4 className='text-[12px] leading-[140%] font-bold'>
                        Subtotal:
                      </h4>
                      <p className='text-[12px] leading-[140%] font-bold'>
                        ₸ <PriceFormatNumber value={licensePrice} />
                      </p>
                    </li>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isActive && (
            <div
              className={`font-light w-full py-0 ${
                accordionBodyClassname ? accordionBodyClassname : ''
              }`}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartAccordion;
