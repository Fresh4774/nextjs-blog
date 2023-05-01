import React from 'react'
import { motion } from "framer-motion"


const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-light text-dark py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs-bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.05}} 
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once: true}}>
        {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark  text-light dark:bg-light dark:text-dark p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}} >
            Anime Art
            </motion.div>

            <Skill name="Character Art" x="-13.2vw" y="-15.4vw" />
            <Skill name="Fanarts" x="-28vw" y="-2vw" />
            <Skill name="Original Characters" x="19vw" y="14.6vw" />
            <Skill name="Character Design" x="26vw" y="-13vw" />
            <Skill name="Backgrounds" x="-17vw" y="13vw" />
        </div>
        </>
    )
}

export default Skills