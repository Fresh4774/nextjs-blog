import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 '>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    <Link href="https://www.youtube.com/@itssFriction/featured" target={"_blank"}>Created By <span className='underline underline-offset-2'>Friction</span></Link>
                    </div>
                <Link href="mailto:halara.an@gmail.com" target={"_blank"}><span className='font-semi-bold'>Contact</span></Link>
            </Layout>
        </footer>
    )
}

export default Footer