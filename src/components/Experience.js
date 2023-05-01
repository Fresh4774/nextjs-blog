import React, { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] ' >
        
        <LiIcon reference={ref} />


        <motion.div
        inital={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>

            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg' >{position}&nbsp; <a href={companyLink} className='text-[#b4cbf0] capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>{work}</p>
        </motion.div>


    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYprogress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className="my-64">
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>My Art Offerings</h2>

            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full xs:ml-2">

                <motion.div style={{scaleY: scrollYprogress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]" />


                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details 
                    position="Character Art" 
                    company="Samples"
                    companyLink="/articles"
                    time="2023" address="Halara Souls" 
                    work="Character art is a form of visual storytelling that brings characters to life through various mediums such as drawing, painting, and digital art, by using creativity to design characters that evoke emotions and convey a story or message to the viewer."
                    />

                    <Details 
                    position="Character Design" 
                    company="Samples"
                    companyLink="/articles"
                    time="2023" address="Halara Souls" 
                    work="Character design is the process of creating the appearance and personality of a character for various forms of media, such as video games, animation, and comics. My well-designed character Design skills offer visually appealing, memorable, and able to convey their personality and story to the audience."
                    />

                    <Details 
                    position="Fanart" 
                    company="Samples"
                    companyLink="/articles"
                    time="2023" address="Halara Souls" 
                    work="Fanart is the artwork created by fans of a particular work of fiction, such as a book, movie, or video game. Fanart allows fans to express their love and appreciation for their favorite characters and stories."
                    />

                    <Details 
                    position="Background Art" 
                    company="Samples"
                    companyLink="/articles"
                    time="2023" address="Halara Souls" 
                    work="Background art is the artistic creation of the settings and environments in which characters and stories take place. By using various techniques and mediums to bring these environments to life."
                    />

                    <Details 
                    position="Original Characters" 
                    company="Samples"
                    companyLink="/articles"
                    time="2023" address="Halara Souls" 
                    work="Creating original characters allows anyone to showcase their creativity and imagination, and can lead to the development of new and unique stories and worlds."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience