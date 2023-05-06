import React from 'react'
import GreenOne from './../assets/img/GreenOne.png';
import GreenTwo from './../assets/img/GreenTwo.png';
const RequestBG = [
    {
        img:GreenOne,
        description:"تسهیلات قرض الحسنه",
    },{
        img:GreenTwo,
        description:"تسهیلات قرض الحسنه"
    }
]
function RequestBoxGreen() {
  return (
    <div className='flex flex-wrap justify-center flex-row-reverse items-center md:justify-start gap-5'>
        {RequestBG.map((item=>(
            <div className='border border-gray-200 items-center gap-2 px-5 py-4 flex flex-col rounded-lg'>
                <img src={item.img} className='max-w-full w-12 h-11'/>
                <p className='fontBold text-[14px] w-32 text-center line-clamp-1'>{item.description}</p>
            </div>
        )))}
    </div>
  )
}

export default RequestBoxGreen