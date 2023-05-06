import React from 'react'

import Oone from './../assets/img/Oone.png';
import Otwo from './../assets/img/Otwo.png';
import Othree from './../assets/img/Othree.png';
import Ofour from './../assets/img/Ofour.png';


const RequestBO = [
    {
        img : Oone,
        description : "درخواست خدمات فنی صدور پروانه"

    },{
        img:Otwo,
        description:"تعیین حدود و وضعیت",
    },{
        img:Othree,
        description:"درخواست امکان صدور پایانکار/عدم خلافی"
    },{
        img:Ofour,
        description:"درخواست امکان صدور پایانکار/عدم خلافی"
    }
]

function RequestBoxOrange() {
  return (
    <div className='flex flex-wrap justify-center flex-row-reverse items-center md:justify-start gap-5'>
        {RequestBO.map((item=>(
            <div className='border border-gray-200 items-center gap-2 px-5 py-4 flex flex-col rounded-lg'>
                <img src={item.img} className='max-w-full w-12 h-11'/>
                <p className='fontBold text-[14px] w-32 text-center line-clamp-1'>{item.description}</p>
            </div>
        )))}
    </div>
  )
}

export default RequestBoxOrange