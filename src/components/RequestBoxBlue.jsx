import React from 'react'
import BLUeOne from './../assets/img/BLUeOne.png';
import bLUeTwo from './../assets/img/bLUeTwo.png';
import BlueThree from './../assets/img/BlueThree.png';


const RequestBB = [
    {
        img : BLUeOne,
        description : "درخواست خدمات فنی صدور پروانه"

    },{
        img:bLUeTwo,
        description:"تعیین حدود و وضعیت",
    },{
        img:BlueThree,
        description:"درخواست امکان صدور پایانکار/عدم خلافی"
    }
]

function RequestBoxBlue() {
  return (
    <div className='flex flex-wrap justify-center flex-row-reverse items-center md:justify-start gap-5'>
        {RequestBB.map((item=>(
            <div className='border border-gray-200 items-center gap-2 px-5 py-4 flex flex-col rounded-lg'>
                <img src={item.img} className='max-w-full w-12 h-11'/>
                <p className='fontBold text-[14px] w-32 text-center line-clamp-1'>{item.description}</p>
            </div>
        )))}
    </div>
  )
}

export default RequestBoxBlue