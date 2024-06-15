import React from 'react'
export const Overviewbox = ({overviewtitle,overviewcount}) => {
  return (
    <div className=' bg-brightColor  w-3/12 text-center text-white px-5 py-5 m-3 rounded-md  transition duration-300 ease-in-out shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'>
        <h1 className='font-bold text-[22px] p-2 m-1'>{overviewtitle}</h1>
        <h2 className=' text-[20px] p-2 m-1 font-semibold'>{overviewcount}</h2>
    </div>
  )
}
