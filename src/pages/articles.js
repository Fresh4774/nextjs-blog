import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import React, { useRef } from 'react';
import Image from 'next/image';
import ArtPic from "../../public/images/profile/hehe.png";
import RatePic from "../../public/images/articles/rate.jpeg";
import { motion, useMotionValue } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';


const FramerImage = motion(Image);



const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

y
    return (
        <Link href={link} target='_blank'  onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
        <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
        <FramerImage style={{x:x, y:y}} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration:0.2}}} ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden "/>
        </Link>
    )
}


const Article = ({img, title, date, link}) => {
    return (
        <motion.li
        whileHover={{scale:1.05}}
        inital={{x:0, y:300}}
        whileInView={{x:0, y:50}}
        transition={{duration:0.5}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first: mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col'>
            <MovingImg title={title} img={img} link={link}></MovingImg>
            <Link href={link} target='_blank'>
            </Link>
            <span className="text-[#b4cbf0] font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}



const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-soild border-dark rounded-2xl relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt="Halara Soul" className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} 
                priority
                                sizes="(max-width: 768px) 100vw,
                                (ma-width: 1200px) 50vw,
                                33vw"/>
                </Link>
                <Link href={link}>
                    <h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4 xs:text-lg '>{title}</h2>
                </Link>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-[#B4CBF0] font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
        <Head>
            <title> Halara Soul - Hire Me</title>
            <meta name="description" content="About" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text="Hire Me" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 '>
                    <FeaturedArticle
                    title="Art Samples"
                    summary="Take a look at my previous artwork! Click here to view my Art Gallery!"
                    time="Halara Soul"
                    link="/projects"
                    img={ArtPic}
                    />

                    <FeaturedArticle
                    title="Portfolio Website"
                    summary="Take a look at my previous artwork! Click here to view my Portfloio Website!"
                    time="Halara Soul"
                    link="/"
                    img={ArtPic}
                    />
                </ul>

                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">Rates</h2>

                <ul>
                    <Article
                    title="Chibi/Icons/Emotes: 10$ / PHP200"
                    date="Halara Soul"
                    link="mailto:halara.an@gmail.com"
                    img={RatePic}
                    />

                    <Article
                    title="Bust up: 25$ / PHP500"
                    date="Halara Soul"
                    link="mailto:halara.an@gmail.com"
                    img={RatePic}
                    />

                    <Article
                    title="Half Body: 30$ / PHP1000"
                    date="Halara Soul"
                    link="mailto:halara.an@gmail.com"
                    img={RatePic}
                    />

                    <Article
                    title="Thigh up: 45$ / PHP1500"
                    date="Halara Soul"
                    link="mailto:halara.an@gmail.com"
                    img={RatePic}
                    />

                    <Article
                    title="Full Body: 60$ / PHP2000"
                    date="Halara Soul"
                    link="mailto:halara.an@gmail.com"
                    img={RatePic}
                    />
                </ul>


            </Layout>
        </main>
        </>
    )
}

export default articles