import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

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
          duration: "300ms",
          timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        }}
        className={`mb-[40px] max-[540px]:mb-[10px] ${accordionClassName ? accordionClassName : ""}`}
      >
        <AccordionItem>
          {({ open }) => (
            <>

                <AccordionHeader
                  as={"div"}
                  className={`shadow-mobile w-full flex justify-between items-center text-gray-600 z-10 ${accordionHeaderClassName ? accordionHeaderClassName : ""
                    }`}
                >
                  <div className="font-bold text-left text-[20px] leading-[140%] w-full text-[#111827] max-[540px]:text-[16px]">
                    {title}
                  </div>
                  <svg class={`w-6 h-6 ${!open ? '' : 'rotate-90'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                </AccordionHeader>

                <AccordionBody>
                  <div
                    className={`font-light text-left w-full py-[20px] ${accordionBodyClassname ? accordionBodyClassname : ""
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