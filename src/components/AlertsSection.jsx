import React , { useState } from 'react'
import sucsess from './../assets/img/sucsess.png';
import error from './../assets/img/error.png';
import info from './../assets/img/info.png';

import './alertSection.css'

function AlertsSection() {
    const [openAlert , setOpenAlert ] = useState ( false );
  return (
    <div className='alertSection my-4 mb-4 mx-auto shadow-md rounded-md pb-8 pt-5'>
        <div onClick={()=>setOpenAlert(!openAlert)} className={openAlert ? "alert-dropdown" : "alert-dropdown-open"}>
        <div className='flex items-center
          justify-between
          cursor-pointer'>
            <div>
              <svg className={openAlert ? "flex" : "togglebtnAlert"}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
            <div className='flex gap-4 mr-[6px]'>
            <span className='fontBold text-[25px]'>اعلانات</span>
            </div>
          </div>

          <div className={openAlert ? "alert-content" : "alert-open"}>
            <ul className='text-end fontReg text-[15px] flex flex-col gap-2 w-[100%] '>
              <li className='mt-2 cursor-pointer flex p-1 rounded-lg w-[100%]
               gap-3 flex-row-reverse items-center bg-infoBgAlert'>
                <img src={info} className='max-w-full w-4 h-4'/>
                <span className='fontReg text-infoTxtAlert'>درخواست تسهیلات طرح ویژه بهسازی و مسکن روستایی
                   کد رهگیری 6531279513 نیاز به بازبینی و تکمیل مدارک دارد</span> 
              </li>
              <li className='cursor-pointer flex  p-1 rounded-lg
              gap-3 flex-row-reverse items-center bg-successBgAlert'>
              <img src={sucsess} className='max-w-full w-4 h-4'/>
                <span className='fontReg text-successTxtAlert '>درخواست خدمات فنی صدور پروانه برای 
                تخریب و نوسازی ملک مورد تائید قرار گرفت.</span> 
              </li>
              <li className='cursor-pointer flex  p-1 rounded-lg
              gap-3 flex-row-reverse items-center bg-errorBgAlert'> 
              <img src={error} className='max-w-full w-4 h-4'/>
                <span className='fontReg text-errorTxtAlert '>مدارک مالکیتی ثبت شده برای ملک با شناسه 5312 مو
                رد تائید واقع نشد و نیاز به بررسی دارد.</span> 
              </li>
 
            </ul>
          </div>
    </div>
    </div>
  )
}

export default AlertsSection