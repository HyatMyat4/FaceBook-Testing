import React from 'react'
import LeftWatch from './LeftWatch'
import { Outlet } from 'react-router-dom';


const WatchContainer = () => {

  

  

  return (
    <div className='w-[100%] h-[100vh] bg-[#18191A] flex flxe-row  bg-gradient-to-br from-black to-[#1859a3] '>
         <LeftWatch/>
        <Outlet/>         
       
        
    </div>
  )
}

export default WatchContainer