import React from 'react'
import userIdentiti from './../../assets/img/userIdentiti.png';

function UserItem() {
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
           <span className='fontReg text-[15px]'>  اطلاعات هویتی  </span>
           <img className='max-w-full w-5'  src={userIdentiti}/>
         </div>
    </div>
  )
}

export default UserItem