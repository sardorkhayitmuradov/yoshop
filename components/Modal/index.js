import React, { useContext } from 'react';
import Image from 'next/image';
import { ModalContext } from '../../context/modal';
import modalStickIcon from '../../public/assets/images/modalStick.svg';
import Button from '../Button/Button';
import { useSelector } from "react-redux";
import Link from 'next/link';

const Modal = () => {
  let cart = useSelector((store) => store.carts.cart);
  let carts = useSelector((store) => store.carts)

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
        className={`${visible ? "ease-linear  duration-[300ms] font-PoppinsRegular shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] fixed z-[31] bg-[#fff] py-[40px] pb-[40px] px-[40px] min-h-[300px] w-[728px] right-36 text-[#111827] top-[90px] rounded-[10px] border border-solid border-[#F9F9FB]" : "hidden"}`}
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

            {cart.licenses.length > 0 ? (
              cart.licenses.map((cart) => {
                return (
                  <div
                    key={cart.id}
                    className="flex items-center justify-between w-full border-b border-solid border-[#9CA3AF] py-[15px] mb-[15px]"
                  >
                    <div className="text-[16px] leading-[140%] font-PoppinsBold text-[#111827] max-w-[255px] w-full">
                      {cart.name}
                    </div>
                    <p className="text-[16px] leading-[140%] font-PoppinsBold text-[#111827] w-[50px]">
                      x {cart.qty}
                    </p>
                    <div className="flex flex-col justify-between max-w-[220px] w-full">
                      <div className="flex items-center justify-between">
                        <p className="text-[14px] leading-[140%] text-[#111827]">
                          Period
                        </p>
                        <p className="text-[14px] leading-[140%]">
                          {cart.period}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[14px] leading-[140%] text-[#111827]">
                          Users
                        </p>
                        <p className="text-[14px] leading-[140%]">
                          + {cart.cashier.qty >= cart.qty *2 ? (cart.cashier.qty - (cart.qty * 2)) : cart.cashier.qty}
                        </p>
                        <p className="text-[14px] leading-[140%]">
                        ₸ {cart.cashier.price}
                        </p>
                      </div>

                      <div>
                        {
                          cart.products > 0 ? <p className="text-[14px] leading-[140%] text-[#111827]">
                          Equipments:
                        </p> : ""
                        }
                        {
                          cart.products.length > 0 ?
                            (cart.products.map((p, i) => {
                              return (
                                <>
                                  <div className="flex items-center justify-between" key={i}>
                                    <div className="text-[14px] leading-[140%] text-[#111827] flex items-center">
                                      <Image src={p.image} width={20} height={23} alt='product' />
                                      <p>{p.name || p.title}</p>
                                    </div>
                                    <p className="text-[14px] leading-[140%]">
                                      + {p.qty}
                                    </p>
                                    <p className="text-[14px] leading-[140%]">
                                    ₸ {p.price}
                                    </p>
                                  </div>
                                </>
                              );
                            }))
                            : ""
                        }
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[14px] leading-[140%] text-[#111827]">
                          Subtotal
                        </p>
                        <p className="text-[14px] leading-[140%]">
                          {cart.subTotal}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-between w-full border-b border-solid border-[#9CA3AF] py-[15px] mb-[15px]">
                <div className="text-[16px] leading-[140%] font-PoppinsBold text-[#111827] max-w-[255px] w-full">
                  No licences yet ....
                </div>
              </div>
            )}

              {cart.products.length > 0 ? (
              cart.products.map((product) => {
                return (
                  <div key={product.id} className='flex items-center justify-between w-full border-b border-solid border-[#9CA3AF] py-[15px]'>
                    <div className='text-[16px] leading-[140%] font-PoppinsBold text-[#111827] max-w-[255px] w-full flex items-center'>
                      <Image src={product.image} alt='cart-icon' width={50} height={50} className='mr-[10px]' />
                      <p>{product.name}</p>
                    </div>
                    <p className='text-[16px] leading-[140%] font-PoppinsBold text-[#111827] w-[50px]'>x {product.qty}</p>
                    <div className='flex items-center justify-between max-w-[220px] w-full'>
                      <p className='text-[14px] leading-[140%] text-[#111827]'>Subtotal</p>
                      <p className='text-[14px] leading-[140%]'>₸ {product.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-between w-full border-b border-solid border-[#9CA3AF] py-[15px] mb-[15px]">
                <div className="text-[16px] leading-[140%] font-PoppinsBold text-[#111827] max-w-[255px] w-full">
                  No products yet ....
                </div>
              </div>
            )}

            <div className='max-w-[230px] mb-[14px] w-full flex items-center justify-between ml-auto font-PoppinsBold text-[16px]'>
              <p>
                Total
              </p>
              <p>
                ₸ {carts.totalPrice}
              </p>
            </div>
            <Link href={'/cart'} className={'cursor-pointer ml-auto font-PoppinsBold max-w-[230px] w-full text-white text-[14px] flex justify-center items-center bg-[#7D66BB] border-solid border-x border-y border-[#fff] py-[7px] px-[22px] rounded-[10px]'} onClick={modal}>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;