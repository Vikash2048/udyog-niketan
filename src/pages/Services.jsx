import React from 'react'
import Servicecard from '../components/Servicecard'

const Services = () => {
  return (
    <div id='Service' className='w-full  bg-[#e9e7e7] flex  items-center  flex-col'>
      <p className='text-3xl font-semibold pb-8 underline pt-7 tracking-normal text-[#FF6B18]'>SERVICES</p>
      <div className='border-2' >
        <Servicecard/>
      </div>
    </div>
  )
}

export default Services