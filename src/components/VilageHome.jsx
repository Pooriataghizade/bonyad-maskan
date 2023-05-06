import React from 'react'

function VilageHome() {
  return (
    <div className='bg-gray-100 w-[300px] rounded-lg flex flex-col py-4 px-5'>
        <div><h4 className='text-end text-[15px] text-blueMain fontBold'> ساختمان تجاری بهار</h4></div>
        <div className='flex flex-col '>
            <div className='flex gap-2 justify-end'>
                <span className='fontReg text-[11px]'> موقعیت      البرز، کرج، بخش مرکزی، کمال آباد، آتشگاه   </span>
                <span className='fontBold text-[13px]'>موقعیت</span>
            </div>
            <div className='flex gap-2 justify-end'>
                <span className='fontReg text-[11px]'>   سند شش دنگ </span>
                <span className='fontBold text-[13px]'>مالکیت</span>
            </div>
            <div className='flex gap-2 justify-end'>
                <span className='fontReg text-[11px]'>  675 متر مربع </span>
                <span className='fontBold text-[13px]'>متراژ</span>
            </div>
        </div>
    </div>
  )
}

export default VilageHome