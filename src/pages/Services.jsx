import React from 'react'
import Servicecard from '../components/Servicecard'

const Services = () => {
  return (
    <div id='Service' className='w-full  bg-[#f8f7f700] flex  items-center  flex-col py-8'>
      <p className='text-lg font-semibold pb-8  text-[#FF6B18]'>WHAT WE OFFER</p>
      <div className='' >
        <Servicecard/>
      </div>
    </div>
  )
}

export default Services