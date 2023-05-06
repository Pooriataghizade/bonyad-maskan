import React from 'react'
import SideBar from '../components/SideBar'
import './dashboard.css';
import Navbar from '../components/Navbar';
import AlertsSection from '../components/AlertsSection';
import RequetsSection from '../components/RequetsSection';
import ProfileStatus from '../components/ProfileStatus';
import PropertyList from '../components/PropertyList';

function Dashboard() {
  return (
    <div className='main max-w-[1440px] mx-auto'>
        <Navbar/>
      <div className='flex xl:flex-row-reverse  flex-col'>
        <SideBar/>
        <div className='w-full'>
          <AlertsSection/>
          <div className='flex mx-2 gap-5 flex-col lg:flex-row '>
            <RequetsSection/>
            <ProfileStatus/>
          </div>
          <PropertyList/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard