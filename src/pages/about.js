import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/epic.jpeg';
import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import TransitionEffect from '@/components/TransitionEffect';


const AnimatedNumber = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration:3000})
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView) {
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })

},[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
        <Head>
            <title> Halara Soul - About</title>
            <meta name="description" content="About" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
           <Layout className='pt-16'> 
            <AnimatedText text="About Page" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 ' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                    <p className='font-medium'>To be labelled as A jack of all trades, a master of none, but better than a master of one, I have come to realize that my greatest passion lies in creating art. While I have been drawing since I was a young girl, it was only in 2020 that I discovered digital art. From then on, I decided to devote myself to fulfilling my childhood dream</p>
                    
                    <p className='font-medium my-4'>My name is Halara Soul, and I am a self-taught digital artist from and residing in the Philippines, also known as The Pearl of the Orient Seas. My focus is primarily on drawing women and fan art, but I also enjoy creating original characters and drawing men. Although the theme of my art pieces is mostly bubbly, like my personality, I also venture into the gore genre to showcase another side of myself. My artworks serve as a reflection of my emotions, imagination, and ideas.</p>
                    
                    <p className='font-medium'> As an artist, it is my goal to never lose the spark of creativity and to inspire others to pursue their passion. I aspire to become a renowned artist one day, with a distinct, unique, and sparkling style that people will immediately recognize as my own. Through my art, I hope to continue representing my emotions, imagination, and ideas while inspiring other artists to pursue their dreams</p>
                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 '>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                    <Image src={profilePic} alt="Halara Soul" className='w-full h-auto rounded-2xl' 
                         priority
                                sizes="(max-width: 768px) 100vw,
                                (ma-width: 1200px) 50vw,
                                33vw"
                                />
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className=' flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumber value={2} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text=sm'>Happy Clients</h2>
                    </div>

                    <div className=' flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumber value={34} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text=sm'>Artwork</h2>
                    </div>

                    <div className=' flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumber value={3} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text=sm'>years of experience</h2>
                    </div>
                </div>

            </div>

            <Skills />
            <Experience />
            </Layout>
        </main>
        </>
    )
}

export default about