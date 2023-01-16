import React, { useState } from 'react';
import Image from 'next/image';
import PlusIcon from '../../public/assets/images/plus.svg'
import CancelIcon from '../../public/assets/images/cancel.svg'

const Accordion = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <div className="mb-[26px] py-[23px] pl-[42px] shadow-sm cursor-pointer bg-[#24242C] border-[1px] rounded-[10px] border-[#94A3B8] text-black" onClick={toggleExpanded}>
      <div className="text-left items-center select-none flex justify-between">
        <div className="mr-[208px]">{expanded ? <Image src={CancelIcon} width={20} height={20} alt='Cancel Icon' /> : <Image src={PlusIcon} width={20} height={20} alt='Plus Icon' />}</div>
        <h5 className="poppins text-[20px] leading-[180%] text-[#F9F9FB] flex-1">
          {title}
        </h5>
      </div>
      <div className={`ml-[230px] overflow-hidden max-w-[582px] w-full transition-[max-height] duration-200 ease-in ${expanded ? "h-full" : "h-0"}`}>
        <p className="text-start mb-[43px] poppins text-[18px] leading-[180%] text-[#F9F9FB]">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Accordion