import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

  return (
    <div className="py-[140px] max-w-[1230px] mx-auto">
      <div className="pdf-controls mx-auto max-w-[300px] flex items-center justify-between w-full mb-4">
        <button onClick={handlePrevPage} className='border border-solid border-pink-600 text-pink-600 p-1 rounded-md'>Previous</button>
        <span>
          Page {currentPage} of {numPages}
        </span>
        <button onClick={handleNextPage} className='border border-solid border-pink-600 text-pink-600 p-1 rounded-md'>Next</button>
      </div>
      <Document
        file={'/assets/files/manual.pdf'}
        onContextMenu={(e) => e.preventDefault()}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={currentPage} />
      </Document>
    </div>
  );
}