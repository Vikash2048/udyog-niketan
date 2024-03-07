import React from 'react'

const AboutCard = () => {
    const items = [
        ["/images/rating.png", "Experience and Expertise", "With over a decade in telecom, we bring unmatched expertise. Our skilled team blends technical prowess with industry insights to exceed client expectations."],
        ["/images/customer-service.png", "Comprehensive Services", "We offer a full range of telecom services including BTS Installation, Microwave Antenna Installation, Link Configuration, Traffic Shifting, and Site Survey, ensuring end-to-end solutions for our clients."],
        ["/images/achievement.png", "Commitment to Quality", "Quality is paramount at Udyog Niketan Techno Pvt. Ltd. We adhere to rigorous quality control measures, fostering enduring relationships with clients and partners."],
        ["/images/trust.png", "Trusted Partnerships", "We've established strong partnerships with industry leaders like CERAGON, NEC, RJIL, IDEA, and UNINOR, enabling us to deliver cutting-edge solutions and drive results."],
        ["/images/approach.png", "Customer-Centric Approach", " Our customer-centric approach prioritizes our clients' needs. We tailor solutions to meet their objectives, offering personalized support throughout the project lifecycle."],
        ["/images/verified.png", "Proven Track Record", "With over a decade of success, we're known for reliability, integrity, and professionalism. Our satisfied clients and successful projects showcase our commitment to excellence."]
    ]
    return (
        <div className='flex md:flex-row flex-col justify-center items-center flex-wrap gap-8 '>
            {
                items.map((item,id) => (
                    <div key={id} className='flex flex-col items-center justify-center gap-4 md:w-[350px] w-[250px]'>
                        <img src={item[0]} alt="img" />
                        <h3 className='font-semibold'>{item[1]}</h3>
                        <p className='md:block hidden text-center text-[#686D80]'>{item[2]}</p>
                    </div>
                ))
            }

        </div>
    )
}

export default AboutCard