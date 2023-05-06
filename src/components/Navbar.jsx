import React from 'react'
import logo from './../assets/img/logo.png';
import bill from './../assets/img/billGry.png';
import gear from './../assets/img/Gear.png';
import './navbar.css'

function Navbar() {
  return (
    <>
<nav className='shadow-md bg-white'>
<div className="max-w-[1440px] flex flex-row-reverse flex-wrap items-center justify-between mx-auto py-4 ">
  <div className="logoNav flex items-center flex-row-reverse gap-2">
      <img src={logo} className="mr-3 max-w-full w-12" alt="Flowbite Logo" />
      <span className="self-center fontBold text-blueMain whitespace-nowrap text-[15px]">بنیاد مسکن انقلاب اسلامی</span>
  </div>
  
  <div className="navItems flex items-center flex-row-reverse md:gap-10 gap-2">
  
    <div>
    <button type="button" data-collapse-toggle="navbar-search"
     aria-controls="navbar-search" aria-expanded="false" 
     className="md:hidden text-gray-500
      hover:bg-gray-100 focus:outline-none focus:ring-4
      focus:ring-gray-200= rounded-2xl text-sm p-2.5 mr-1" >

      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817
       4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
      </path></svg>

      <span className="sr-only">جستجو</span>
    </button>

    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0
          1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
         </path></svg>

        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" 
      className="block w-full p-2 pl-10 text-sm fontReg
       text-gray-900 rounded-2xl border border-gray-100
        bg-gray-100  focus:border-blueMain
       " placeholder="...جستجو" />
    </div>

    {/* <button data-collapse-toggle="navbar-search" type="button" 
    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
    focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
     dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>

      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" 
      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
       d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 
       1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> */}
    </div>
    
    <div className='flex gap-2 pl-5'>
      <img src={gear}  className='max-w-ful w-5 h-5  cursor-pointer'/>
      <img src={bill}  className='max-w-ful w-5 h-5  cursor-pointer'/>
    </div>
  </div>
</div>
</nav>
    </>
  )
}

export default Navbar