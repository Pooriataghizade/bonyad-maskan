import React from 'react'
import map from './../assets/img/map.png';
function Location() {
  return (
    <div className='bg-white flex-col md:flex-row-reverse flex  my-4 mb-4 mx-auto shadow-md rounded-md pb-8 pt-5 px-2 w-[95%]'>
        <div className='md:w-[60%] w-[100%] text-end px-1'>
            <h2 className='text-[21px] fontBold text-blueMain'>ساختمان تجاری بهار</h2>
            <div className='flex flex-col mt-3'>
                <div className='border-b border-gray-200 flex flex-col md:flex-row-reverse justify-between px-5 pl-32 pb-2 md:mx-0  mx-auto'>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px]'>تهران</span>
                        <span className='fontBold text-[15px]'>استان</span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px]'>تهران</span>
                        <span className='fontBold  text-[15px]'>شهرستان</span>
                    </div>
                </div>
                <div className='border-b border-gray-200 flex flex-col md:flex-row-reverse  md:justify-between justify-center px-5 pl-32 pb-2 mt-2 md:mx-0  mx-auto'>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px]'>مرکزی</span>
                        <span className='fontBold text-[15px]'>بخش</span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px]'>تهران</span>
                        <span className='fontBold  text-[15px]'>دهستان | شهر</span>
                    </div>
                </div>
                <div className='border-b border-gray-200 flex flex-col md:flex-row-reverse md:justify-between justify-center px-5 md:mx-0  mx-auto pl-32  pb-2 mt-2'>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px]'>تهران</span>
                        <span className='fontBold text-[15px]'>روستا | شهر </span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px]'>250 مترمربع</span>
                        <span className='fontBold  text-[15px]'> مساحت زمین </span>
                    </div>
                </div>
                <div className='border-b border-gray-200 flex flex-col md:flex-row-reverse md:justify-between px-5 pb-2 md:mx-0  mx-auto mt-2'>
                    <div className='flex gap-5 pl-32 md:pl-0'>
                        <span className='fontReg text-[15px]'>سند شش دنگ</span>
                        <span className='fontBold text-[15px]'> نوع مالکیت  </span>
                    </div>
                    <div className='flex gap-5'>
                        <span className='fontReg text-[15px] md:w-[50%]'>میدان ولیعصر، بلوار کشاورز، خیابان فلسطین شمالی، خیابان غفاری  </span>
                        <span className='fontBold  text-[15px]'>  آدرس </span>
                    </div>
                </div>
            </div>
        </div>
        <div className='md:w-[40%] w-[50%] mx-auto'>
            <img className='max-w-full' src={map}/>
        </div>
    </div>
  )
}

export default Location