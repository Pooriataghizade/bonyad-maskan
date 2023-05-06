import React , { useState , useEffect} from 'react'
import FinancialItem from './sideBarItems/FinancialItem';
import cartable from './../assets/img/cartable.png';
import UserItem from './sideBarItems/UserItem';
import DashboardItem from './sideBarItems/DashboardItem';
import HomeItwm from './sideBarItems/HomeItwm';
import SupportItem from './sideBarItems/SupportItem';
import ExitItem from './sideBarItems/ExitItem';
import './sidebar.css';
import { Link } from 'react-router-dom';
// onClick={()=>setHide(!hide)} className={hide ? "flex" : "hidden"}

function CenterOfSideBar() {
    const [open , setOpen ] = useState ( false );
  

   
    
 
    return (
    
    <div  >
        
          
            <div >
         <ul className=' xl:flex flex-row flex-wrap hidden xl:gap-1'>
            <li className=' xl:w-72 w-48'>
                <Link to='/dashboard'><DashboardItem/></Link>
            </li>
            <li className='xl:w-72 w-48'>
                <Link to="/dashboard/homemanage">
                  <HomeItwm/>
                </Link>
            </li>
            <li className='xl:w-72 w-48'>
                <FinancialItem/>
            </li>
            {/* DROPDOWN ITEM */}
            <li onClick={()=>setOpen(!open)} className={open ? "item-dropdown" : "item-dropdown-gray"}>
            
              <div className='flex'>
              <div>
                <svg className={open ? "flex" : "togglebtn"}
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
              </div>
              <div className='
                flex items-center
                  cursor-pointer xl:ml-[184px] ml-[70px] 
                  gap-4'>
                  <span className='fontReg text-[15px]'>کارتابل</span>
                  <img src={cartable}
                      className='max-w-full
                      w-6 pr-1'/>
              </div>
              </div>
          
          <div className={open ? "sidebar-content" : "sidebar-open"}>
            <ul className='text-end fontReg text-[15px] flex flex-col gap-1 '>
              <li className='mt-2 cursor-pointer'>خدمات فنی</li>
              <li className='cursor-pointer'>تسهیلات</li>
              <li className='cursor-pointer'>فنی و مهندسی</li>
              <li className='cursor-pointer'> خدمات مالکیتی </li>
            </ul>
          </div>
            </li>
            <li className='xl:w-72 w-48 '>
                <UserItem/>
            </li>
            <li className='xl:w-72 w-48'>
                <SupportItem/>
            </li>
            <li className='xl:w-72 w-48'>
                <ExitItem/>
            </li>
      </ul>
        </div>
        
        
    </div>
  )
}

export default CenterOfSideBar