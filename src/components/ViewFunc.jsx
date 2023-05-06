import React from 'react'
import eyeview from './../assets/img/eyeview.png'

function ViewFunc() {
  return (
    <div className='flex gap-2 ml-32 items-center'>
        <span className='fontReg text-blueMain'>مشاهده</span>
        <img src={eyeview} className='max-w-full w-4 h-4'/>
    </div>
  )
}

export default ViewFunc