import React from 'react'

const AirpodVidComp = () => {
  return (
    <div className='lg:min-h-[550px] min-h-[550px] xl:min-h-[550px] 2xl:max-h-[550px] min-w-[90%] mt-6 box-border rounded-2xl flex flex-col justify-center items-center overflow-hidden px-5 mx-auto  aspect-h-1 aspect-w-3 top-3'>
     <video controlsList='' autoPlay loop muted playsInline className='absolute object-cover inset-0 md:aspect-square'>
      <source src="/video/large_2x.mp4" type='video/mp4;codecs=hvc'/>
      <source src="/video/large_2x.webm" type='video/webm;codecs=vp9'/>
     </video>
    <div className='flex flex-col justify-center items-center max-h-[80%] max-w-[80%] relative my-auto lg:top-[240px] top-[180px]'>
    <span className='rounded-2xl border-2 border-[#F56A0B] w-12 h-7 text-[#F56A0B] flex flex-col items-center justify-center'>New</span>
     <div className='font-SfBold lg:text-8xl md:text-6xl text-6xl text-[#1D1D1F]'>AirPods</div>
     <div className='text-2xl font-SfSemiBold'>3rd generation</div>
     <div className='mt-8 flex flex-row space-x-4'>
        <button className='rounded-3xl bg-blue-800 w-28 h-10 text-white flex flex-row items-center justify-center'>Buy</button>
        <span className='text-md lg:text-3xl text-blue-800 hover:underline'>Learn more </span>
     </div>
    </div>
   </div>
  )
}

export default AirpodVidComp 