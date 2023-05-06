import React from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import Location from '../components/Location'
import RequestHistory from '../components/RequestHistory';
import RequestRegistration from '../components/RequestRegistration';
function HomeDetails() {
  return (
    <div>
        <div className='main max-w-[1440px] mx-auto'><Navbar/>
        <div className='flex xl:flex-row-reverse  flex-col'>
            <SideBar/>
            <div className='w-full'>
                <Location/>
                
                <RequestHistory/>
                <RequestRegistration/>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default HomeDetails