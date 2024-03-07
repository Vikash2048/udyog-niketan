import React from 'react'
import AboutCard from '../components/AboutCard'

const Choose = () => {


  return (
    <div id='WhyUs' className=' bg-[#F2F5FA] py-8 flex flex-col items-center  '>
      <h2 className='text-[#FF6B18] font-medium text-lg pb-16 '>WHY CHOOSE US</h2>
      <div className='flex'>
        <AboutCard/>
      </div>
    </div>
  )
}

export default Choose