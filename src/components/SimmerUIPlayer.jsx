import React from 'react'

const SimmerUIPlayer = () => {
  return (
    <>
        <div className='w-[193px] h-[68px] flex flex-col gap-[8px]'>
        <h1 className='h-[32px] w-[150px] bg-white fade-animation rounded-lg'></h1>
        <p className='h-[16px] w-[150px]] bg-white fade-animation rounded-lg'></p>
      </div>
      <div className='w-full h-[510px] rounded-md'>
       <div className='w-[480px] h-[480px] rounded-md bg-white fade-animation'>
       </div>
       </div>
    </>

    
  )
}

export default SimmerUIPlayer