import React,{useState} from 'react'
import './propertyList.css'
import CompeletBtn from './CompeletBtn';
import ViewFunc from './ViewFunc';
import ChackAgainBtn from './ChackAgainBtn';
import arrowProperty from './../assets/img/arrowProperty.png';
function RequestHistory() {
    const [openRequst , setOpenRequst ] = useState ( false );
  return (
    <div>
        <div className='bg-white w-[95%] my-2 mx-auto hidden xl:flex shadow-md rounded-md py-2'>
        <div onClick={()=>setOpenRequst(!openRequst)} className={openRequst ? "property-dropdown" : "property-dropdown-open"}>
        <div className='flex items-center
          justify-between
          cursor-pointer py-2'>
            <div>
              <svg className={openRequst ? "flex" : "togglebtnProperty"}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
            <div className='flex gap-4 mr-[6px] mb-3'>
            <h2 className='text-[21px] fontBold'> تاریخچه درخواست ها </h2>
            </div>
          </div>

          <div className={openRequst ? "proprty-content" : "proprty-open"}>
            
                
                    
                <div className='flex flex-col justify-center'>
                    <div className='justify-between  flex   items-center md:flex-row-reverse text-end border-b border-gray-300 pb-2'>
                        <span className='fontBold w-[30%]'>نوع درخواست</span>
                        <span className='fontBold w-[20%]'>تاریخ ثبت </span>
                        <span className='fontBold w-[20%]'> وضعیت </span>
                        <span className='fontBold w-[20%]'> کدرهگیری </span>
                        <span className='fontBold w-[20%]'> عملیات </span>
                    </div>
                    <div className='justify-between flex flex-row-reverse items-center text-end mt-2'>
                        <span className='fontReg w-[30%]'> درخواست تعیین حدود وضعیت</span>
                        <span className='fontReg w-[20%]'> 12 آبان 1401   </span>
                        <div className='w-[20.8%] mx-auto'><span className='fontBold '><CompeletBtn/></span></div>
                        <span className='fontReg w-[20%]'>2135790264</span>
                        <div className='w-[20%] mx-auto'><span><ViewFunc/></span></div>
                    </div>
                    <div className='justify-between flex flex-row-reverse items-center text-end mt-2'>
                        <span className='fontReg w-[30%]'> درخواست تعیین حدود وضعیت</span>
                        <span className='fontReg w-[20%]'> 12 آبان 1401   </span>
                        <div className='w-[20.8%] mx-auto ml-12'><span><ChackAgainBtn/></span></div>
                        <span className='fontReg w-[20%]'>2135790264</span>
                        <div className='w-[20%] mx-auto'><span><ViewFunc/></span></div>
                    </div>

                    <div className='flex gap-2 justify-center fontBold mt-6'>
                    <img src={arrowProperty} className='max-w-full'/>
                    <a className='text-blueMain text-[15px]'>مشاهده همه ی موارد</a>
                </div>
                </div>
            
                
          </div>
    </div>
    </div>
    </div>
  )
}

export default RequestHistory