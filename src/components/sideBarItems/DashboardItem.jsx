import React, { useState } from 'react'
import dashboardblue from './../../assets/img/dashboardblue.png';
import './dashboardItem.css';

function DashboardItem() {
 
  return (
    <div>
        <div className='forH
         flex items-center
          mx-3
         w-[100%]
          justify-start
          cursor-pointer
          gap-4
         flex-row-reverse
         py-2 px-2
         rounded-md'>
            <img src={dashboardblue} className='max-w-full
             w-5 pr-1'/>
            <span className='fontReg text-[15px]'> داشبورد</span>
        </div>
    </div>
  )
}

export default DashboardItem