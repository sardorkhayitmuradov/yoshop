import React from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const AccordionWrapper = ({ title, imgColor ,accordionClassName , accordionHeaderClassName , accordionBodyClassname , children }) => {

  return (
    <Accordion transition={{ duration: "300ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)" }} className={`mb-[30px] ${accordionClassName ? accordionClassName : ""}`}>
      <AccordionItem>
        {({ open }) => (
          <>
            <AccordionHeader className={`w-full flex justify-between items-center text-gray-600 z-10 ${accordionHeaderClassName ? accordionHeaderClassName : ""}`}>
              <div className='font-PoppinsBold text-left text-[20px] leading-[140%] w-full text-[#111827]'>{title}</div>
              <svg className={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" color={imgColor ? imgColor: ""} d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </AccordionHeader>

            <AccordionBody>
              <div className={`font-light text-left w-full py-[20px] ${accordionBodyClassname ? accordionBodyClassname : ""}`}>
                {
                  children
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