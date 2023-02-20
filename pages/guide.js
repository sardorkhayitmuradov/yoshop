import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import  {CalculatorProduct}  from "../components/CalculatorProduct";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
    },
  };
}

export default function Guide() {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(0.4);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleNextPage() {
    if (numPages) {
      const nextPage = Math.min(numPages, currentPage + 1);
      setCurrentPage(nextPage);
    }
  }

  function handlePrevPage() {
    const nextPage = Math.max(1, currentPage - 1);
    setCurrentPage(nextPage);
  }

  function handleScaleIncrement() {
    if (scale < 0.9) {
      setScale(scale + 0.1);
    }
  }

  function handleScaleDecrement() {
    if (scale > 0.2) {
      setScale(scale - 0.1);
    }
  }

  return (
    <div className="py-[140px] max-w-[1230px] mx-auto ">
      <div className="pdf-controls mx-auto max-w-[600px] flex items-center justify-between w-full mb-4">
        <button onClick={handlePrevPage} className='border border-solid border-pink-600 text-pink-600 p-1 rounded-md'>Previous</button>
        <span>
          Page {currentPage} of {numPages}
        </span>
        <button onClick={handleNextPage} className='border border-solid border-pink-600 text-pink-600 p-1 rounded-md'>Next</button>
        <div> 
        <CalculatorProduct
                    decrementItem={handleScaleDecrement}
                    wrapClass={"!mx-4"}
                    quantity={`${Math.round(scale*100)}%`}
                    incrementItem={handleScaleIncrement}
                  />
        </div>
      </div>
      <Document
        file={'/assets/files/manual.pdf'}
        onContextMenu={(e) => e.preventDefault()}
        onLoadSuccess={onDocumentLoadSuccess}
      >
       <div className='grid place-items-center'>
       <Page pageNumber={currentPage} scale={scale} loading="Please wait loading..."/>
       </div>
      </Document>
    </div>
  );
}