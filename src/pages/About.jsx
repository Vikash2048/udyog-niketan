import React from 'react'

const About = () => {
  return (
    <div id='About' className='h-[60%] w-full bg-[#f8f7f700] md:pt-24 pt-10 px-10 flex md:flex-row flex-col justify-center relative gap-8'>
      <div className='w-[40%] h-[450px] flex justify-center md:flex hidden'  ><img className='h-[80%] rounded-3xl' src="/images/about_image.jpeg" alt="" /></div>
      <div className='md:w-[40%] h-[85%] flex flex-col md:pt-10 py-2 gap-4'>
        <h3 className='text-[#FF6B18] font-medium text-lg'>WHO WE ARE</h3>
        <h2 className='font-bold text-lg'>About Udyog Niketan Techno Pvt. Ltd.</h2>
        <p className='text-[grey]'>Udyog Niketan Techno Pvt. Ltd. is a leading name in the telecom sector, based in Dhanbad, Jharkhand. With over a decade of experience, we specialize in providing end-to-end telecom infrastructure services, including BTS and Microwave installation, link configuration, and site surveys. Our expertise and trusted partnerships with industry leaders enable us to deliver exceptional solutions tailored to our clients' needs. Contact us today to discover how we can elevate your telecom infrastructure.</p>
      </div>
    </div>
  )
}

export default About