import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Navbar from "../components/Navbar"

const Home = () => {

  const [img,setImg] = useState("");
  const [index,setIndex] = useState(0);

  const image = [
    "/images/tower1.jpg",
    "/images/tower2.jpg",
    "/images/tower3.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % image.length);
    }, 5000);

    return () => clearInterval(interval);
  },[image.length]);

  useEffect(() => {
    setImg(image[index]);
  },[index,image])

  return (
    <div id='Home' className='h-lvh'>
        <Topbar/>
        <Navbar/>

        <div style={{height: "calc(100vh - 128px)"}} className=' overflow-hidden relative' >
          <img className="w-full h-full object-cover absolute top-0" src={img} alt="image" />
          <div style={{height: "calc(100vh - 128px)", background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)"}} className='w-[100%] b-4 absolute top-0 text-white flex flex-col justify-center items-center text-center box-border' >
            <h1 className='md:text-6xl font-bold mb-8 text-2xl'>Welcome to Udyog Niketan Techno</h1>
            <p className='md:mx-24 md:text-xl mx-4 text-md'>At Udyog Niketan Techno, we're leaders in telecommunications, trusted by industry giants like Reliance, Tata Indicom, and Bharti. With a focus on innovation and reliability, we deliver cutting-edge solutions tailored to your business needs. Partner with us to experience the difference in telecom services.</p>
          </div>
        </div>

    </div>
  )
}

export default Home