import React from 'react'

export const Appoinmentoverviewbox = ({appointCatogory,appointCount,appointvideoCount,appointDay}) => {
  return (
    <div className=' bg-brightColor  w-6/12 text-center text-white px-5 py-5 m-3 rounded-md  transition duration-300 ease-in-out shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'>
        <div className='flex items-center justify-between'>

        <div>
          <h1 className='text-[12px] font-bold text-center text-indigo-950' >Category</h1>
          <h2 className='font-bold text-[22px] p-2 m-1'>{appointCatogory}</h2>
        </div>
        <div>
          <h1 className='text-[12px] font-bold text-center text-indigo-950 '>Appoinment<br/> Count</h1>
          <h2 className=' text-[20px] p-2 m-1 font-semibold'>{appointCount}</h2>
        </div>
        <div>
          <h1 className='text-[12px] font-bold text-center text-indigo-950'>video call <br/>Appoinment</h1>
           <h2 className=' text-[20px] p-2 m-1 font-semibold'>{appointvideoCount}</h2>
        </div>
        <div>
          <h1 className='text-[12px] font-bold text-center text-indigo-950'>Appoinment Day</h1>
           <h2 className=' text-[20px] p-2 m-1 font-semibold'>{appointDay}</h2>
        </div>
        </div>
    </div>
  )
}

