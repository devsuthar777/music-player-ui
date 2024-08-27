import React from 'react'

const SimmerUiSideBar = () => {
  return (
    <div className='simmerSideBar'>
        <div className='xl:w-[432px] w-full py-[16px] h-[80px] text-white flex justify-between'>
        <div className='flex gap-[16px]'>
            <div className='w-[48px] h-[48px] rounded-full bg-white fade-animation'  ></div>
            <div className=''>
                <p className='text-[18px] h-[18px] w-[100px] rounded-md leading-[24px] text-white bg-white fade-animation'></p>
                <p className='text-white text-[14px]  h-[14px] w-[100px]  bg-white mt-2 rounded-md fade-animation'></p>
            </div>
        
        </div>
        
        <p className='text-[18px]  bg-white h-[30px] w-[50px] rounded-md fade-animation'></p>
        
    </div>

    <div className='xl:w-[432px] w-full  py-[16px] h-[80px] text-white flex justify-between'>
        <div className='flex gap-[16px]'>
            <div className='w-[48px] h-[48px] rounded-full bg-white fade-animation'  ></div>
            <div className=''>
                <p className='text-[18px] h-[18px] w-[100px] rounded-md leading-[24px] text-white bg-white fade-animation'></p>
                <p className='text-white text-[14px]  h-[14px] w-[100px]  bg-white mt-2 rounded-md fade-animation'></p>
            </div>
        
        </div>
        
        <p className='text-[18px]  bg-white h-[30px] w-[50px] rounded-md fade-animation'></p>
        
    </div>

    </div>
  )
}

export default SimmerUiSideBar