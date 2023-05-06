import React,{useState} from 'react'
import './propertyList.css'
import RequestBoxBlue from './RequestBoxBlue';
import blueInfo from './../assets/img/blueInfo.png';
import RequestBoxGreen from './RequestBoxGreen';
import RequestBoxOrange from './RequestBoxOrange';
import RequestBoxRed from './RequestBoxRed';

function RequestRegistration() {
    const [openNRR , setOpenNRR ] = useState ( false );

  return (
    <div>
        <div className='bg-white w-[95%] my-4 mx-auto shadow-md rounded-md py-2'>
        <div onClick={()=>setOpenNRR(!openNRR)} className={openNRR ? "property-dropdown" : "property-dropdown-open"}>
        <div className='flex items-center
          justify-between
          cursor-pointer py-2'>
            <div>
              <svg className={openNRR ? "flex" : "togglebtnProperty"}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
            <div className='flex gap-4 mr-[6px] mb-3'>
            <h2 className='text-[21px] fontBold'> ثبت درخواست جدید </h2>
            </div>
          </div>

          <div className={openNRR ? "proprty-content" : "proprty-open"}>
                <div className='flex gap-2 items-center flex-row-reverse text-end fontBold'>
                    <img src={blueInfo} className='max-w-full w-4 h-4'/>
                    <p>اگر برای ثبت درخواست جدید اطلاعات کافی ندارید، می‌توانید از <span className='text-orange-500'>راهنمای ثبت درخواست</span> کمک بگیرید.</p>
                </div>
                <h3 className='fontBold text-end text-[20px] my-2 mx-2'>خدمات فنی صدور پروانه ساختمانی</h3>
                
                <RequestBoxBlue/> 
                
                <h3 className='fontBold text-end text-[20px] my-2 mx-2'> تسهیلات</h3>

                <RequestBoxGreen/>

                <h3 className='fontBold text-end text-[20px] my-2 mx-2'> فنی و مهندسی</h3>

                <RequestBoxOrange/>

                <h3 className='fontBold text-end text-[20px] my-2 mx-2'>  خدمات مالکیتی </h3>

                <RequestBoxRed/>

          </div>
    </div>
    </div>
    </div>
  )
}

export default RequestRegistration