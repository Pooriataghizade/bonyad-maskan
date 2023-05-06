import React from 'react'
import './MultipleFormAddHome.css'
import UploadFilde from './UploadFilde';

function AssignmentDouc() {
  return (
    <div>
      <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-10'>
                  <div className='flex items-center relative'>
                    <input  type='text' name='Assignor' id='Assignor'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='Assignor' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> *  شماره قرار داد</label>
                  </div>
                  <div className='flex items-center relative'>
                    <input   type='text' name='Participant' id='Participant' className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='Participant' className='absolute fontBold top-[-15px] left-[55%] xl:left-[355px] bg-white px-2 py-1'> * واگذار کننده</label>
                  </div>
            </div>
            <div className='dottedBorderLine my-9'></div>
            
            <UploadFilde/>
    </div>
  )
}

export default AssignmentDouc