import React from 'react'
import support from './../../assets/img/support.png';

function SupportItem() {
  return (
    <div>
        <div className='flex items-center
          justify-end
          gap-4
          mx-3
          cursor-pointer
         py-2 px-2
         forH
         w-[100%]'>
           <span className='fontReg text-[15px]'>  پشتیبانی </span>
           <img className='max-w-full w-5'  src={support}/>
         </div>
    </div>
  )
}

export default SupportItem