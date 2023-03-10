import React,{ useContext } from 'react';
import Image from 'next/image'
import { ModalContext as Modal } from '../../context/CheckoutModal';

const CheckoutModal = ({children , ModalClassName}) => {
    const { visible, setVisible } = useContext(Modal);

  return (
    <>
        <div
              className={`${visible ?  "fixed w-screen h-screen top-0 left-0 bg-[#e1e1e1] opacity-80 z-[20]" : "hidden"}`}
              onClick={() => setVisible(!visible)}
            ></div>
            <div className={`${visible ? `absolute flex top-[10%] items-center justify-center left-0 right-0 mx-auto ${ModalClassName}  bg-[#ffff] z-50 shadow-xl` : "hidden"}`}>
              <div>
                {children}
              </div>
            </div>
    </>
  )
}

export default CheckoutModal