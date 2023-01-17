import React from 'react'

const Modal = ({modalClassName , children}) => {
  return (
    <div className='w-screen h-screen bg-[#c4c4c4b3] fixed top-0 flex items-center'>
        <div className={`mx-auto max-w-[1200px] w-full bg-[#fff] h-[530px] my-auto rounded-[20px] ${modalClassName}`}>
          {children}
        </div>
    </div>
  )
}

export default Modal