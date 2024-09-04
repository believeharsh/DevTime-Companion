import React from 'react'
import GetTasks from '../../TodoPages/AllTasks/GetTasks'
import AllBs from '../../Bookmarks/AllBMs'
import Watch from '../../DigitalWatch/Watch'
const Homepage = () => {
  return (
    <div className='flex justify-center items-center px-5 pt-5'>
      <GetTasks/>
      <AllBs/>
      <Watch/>
      
    </div>
  )
}

export default Homepage
