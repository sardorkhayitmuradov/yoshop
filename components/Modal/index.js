import React, { useContext} from 'react';
import Image from 'next/image';
import { ModalContext } from '../../context/modal';
import modalStickIcon from '../../public/assets/images/modalStick.svg'

const Modal = () => {
  const { visible, setVisible } = useContext(ModalContext);
  const modal = () => {
    setVisible(false)
  }

  return (
    <>
      <div
        className={`${visible ? "z-10 fixed top-[-50px] w-full h-[120vh] bg-[#000000] opacity-60": "hidden" }`}
        onClick={modal}
      ></div>
      <div
        className={`${visible ? "ease-linear  duration-[300ms] font-PoppinsRegular shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] fixed z-20 bg-[#fff] py-[50px] pb-[100px] px-[40px] min-h-[300px] w-[728px] right-36 text-[#111827] top-[100px] rounded-[10px] border border-solid border-[#F9F9FB]": "hidden" }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex justify-between">
            <Image
              src={modalStickIcon}
              alt='modal-stick'
              width={40}
              height={40}
              className='absolute right-0 -top-20'
            />
          <div className="max-w-[370px]">
            <h3 className="text-[16px] font-[700] ">
              My Cart
            </h3>

            <div className="border-y border-solid border-[#fff] flex items-center py-[10px]">
              <h2 className="text-[16px] font-[700] ml-4 ">
                YoShop Mobile Lisence
              </h2>
            </div>
          </div>
          <div className="max-w-[203px] w-full">
            <h3 className="text-[16px] leading-[140%] font-PoppinsBold border-[#9CA3AF]">
              Order Summary
            </h3>
            <div className="border-y border-solid border-[#9CA3AF] pt-[16px] pb-[24px] font-PoppinsRegular text-[14px] leading-[25px]">
              <div className="modalInfotexts flex items-center justify-between ">
                <p className="">
                  Subtotal
                </p>
                <p className="">
                  ₸ 3 000
                </p>
              </div>
              <div className="modalInfotexts flex items-center justify-between ">
                <p className="">
                  Period
                </p>
                <p className="">
                  Monthly
                </p>
              </div>
              <div className="modalInfotexts flex items-center justify-between ">
                <p className="">
                  Amount
                </p>
                <p className="">
                  1
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[40px]">
              <p className="">
                Total
              </p>
              <p className="">
                ₸ 6 500
              </p>
            </div>

            <button className="bg-[#7D66BB] text-white font-PoppinsBold py-[5px] w-full rounded-[10px] text-[14px] leading-[140%]">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;