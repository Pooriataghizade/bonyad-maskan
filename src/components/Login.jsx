import React, { useState } from 'react'
import './login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './../assets/img/logo.png';
import Countdown from 'react-countdown';
import PasswordStrong from './PasswordStrong';
import { useNavigate } from 'react-router';

function Login() {



  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

//for multiple form =>
  const formArray = [1,2,3];
  const [formNum,setFormNum] = useState(formArray[0]);
  

  //btnActions =>
  const next = (e) => {
    e.preventDefault();
    if(nId.length >= 10 && nId.match(/\d/)){
     setFormNum(formNum + 1 );
   }else{
    toast.error("لطفا فیلد مورد نظر  را به درستی وارد کنید")
   }
  };
  const prev = (e) => {
    e.preventDefault();
    setFormNum (formNum - 1 );
  }


//for get national ID and pass it to next form =>
const [nId,setNId] = useState("");


//mobile validation => 
const [mobi,setMobi] = useState("");
const [isValid,setIsValid] = useState (false);

const handleChange = (e) => { 
  setMobi(e.target.value);
  setIsValid(/[0][9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.test(e.target.value));
};
console.log(mobi);

const next2 = (e) => {
  e.preventDefault();
  if (isValid) {
    setFormNum(formNum + 1)
    setTimeout(() => {setShowAlert(true)}, 2000)
  }else {
    toast.error("لطفا شماره موبایل  را به درستی وارد کنید")
  }
}
const navigate = useNavigate();

const next3 = (e) => {
  e.preventDefault();
  if (password !== passAgain){
    toast.error("لطفا رمز را صحیح وارد کنید")

  }else{
    navigate("/dashboard")
  }
};

const [password, setPassword] = useState ("")
const [passAgain,setPassAgain] = useState ("");
console.log(passAgain);
const [change,setChange]=useState("");

  return (
    <div>
    <ToastContainer/>
        <div className='bg-white box
        mt-[-4.25rem]
        text-center
        rounded-[16px]
        w-[90%] sm:w-[400px]'>
            <img className='max-w-full
            w-[2.85rem] mx-auto'  src={logo}/>
            <h2 className='text-blueMain
             fontBold mb-5'>بنیاد مسکن انقلاب اسلامی</h2>
            <h3 className='text-black fontBold
            text-2xl mb-3'>ورود به سامانه بنیاد مسکن</h3>

            {
              formNum === 1 && <>
                <form className='py-3 px-2'>
                  <div className='flex gap-5 sm:justify-end justify-center'>

                    <div className='flex gap-1 items-center'>
                      <input type='radio' name='person' id='radio1' onChange={(e)=>setChange(e.target.id)} />
                      <label htmlFor='radio1' id='label1'  className='fontBold text-[15px]'>حقیقی</label>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <input name='person' id='radio2' type='radio' onChange={(e)=>setChange(e.target.id)}/>
                      <label htmlFor='radio2' id='label2' className='fontBold text-[15px]'>حقوقی</label>
                    </div>
                  </div>
                  <input  onChange={(e)=>setNId(e.target.value)} type='text' id='nationalId' name='nationalId'  className='border w-[90%] relative py-1 px-1 mt-6 rounded-md'/>
                  {change === "radio2" ? <div><label htmlFor='nationalId' id='numberId' className='absolute top-[195px] right-[60px] bg-white px-1 fontBold'>شناسه </label></div> : <label htmlFor='nationalId' id='numberId' className='absolute top-[195px] right-[60px] bg-white px-1 fontBold'> </label>}
                  {change === "radio1" ? <div><label htmlFor='nationalId' id='numberId' className='absolute top-[195px] right-[60px] bg-white px-1 fontBold'>کد ملی</label></div> : <label htmlFor='nationalId' id='numberId' className='absolute top-[195px] right-[60px] bg-white px-1 fontBold'>شناسه </label>}
                  {console.log(change)}

                  <div className='flex gap-3 mt-9 justify-center sm:justify-start'>
                    <div onClick={next} className='flex flex-row-reverse bg-greenLight px-3 py-1 rounded-md'>
                      <button className=' text-white fontReg text-[15px]'>ادامه</button>
                    </div>
                    <button className='bg-blueMain px-3 py-2 rounded-md text-white fontReg text-[15px]' >ورود از درگاه دولت من </button>
                  </div>
                </form>
                
              </>
            }




            {
            formNum ===2 && <>
              <form className='py-3 px-2'>
                  <input type='text' id='nationalId' name='nationalId'  placeholder={nId} disabled className='border w-[90%] relative py-1 px-1 mt-8 rounded-md'/>
                  <label htmlFor='nationalId' id='numberId' className='absolute top-[182px] z-10 right-[60px] bg-white px-2 fontBold'>کد ملی</label>

                  <input type='text' onChange={handleChange} id='nationalId' value={mobi} name='nationalId' className='border w-[90%] relative py-1 px-1 mt-8 rounded-md'/>
                  <label htmlFor='nationalId' id='numberId' className='absolute top-[248px] right-[60px] bg-white px-2 fontBold'> شماره همراه</label>

                  <div className='flex gap-3 mt-9 justify-center sm:justify-start'>
                    <div onClick={next2}className='flex flex-row-reverse bg-greenLight px-3 py-1 rounded-md'>
                      <button className=' text-white fontReg text-[15px]'>ادامه</button>
                    </div>
                    <button onClick={prev} className='bg-disableBlue px-3 py-2 rounded-md text-white fontReg text-[15px]' >    بازگشت </button>
                  </div>
                </form>
              </>
            }


            {
              formNum ===3 && <>
              
                
                <p className='fontBold text-[14px]'>لطفا کد ارسال شده به شماره <span className='text-blueMain'>{mobi}</span>را وارد نمایید</p>
                <div>
                <Countdown date={Date.now() + 120000} renderer={renderer} />
                </div>
                <input  type='text' className='border w-[90%] relative py-1 px-1 mt-8 rounded-md'/>
                <label   className='absolute top-[210px] z-10 right-[60px] bg-white px-1 fontBold'>  کد ارسالی</label>

                <input type='password' onChange={e=>setPassword(e.target.value)} className='border w-[90%] relative py-1 px-1 mt-8 rounded-md'/>
                <label  className='absolute top-[277px] z-10 right-[60px] bg-white px-2 fontBold'>  رمز عبور </label>
                <PasswordStrong password={password}/>

                <input type='password' onChange={e=>setPassAgain(e.target.value)} className='border w-[90%] relative py-1 px-1 mt-8 rounded-md'/>
                <label  className='absolute top-[350px] right-[55px] bg-white px-2 fontBold'>  تکرار رمز عبور </label>

                <div className='flex gap-3 mt-9 justify-center sm:justify-start'>
                    
                      <div onClick={next3}className='flex flex-row-reverse bg-greenLight px-3 py-2 rounded-md'>
                        <button className=' text-white fontReg text-[15px]'>ثبت تفیرات</button>
                      </div>
                      
                    
                    <button onClick={prev} className='bg-disableBlue px-3 py-2 rounded-md text-white fontReg text-[15px]' >    بازگشت </button>
                  </div>
              </>
            }

         </div>
    </div>
  )
}

export default Login