import React from 'react'
import addToProperty from './../assets/img/addToProperty.png';

function AddHome() {
  return (
    <div className='w-[300px] h-[120px] rounded-lg flex flex-col py-4 px-5 border border-dotted border-blueMain'>
        <div className='flex items-center justify-center gap-2 mt-8'>
            <img src={addToProperty} className='max-w-full w-4 h-4'/>
            <span className='fontBold text-blueMain text-[15px]'>افزودن ملک جدید</span>
        </div>
    </div>
  )
}

export default AddHome