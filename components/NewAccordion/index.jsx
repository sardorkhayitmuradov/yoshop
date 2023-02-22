import React from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'react-headless-accordion';
// import Button from "../Button/Button";
// import { CalculatorProduct } from "../CalculatorProduct";
// import { addEquipments, removeEquipments } from "../../redux/features/carts";
// import { useSelector, useDispatch } from "react-redux";

const NewAccordion = ({
  title,
  accordionClassName,
  accordionHeaderClassName,
  accordionBodyClassname,
  children,
}) => {
  return (
    <>
      <Accordion
        alwaysOpen={true}
        transition={{
          duration: '300ms',
          timingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        }}
        className={`mb-[40px] ${accordionClassName ? accordionClassName : ''}`}
      >
        <AccordionItem>
          {({ open }) => (
            <>
              <AccordionHeader
                as={'div'}
                className={`w-full flex justify-between items-center text-gray-600 z-10 ${
                  accordionHeaderClassName ? accordionHeaderClassName : ''
                }`}
              >
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 48 48'
                  className={`${!open ? '' : 'rotate-45'}`}
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M24 8V24M24 24V40M24 24H40M24 24H8'
                    stroke='#111827'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <div className='font-bold text-left text-[20px] leading-[140%] max-w-[80%] w-full text-[#111827]'>
                  {title}
                </div>
              </AccordionHeader>

              <AccordionBody>
                <div
                  className={`font-light text-left py-[20px] ml-auto max-w-[80%] w-full ${
                    accordionBodyClassname ? accordionBodyClassname : ''
                  }`}
                >
                  {children}
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default NewAccordion;
