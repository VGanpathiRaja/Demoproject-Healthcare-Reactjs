import React from 'react'
import {Sidenavbar} from './Sidenavbar.jsx'
import { Details } from './Details.jsx'


export const Daskboard = () => {
  return (
    <div className='flex'>
        <Sidenavbar/>
        <Details/>
    </div>
  )
}
