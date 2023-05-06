import React from 'react'
import homeIcon from './../../assets/img/homeIcon.png'

function HomeItwm() {
  return (
    <div>
        <div className='flex forH items-center
          justify-end
          gap-4
         py-2 px-2
         mx-3
         cursor-pointer
         w-[100%]'>
          <span className='fontReg text-[15px]'> مدیریت املاک </span>
          <img className='max-w-full
             w-5'  src={homeIcon}/>
        </div>
    </div>
  )
}

export default HomeItwm