import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import PropertiesList2 from '../components/PropertiesList2'

function homeManage() {
  return (
    <div>
        <div className='main max-w-[1440px] mx-auto'>
            <Navbar/>
            <div className='flex lg:flex-row-reverse  flex-col'>
                <SideBar/>
                <div className='w-[100%]'>
                <PropertiesList2/> </div>
            </div>
        </div>
    </div>
  )
}

export default homeManage