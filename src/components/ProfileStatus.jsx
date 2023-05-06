import React from 'react'
import circleCeckPROGRESSBAR from './../assets/img/circleCeckPROGRESSBAR.png'

function ProfileStatus() {
  return (
    <div className='my-2 pb-4 pt-3 mx-auto shadow-md rounded-md fontBold w-[100%] bg-white'>
        <div className='text-end px-5 pt-1 mb-1'><span className='fontBold text-[21px]'>  وضعیت پروفایل </span></div>
        <div className='w-full flex flex-row-reverse items-center py-5 relative mx-[4px]'>
            <div className='w-[90%] bg-blueMain h-2 rounded-full mx-auto'></div>
            <div className='bg-blueMain rounded-full text-white px-[5px] py-1 absolute right-[90%]'><span className='text-[10px]'>100%</span></div>
        </div>
        <div className='flex items-center flex-row-reverse px-4 gap-2'>
          <img src={circleCeckPROGRESSBAR} className='max-w-full'/>
          <span className='text-[12px]'> اطلاعات حساب کاربری شما تکمیل و تائید شده است </span>
        </div>
    </div>
  )
}

export default ProfileStatus