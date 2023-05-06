import React, {useState} from 'react'
import './propertyList.css'
import arrowProperty from './../assets/img/arrowProperty.png';
import VilageHome from './VilageHome';
import CityHome from './CityHome';
import AddHome from './AddHome';
import { Link } from 'react-router-dom';


function PropertyList() {
    const [openPropertyList , setOpenPropertyList ] = useState ( false );
  return (
    <div className='PropertySection my-2 mx-auto shadow-md rounded-md py-2'>
        <div onClick={()=>setOpenPropertyList(!openPropertyList)} className={openPropertyList ? "property-dropdown" : "property-dropdown-open"}>
        <div className='flex items-center
          justify-between
          cursor-pointer py-2'>
            <div>
              <svg className={openPropertyList ? "flex" : "togglebtnProperty"}
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
            </div>
            <div className='flex gap-4 mr-[6px] mb-3'>
            <span className='fontBold text-[25px]'>لیست املاک </span>
            </div>
          </div>

          <div className={openPropertyList ? "proprty-content" : "proprty-open"}>
            
                <div className='flex flex-col gap-2 mx-auto'>
                    <div className='flex lg:flex-row-reverse flex-col gap-2 justify-center mx-auto'>
                        <Link to="/dashboard/homemanage"><AddHome/></Link>
                        <Link to="/dashboard/HomeDetails">
                          <VilageHome/>
                        </Link>
                        <Link to="/dashboard/HomeDetails">
                          <CityHome/>
                        </Link>
                    </div>
                    <div className='flex gap-2 lg:flex-row flex-col justify-center mx-auto'>
                        <Link to="/dashboard/HomeDetails">
                          <VilageHome/>
                        </Link>
                        <Link to="/dashboard/HomeDetails">
                          <CityHome/>
                        </Link>
                        <Link to="/dashboard/HomeDetails">
                          <VilageHome/>
                        </Link>
                         
                        
                    </div>
                </div>
                    
                
            
                <Link to="/dashboard/homemanage">
                <div className='flex gap-2 justify-center fontBold mt-4'>
                    <img src={arrowProperty} className='max-w-full'/>
                    <a className='text-blueMain'>مشاهده همه ی موارد</a>
                </div>
                </Link>
          </div>
    </div>
    </div>
  )
}

export default PropertyList