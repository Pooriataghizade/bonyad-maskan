import React from 'react'
import './sidebar.css';
import TopOfSideBar from './TopOfSideBar';
import CenterOfSideBar from './CenterOfSideBar';

function SideBar() {
  
  
  return (
    <>
  <div className='sidebar shadow-md rounded-md'>
    <div className='sidebar-item'>
      <TopOfSideBar/>
      <CenterOfSideBar/>
    </div>
  </div>
    </>
  )
}

export default SideBar