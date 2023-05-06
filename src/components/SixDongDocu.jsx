import React, { useState } from 'react'
import './MultipleFormAddHome.css'
import UploadFilde from './UploadFilde';


function SixDongDocu() {
  const inputHndle = (e)=> {
    setEmpty2({
      ...empty2,
      [e.target.name] : e.target.value
    })
  };
  const next2 = () => {
    if(RegistrationDepartment && Divisible && piece && main && sub ){
      setFormNo(formNo + 1) ;
    }
  };
  const [empty2,setEmpty2] = useState = [{
    RegistrationDepartment : "",
    Divisible : "",
    piece : "",
    main : "",
    sub : "",
  }];
 
  return (

    <form>
        <div className='flex flex-col xl:gap-7 gap-10'>
             <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
                  <div className='flex items-center relative'>
                    <input onChange={inputHndle}  type='text' name='RegistrationDepartment' id='RegistrationDepartment'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='RegistrationDepartment' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * بخش ثبتی</label>
                  </div>
                  <div className='flex items-center relative'>
                    <input onChange={inputHndle}  type='text' name='Divisible' id='Divisible' className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='Divisible' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * مفروزی</label>
                  </div>
            </div>
             <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
                  <div className='flex items-center relative'>
                    <input onChange={inputHndle}  type='text' name='piece' id='piece'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='piece' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * قطعه </label>
                  </div>
                  <div className='flex items-center relative'>
                    <input onChange={inputHndle}  type='text' name='main' id='main'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='main' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * اصلی</label>
                  </div>
            </div>
             <div className='flex xl:flex-row-reverse flex-col justify-between gap-7  xl:gap-3 mx-auto xl:mx-5'>
                  <div className='flex items-center relative'>
                    <input onChange={inputHndle}  type='text' name='sub' id='sub'  className=' rounded-xl xl:w-[30rem] w-[310px] mx-auto'/>
                    <label htmlFor='sub' className='absolute fontBold top-[-15px] left-[204px] xl:left-[355px] bg-white px-2 py-1'> * فرعی </label>
                  </div>
            </div>
            <div className='dottedBorderLine mb-7'></div>
            
            <UploadFilde/>   
                  

            
            
          </div>
            <button onClick={next2}  className='flex justify-start mx-4 mt-7 bg-greenLight py-2 text-white rounded-xl px-3'>ذخیره و ادامه</button>
    </form>
  )
}

export default SixDongDocu