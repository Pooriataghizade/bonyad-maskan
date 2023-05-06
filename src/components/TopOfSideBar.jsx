import React from 'react'
import './sidebar.css';
import bill from './../assets/img/billGreen.png'
import DropDownSide from './DropDownSide';

function TopOfSideBar() {
  return (
    <div>
        <div className='top my-2'>
      <div className='border 
        py-2   px-5 mx-2
           border-gray 
           rounded-md
           flex flex-col
           text-center'>
              <h2 className='fontBold 
              text-[19px]
              mb-1'>پوریا تقی زاده</h2>
              <span className='fontBold fontReg
               text-graytxt
                text-[15px]
                mb-1'>09910310622</span>
              <div className='bg-GreenBOXbILL
               flex flex-row-reverse
               items-center
               rounded-xl
               gap-2
               mx-auto p-3 px-5'>
                  <img src={bill} className='max-w-full w-5'/>
                  <span className='text-GreenTXTbiLL
                   fontBold text-[12px] xl:text-[15px]
                   '>شما 8 اعلان جدید دارید</span>
              </div>  
              <div className='xl:hidden'>
                  <DropDownSide/>
              </div>
      </div>
    </div>
    </div>
  )
}

export default TopOfSideBar