import React from 'react'



const SocialMedia = () => {

  const item = ["/images/facebook.png", "/images/instagram.png","/images/social.png","/images/youtube.png"];
  return (
    <div className='flex gap-3'>
      {
        item.map((img) => (
          <div className='socialmedia_icon hover:scale-150 cursor-pointer'>
            <img className='w-[24px] ' src={img} alt="facebook" />
          </div>
        ))
      }
    </div>
  )
}

export default SocialMedia