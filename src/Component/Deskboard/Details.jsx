import React from 'react';
import { Overviewbox } from './Overviewbox';
import { Appoinmentoverviewbox } from './Appoinmentoverviewbox';

export const Details = () => {
  return (
    <div className='basis-[85%] h-[100vh] border bg-slate-100'>
        <div className='p-5 bg-slate-400 '>
            <h1 className='text-[18px] text-white font-bold'>Patients Overview</h1>
        </div>
        
        <div className='flex items-center justify-between'>
        <Overviewbox overviewtitle="Psychotherapists" overviewcount="3600"/>
        <Overviewbox overviewtitle="Physiotherapists" overviewcount="200"/>
        <Overviewbox overviewtitle="Acupuncturists" overviewcount="3000"/>
        <Overviewbox overviewtitle="Video Consulting" overviewcount="5600"/>
        </div>
        <div className='p-5 bg-slate-400 '>
            <h1 className='text-[18px] text-white font-bold'>Day Patients Appoinment overview</h1>
        </div>
        <div className='flex items-center justify-between'>
          <Appoinmentoverviewbox appointCatogory="Over All day" appointCount="20" appointvideoCount="10"  appointDay="Today" />
          <Appoinmentoverviewbox appointCatogory="Psychotherapists" appointCount="12" appointvideoCount="10" appointDay="Today" />
        </div>

        <div className='flex items-center justify-between'>
          <Appoinmentoverviewbox appointCatogory="Physiotherapists" appointCount="12" appointvideoCount="10" appointDay="Today" />
          <Appoinmentoverviewbox appointCatogory="Acupuncturists" appointCount="12" appointvideoCount="10"  appointDay="Today" />
        </div>
    </div>
  )
}
