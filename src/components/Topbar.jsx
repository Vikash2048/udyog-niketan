import React from 'react'
import Touch from './Touch'

const Topbar = () => {
    return (
        <div className='w-full bg-[#1E164A] h-12 text-white flex items-center justify-between pl-12 pr-12'>
            <div className='support flex'>
                <div className='flex gap-3 mr-3'>
                    <img src="/images/telephone-call.png" alt="telephone" />
                    <p>7011018269</p>
                </div>
                <div className='flex gap-3'>
                    <img src="/images/email.png" alt="email" />
                    <p>support@yourdomain.com</p>
                </div>
            </div>

            <div className='intouch'>
                <Touch/>
            </div>

        </div>
    )
}

export default Topbar