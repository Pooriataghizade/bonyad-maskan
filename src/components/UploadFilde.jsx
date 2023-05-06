import React, { useState } from 'react'

import eyeview from './../assets/img/eyeview.png'


function UploadFilde() {
    const [fileName, setFileName] = useState('');

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setFileName(file.name);
      };
    const deleteItem = () => {
        setFileName("")
        
    }

  return (
    <div className='flex flex-col-reverse gap-5 max-w-full'>
        <div className='w-[85%] mx-auto border-dashed relative border-2 border-black  rounded-lg'>
            <label className='absolute text-[12px] fontBold bg-white px-2 py-1 top-[-1rem] right-[5px]'>سند شش دنگ</label>
            <input onChange={handleFileInputChange} type="file" id="selectedFile" className='w-[100%] border-dashed border-2 opacity-0  mx-auto'/>
            <button type="button" className='absolute top-[14px] right-[10px] text-[12px] fontBold' >برای انتخاب فایل روی این بخش کلیک کنید یا فایل خود را اینجا رها نمائید</button>
        </div>
       
          {fileName && 
        <div className='bg-blue-50 rounded-xl text-blueMain pr-5 py-3 mx-16 fontBold justify-between flex sm:flex-row-reverse flex-col '>
          <p>با موقیت آپلود شد  {fileName} فایل</p>
          <div className='flex flex-row-reverse gap-5 px-5'>
            <div className='flex  items-center gap-1'>
                <img src={eyeview} className='max-w-full w-4 h-4'/>
                <span className='fontBold cursor-pointer'>مشاهده</span>
            </div>
            <div className='fontBold text-red-700 cursor-pointer ' onClick={deleteItem}>حذف</div>
          </div>
          </div>}
    </div>
  )
}

export default UploadFilde