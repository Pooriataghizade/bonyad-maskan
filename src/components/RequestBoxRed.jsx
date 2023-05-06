import React from 'react'
import redonde from './../assets/img/redonde.png';
import redtwo from './../assets/img/redtwo.png';
import redthree from './../assets/img/redthree.png';
const RequestBR = [
    {
        img:redonde,
        description : "صدور سند",
    },
    {
        img:redtwo,
        description:"قرارداد واگذاری",
    },
    {
        img:redthree,
        description:"قرارداد اجاره",
    }
]
function RequestBoxRed() {
  return (
    <div className='flex flex-wrap flex-row-reverse items-center justify-center md:justify-start gap-5'>
        {RequestBR.map((item=>(
            <div className='border border-gray-200 items-center gap-2 px-5 py-4 flex flex-col rounded-lg'>
                <img src={item.img} className='max-w-full w-12 h-11'/>
                <p className='fontBold text-[14px] w-32 text-center line-clamp-1'>{item.description}</p>
            </div>
        )))}
    </div>
  )
}

export default RequestBoxRed