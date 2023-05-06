import React , { useState } from 'react'
import './alertSection.css'
import './sidebar.css';
import UserItem from './sideBarItems/UserItem';
import HomeItwm from './sideBarItems/HomeItwm';
import FinancialItem from './sideBarItems/FinancialItem';
import SupportItem from './sideBarItems/SupportItem';
import ExitItem from './sideBarItems/ExitItem';
import { Link } from 'react-router-dom';
import DashboardItem from './sideBarItems/DashboardItem';
import cartable from './../assets/img/cartable.png';


function DropDownSide() {
    const [openSide , setOpenSide ] = useState ( false );
  return (
    <div className='alertSection my-4 mb-4 mx-auto'>
        <div onClick={()=>setOpenSide(!openSide)} className={openSide ? "alert-dropdown" : "alert-dropdown-open"}>
        <div className='flex items-center
          justify-center
          cursor-pointer'>
            <div className='flex gap-4 mr-[6px]'>
            <div  className='flex flex-col gap-1'>
                <div className='bg-gray-700 w-5 h-1 rounded-full' ></div>
                <div className='bg-gray-700 w-5 h-1 rounded-full' ></div>
                <div className='bg-gray-700 w-5 h-1 rounded-full' ></div>
            </div>
            </div>
          </div>

          <div className={openSide ? "alert-content" : "alert-open"}>
          <div className='flex flex-col'>
          <Link to='/dashboard'><DashboardItem/></Link>
          <Link to='/dashboard/homemanage'><HomeItwm/></Link>
          <FinancialItem/>
          <UserItem/>
          <SupportItem/>
          <ExitItem/>
          </div>
          </div>
    </div>
    </div>
  )
}

export default DropDownSide