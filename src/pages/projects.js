import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import IconPic from "../../public/images/profile/soul.png";
import project1 from "../../public/images/projects/one.png";
import project2 from "../../public/images/projects/eight.jpeg";
import project3 from "../../public/images/projects/eleven.jpeg";
import project4 from "../../public/images/projects/five.jpeg";
import project5 from "../../public/images/projects/four.jpeg";
import project6 from "../../public/images/projects/nine.jpeg";
import project7 from "../../public/images/projects/oneEight.jpeg";
import project8 from "../../public/images/projects/oneFive.jpeg";
import project9 from "../../public/images/projects/oneFour.jpeg";
import project10 from "../../public/images/projects/oneNine.jpeg";
import project11 from "../../public/images/projects/oneSeven.jpeg";
import project12 from "../../public/images/projects/oneSix.jpeg";
import project13 from "../../public/images/projects/oneTen.jpeg";
import project14 from "../../public/images/projects/oneThree.jpeg";
import project15 from "../../public/images/projects/oneTwo.jpeg";
import project16 from "../../public/images/projects/seven.jpeg";
import project17 from "../../public/images/projects/six.jpeg";
import project18 from "../../public/images/projects/ten.jpeg";
import project19 from "../../public/images/projects/three.jpeg";
import project20 from "../../public/images/projects/two.jpeg";
import project21 from "../../public/images/projects/twoFive.jpeg";
import project22 from "../../public/images/projects/twoFour.jpeg";
import project23 from "../../public/images/projects/twothree.jpeg";
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, homeLink}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:rounded-[1.5rem] ' />

            <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}} priority
                sizes="(max-width: 768px) 100vw,
                (ma-width: 1200px) 50vw,
                50vw"></FramerImage>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-[#b4cbf0] font-medium text-xl xs:text-base '>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={homeLink} className='w-10'><Image src={IconPic} alt="Halara Soul" /></Link>
            <Link href={link} className="ml-4 flex items-center bg-dark text-light p-2 px-7 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light
            sm:px-4 sm:text-base">
                  More
                  </Link>
            </div>
            </div>

        </article>
    )
}

const Project = ({type, title, img, link, homeLink}) => {
    return (
<article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:text-light
xs:p-4'>
<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
<Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}></FramerImage>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-[#b4cbf0] font-medium text-xl lg:text-lg md:text-base '>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl '>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} className="text-lg font-semibold underline underline-offset-2 md:text-base ">
                  More
                  </Link>
            <Link href={homeLink} className='w-8 md:w-6'><Image src={IconPic} alt="Halara Soul" /></Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
        <Head>
            <title> Halara Soul - Art Gallery</title>
            <meta name="description" content="About" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Art Gallery" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className='grid grid-cols-12 gap-24 gap-y-200 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Halara Soul's Art Gallery"
                        summary="I am Halara Soul and I am a self-taught digital artist hailing from the Philippines. I am incredibly excited to share my passion for art with you through this gallery. I hope to create a space that inspires and engages visitors from all walks of life. In this Art Gallery all of my work is presented."
                        link="/"
                        type="About Art Gallery"
                        img={project1}
                        homeLink="/"
                        />
                        </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul"
                        link="/"
                        type="Art Gallery"
                        img={project2}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project3}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project4}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project5}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project6}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project7}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project8}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project9}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project10}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project11}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project12}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project13}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project14}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project15}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project16}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project17}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project18}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project19}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project19}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project20}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project21}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project22}
                        homeLink="/"
                        />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
                        title="Halara Soul's Art Gallery"
                        link="/"
                        type="About Art Gallery"
                        img={project23}
                        homeLink="/"
                        />
                        </div>
                </div>
            </Layout>
        </main>
        </>
    )
}

export default projects