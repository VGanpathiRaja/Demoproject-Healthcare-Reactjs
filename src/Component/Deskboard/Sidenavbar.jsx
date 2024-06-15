import React from 'react';
import {FaTachometerAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Sidenavbar = () => {
  return (
    <div className='basis-[15%] h-[100vh] border bg-slate-500'>
        <div className='text-center text-[20px] leading-4 font-bold text-white p-5' >
            <h1>Health Care</h1>
        </div>
        <Link to="/" >  <div className=' flex items-start justify-evenly gap-[15px] py-[12px] px-[8px] m-1 bg-sky-800 hover:bg-sky-700  text-yellow-50'>
            <FaTachometerAlt/>
         <h2 className='font-bold text-[14px] leading-3'>Home Daskboard</h2> 
        </div>
        </Link>
       <Link to="/Psychotherapistsoverview"> 
            <div className=' flex items-start justify-evenly gap-[15px] py-[12px] px-[8px] m-1 bg-sky-800 hover:bg-sky-700  text-yellow-50'>
                <FaTachometerAlt/>
                <h2 className='font-bold text-[14px] leading-3'>Psychotherapists</h2>
            </div>
        </Link>
       <Link to="/Physiotherapistsoverview"> 
       <div className='flex items-start justify-evenly gap-[15px] py-[12px] px-[8px] m-1 bg-sky-800 hover:bg-sky-700  text-yellow-50'>
            <FaTachometerAlt/>
            <h2 className='font-bold text-[14px] leading-3'>Physiotherapists</h2>
        </div>
        </Link>
        <Link to="/Acupuncturistsoverview"> 
          <div className='flex items-start justify-evenly gap-[15px] py-[12px] px-[8px] m-1 bg-sky-800 hover:bg-sky-700  text-yellow-50'>
            <FaTachometerAlt/>
            <h2 className='font-bold text-[14px] leading-3'>Acupuncturists</h2>
        </div>
        </Link>
    </div>
  )
}
