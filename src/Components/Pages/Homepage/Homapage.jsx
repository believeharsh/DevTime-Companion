import React from 'react'
import GetTasks from '../../TodoPages/AllTasks/GetTasks'
import AllBs from '../../Bookmarks/AllBMs'
const Homepage = () => {
  return (
    <div className='flex justify-center items-center px-5 pt-5'>
      <GetTasks/>
      <AllBs/>
      
    </div>
  )
}

export default Homepage
