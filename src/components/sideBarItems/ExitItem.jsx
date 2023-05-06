import React from 'react'
import exit from './../../assets/img/exit.png';
function ExitItem() {
  return (
    <div>
        <div className='flex items-center
          justify-end
          gap-4
          mx-3
          cursor-pointer
          forH
         py-2 px-2 w-[100%]'>
           <span className='fontReg text-weak text-[15px]'>  خروج </span>
           <img className='max-w-full w-5'  src={exit}/>
         </div>
    </div>
  )
}

export default ExitItem