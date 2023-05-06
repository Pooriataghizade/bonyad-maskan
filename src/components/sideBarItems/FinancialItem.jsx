import React from 'react'
import moneyStaff from './../../assets/img/moneyStaff.png'

function FinancialItem() {
  return (
    <div>
        <div className='flex items-center
          justify-end
          forH
          gap-4
          mx-3
          cursor-pointer
          py-2 px-2
          w-[100%]'>
           <span className='fontReg text-[15px]'>  امور مالی </span>
           <img className='max-w-full w-5'  src={moneyStaff}/>
         </div>
    </div>
  )
}

export default FinancialItem