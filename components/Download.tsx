"use client"

import { BsFillFileEarmarkPdfFill } from 'react-icons/bs'

export default function Download(){
    const Download = () => {
        const pdfUrl = '/documents/spec.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'McLaren 765LT Coupe Spec.pdf';
        link.click();
      }

    return(
        <button className='bg-[#292929] text-white p-5 rounded-xl shadow-xl flex justify-center items-center gap-2 transition-all duration-300 hover:bg-white/10' onClick={Download}>
        Download PDF
        <BsFillFileEarmarkPdfFill />
      </button>
    )
}