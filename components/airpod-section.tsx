import React from 'react'
import s from '../styles/Airpod.module.css'
import Image from 'next/image'

const AipordSectionPro = () => {
  return (
     <div className={`bg-white lg:min-h-[550px] min-h-[550px] xl:min-h-[570px] 2xl:max-h-[550px] min-w-[90%] mt-6 box-border rounded-2xl flex flex-col justify-center items-center overflow-hidden px-10 mx-auto top-3`}>
      <div className='relative lg:top-64 top-96'><h1 className='text-3xl text-[#1D1D1D] md:text-9xlsm:text-8xl lg:text-[13rem] font-SfBold'>Airpod Max</h1></div>
      <div className=' mx-auto relative max-w-full max-h-full inset-0'>
      <Image src={`/images/airpods_max__f265q4g4ddym_large.png`} alt="airpod-max" height={1800 / 3} width={1600 / 3}/>
      </div>
     </div> 
  )
}

export default AipordSectionPro