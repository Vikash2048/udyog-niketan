import React from 'react'

const Servicecard = () => {

    const services = [["/images/telecommunications.png","BTS Installation & Commissioing","Expertise in installing and commissioning various types of BTS (Base Transceiver Station) equipment."],
    ["/images/satellite-dish.png","Microwave Antenna Installation","Extensive experience in installing and commissioning microwave antennas for various applications."],
    ["/images/management.png","Link Configuration","Expertise in configuring microwave links for reliable and efficient data transmission."],
    ["/images/surveying.png","Site Survey & Design","Comprehensive site surveys to assess feasibility and identify potential challenges."],
    ["/images/electric-tower.png","Tower Infrastructure Services","Our experienced team offers services throughout the entire tower lifecycle, ensuring high-quality construction, maintenance, and optimization."],
    ["/images/engineer.png","Civil Work","We provide comprehensive civil services for your tower needs, including foundation construction, site preparation, and access road development."]
]

    return (
        <div className='flex md:flex-row sm:flex-col gap-8 sm:px-10 flex-wrap justify-center'>
        {
            services.map((item,id) => (
                <div key={id} className='gap-5 md:w-[400px] w-[350px] bg-[#f3f3f379] rounded-3xl  border-2  border-[lightgrey]  px-6 py-6 hover:border-[#FF6B18] hover:drop-shadow-md hover:shadow-lg md:hover:scale-110 transition-transform duration-1000 ease' >
                <div className='pb-5'>
                    <img src={item[0]} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-medium text-lg'>{item[1]}</h2>
                    <p>{item[2]}</p>
                </div>
    
            </div>
            ))
        }
        </div>

    )
}

export default Servicecard