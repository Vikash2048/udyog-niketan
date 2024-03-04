import React from 'react'

const Navbar = () => {
    return (
        <div className='border-2 md:h-20 h-16 flex justify-between items-center pl-8 pr-8'  >
            <div className='flex gap-2 items-center'>
                <img src="/images/logo.png" alt="" />
                <h2 className='md:text-4xl text-xl font-bold'><span className='text-[#FF6B18]'> UDYOG NIKETAN</span> TECHNO</h2>
            </div>

            <div className='items-center gap-10 font-semibold text-md hidden md:flex'>
                <a className='hover:scale-150 hover:text-[#FF6B18] transition-all duration-500 ' href="#Home">Home</a>
                <a className='hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500' href="#About">About</a>
                <a className='hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500' href="#Service">Service</a>
                <a className='hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500' href="#Client">Client</a>
                <a className='hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500' href="#WhyUs">Why Us</a>
                <button className='px-6 py-2 rounded-full text-white bg-[#FF6B18]'>Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar