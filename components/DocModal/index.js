import React, { useContext } from 'react';
import Image from 'next/image';
import { ModalContext } from '../../context/modal';
import Button from '../Button/Button';
import Link from 'next/link';

const DocsModal = () => {
    const { visible, setVisible } = useContext(ModalContext);
    const modal = () => {
        setVisible(false);
    };
    return (
        <>
            <div
                className={`${visible ? "z-30 fixed top-[-50px] w-full h-[120vh] opacity-60 bg-[#D9D9D9]" : "hidden"}`}
                onClick={modal}
            ></div>
            <div
                className={`${visible ? "ease-linear  duration-[300ms] font-PoppinsRegular shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] fixed z-[31] bg-[#fff] py-[40px] pb-[40px] px-[40px] min-h-[300px] w-[728px] text-[#111827] top-[90px] rounded-[10px] border border-solid border-[#F9F9FB]" : "hidden"}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative flex justify-between overflow-y-scroll h-[500px] cart">
                    <Image
                        src={modalStickIcon}
                        alt='modal-stick'
                        width={40}
                        height={40}
                        className='absolute right-0 top-[-70px] z-[31]'
                    />
                    <div className="w-full">
                        <h3 className="text-[32px] font-PoppinsBold leading-[140%] mb-[5px]">
                            Cart
                        </h3>
                        <div className='flex items-center justify-between w-full border-b border-solid border-[#9CA3AF]'>
                            <p className='text-[16px] leading-[140%] text-[#111827] max-w-[255px] w-full'>Products</p>
                            <p className='text-[16px] leading-[140%] text-[#111827] w-[50px]'>Qty</p>
                            <p className='text-[16px] leading-[140%] text-[#111827] mb-[6px] max-w-[220px] w-full text-right'>Order Summary</p>
                        </div>

                       

                        <div className='max-w-[230px] mb-[14px] w-full flex items-center justify-between ml-auto font-PoppinsBold text-[16px]'>
                            <p>
                                Total
                            </p>
                            <p>
                                ₸ 1000000
                            </p>
                        </div>
                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default DocsModal

