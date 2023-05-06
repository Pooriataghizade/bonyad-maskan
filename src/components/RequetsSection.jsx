import React from 'react'

function RequetsSection() {
  return (
    <div className='my-2 mx-auto shadow-md rounded-md fontBold w-[100%] py-2 bg-white'>
        <div className='text-end px-5 pt-1 mb-3'><span className='fontBold text-[21px]'> درخواست ها </span></div>
        <div className='flex justify-around pb-2 pt-1'>
            <div className='flex flex-col'>
                <span className='bg-[#E91919] px-2 py-[8px] text-center rounded-full text-white'>2</span>
                <span className='fontReg'>رد شده</span>
            </div>
            <div className='flex flex-col'>
                <span className='bg-[#FF8A00] mx-auto px-4 py-2 text-center rounded-full text-white'>7</span>
                <p className='fontReg'>نیاز به بازبینی</p>
            </div>
            <div className='flex flex-col'>
                <span className='bg-[#AAB7C6] px-3 py-[7px] mx-auto text-center rounded-full text-white'>23</span>
                <span className='fontReg'>در دست بررسی</span>
            </div>
            <div className='flex flex-col'>
                <span className='bg-greenLight px-2 py-[7px] text-center rounded-full text-white'>15</span>
                <span className='fontReg'>تکمیل</span>
            </div>
        </div>
    </div>
  )
}

export default RequetsSection