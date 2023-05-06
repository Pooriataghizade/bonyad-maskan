import React from 'react'
import Navbar from '../components/Navbar'
import MultipleFormAddHome from '../components/MultipleFormAddHome'
import SideBar from './../components/SideBar';

function AddNewHome() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <Navbar/>

        <div className='mt-4 flex flex-col xl:flex-row-reverse'>
        <SideBar/>
        <div className='w-full mt-4'>
        <MultipleFormAddHome/>
        </div>
        </div>
    </div>
  )
}

export default AddNewHome