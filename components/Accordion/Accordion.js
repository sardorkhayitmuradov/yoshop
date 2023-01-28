import React from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";
// import Image from 'next/image';
// import PlusIcon from '../../public/assets/images/plus.svg'
// import CancelIcon from '../../public/assets/images/cancel.svg'

const AccordionWrapper = ({ title, content }) => {

  return (
    <Accordion transition={{ duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)" }} className='mb-[30px]'>
      <AccordionItem>
        {({ open }) => (
          <>
            <AccordionHeader className="w-full flex justify-between items-center text-gray-600 mb-[26px]">
              <span className='font-PoppinsBold text-[20px] leading-[140%] text-[#111827]'>{title}</span>
              <svg className={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </AccordionHeader>

            <AccordionBody>
              <div className="font-light text-left max-w-[314px] w-full">
                {
                  content
                }
              </div>
            </AccordionBody>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWrapper;