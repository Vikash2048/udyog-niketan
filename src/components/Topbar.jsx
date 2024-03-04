import React from 'react'
import SocialMedia from './SocialMedia'

const Topbar = () => {
    return (
        <div className='w-full bg-[#1E164A] h-12 text-white flex items-center md:justify-between justify-center pl-12 pr-12'>
            <div className='support flex'>
                <div className='flex gap-2 mr-3'>
                    <img className='sm:w-[16px]' src="/images/telephone-call.png" alt="telephone" />
                    <p className='text-sm'>7011018269</p>
                </div>
                <div className='flex gap-2'>
                    <img className='sm:w-[16px]' src="/images/email.png" alt="email" />
                    <p className='text-sm'>support@yourdomain.com</p>
                </div>
            </div>

            <div className='intouch hidden md:block'>
                <SocialMedia/>
            </div>

        </div>
    )
}

export default Topbar