/*
 *  A Header that has vyaktitva.
 *  Created On 28 December 2022
 */

import { debounce } from 'debounce'
import { SvgBlob } from 'react-svg-blob'
import React, { useEffect, useState } from 'react'

// CONSTANTS

const links = [
    {
        name: 'Home',
        url: 'https://vsnth.dev',
    },
    {
        name: 'Blog',
        url: 'https://vasanthdeveloper.com'
    },
    {
        name: 'Projects',
        url: 'https://github.com/vsnthdev?tab=repositories'
    },
    {
        name: 'About',
        url: 'https://vas.cx/about'
    }
]

const socials = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/vsnthdev',
        icon: <svg className='w-4 aspect-square' version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path fill='currentColor' d='M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104'></path></svg>,
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/vasanthdeveloper/videos',
        icon: <svg className='w-4 aspect-square' fill='currentColor' version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z' /></svg>
    },
    {
        name: 'LinkedIn',
        url: 'https://vas.cx/linkedin',
        icon: <svg className='w-4 aspect-square' enable-background='new 0 0 32 32' version='1.0' viewBox='0 0 32 32' xmlSpace='preserve'
            xmlns='http://www.w3.org/2000/svg'>
            <g>
                <rect fill='currentColor' height='23' width='7' y='9' />
                <path d='M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z'
                    fill='currentColor' />
                <circle cx='3.5' cy='3.5' fill='currentColor' r='3.5' />
            </g>
        </svg>
    }
]

// UTILITY FUNCTIONS

const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min)

const generateShapeProps = () => {
    return {
        growth: 5,
        edges: randomNumber(4, 8),
    }
}

// INTERFACES

interface HeaderProps {
    brand: string
}

// COMPONENT

export const Header = (props: HeaderProps) => {
    // props
    const { brand } = props

    // hooks
    const [mobileNavOpen, toggleMobileNav] = useState(false)

    useEffect(() => {
        // when window is resized
        window.addEventListener('resize', debounce(() => {
            toggleMobileNav(false)
        }, 1000, true))

        // when the page is scrolled
        window.addEventListener('scroll', debounce(() => {
            toggleMobileNav(false)
        }, 1000, true))
    }, [])

    return <>
        <header className='select-none'>
            <div className='container mx-auto font-semibold py-10 px-10 flex justify-between text-lg lg:py-14'>
                {/* logo */}
                <div className='w-full flex'>
                    <span className='text-xl'>{brand}</span>
                </div>

                {/* navigation for desktops/laptops */}
                <nav className='hidden w-full justify-center lg:flex'>
                    {links.map(link => <div key={link.url} className='relative mx-7'>
                        <a className='peer z-10 relative' href={link.url}>{link.name}</a>
                        <SvgBlob className='absolute -top-6 -left-8 z-0 transition-opacity pointer-events-none opacity-0 peer-hover:opacity-100' width={75} variant='gradient' colors={['#60efff', '#0061ff']} shapeProps={generateShapeProps()} />
                    </div>)}
                </nav>

                {/* social media icons for desktops/laptops */}
                <div className='hidden w-full justify-end space-x-7 lg:flex'>
                    {socials.map(social => <a key={social.url} href={social.url} target='_blank' rel='noopener'>{social.icon}</a>)}
                </div>

                {/* mobile burger menu */}
                <div className='lg:hidden cursor-pointer' onClick={() => toggleMobileNav(true)}>
                    <svg className='w-7 aspect-square' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
                </div>
            </div>
        </header>

        {/* mobile navigation menu */}
        <div
            data-close='true'
            className={`select-none z-[999] fixed h-[100vh] inset-0 backdrop-blur-sm transition-opacity duration-300 bg-black/40 ${mobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={e => (e.target as any).dataset.close && toggleMobileNav(false)}>
            <div
                className={`fixed right-0 top-0 h-full bg-slate-800 pl-9 py-6 transition-transform ${mobileNavOpen ? 'delay-100 translate-x-0' : 'translate-x-56'}`}>
                <div className='flex flex-col mr-6 space-y-6'>
                    <span className='text-xl font-semibold pt-2'>Menu</span>
                    <div className='flex flex-col font-semibold'>
                        {links.map(link => <a key={link.url} className='pr-24 py-2' href={link.url}>{link.name}</a>)}
                    </div>
                    <div className='flex space-x-6 pl-2 pt-4'>
                        {socials.map(social => <a key={social.url} href={social.url} target="_blank" rel="noopener">{social.icon}</a>)}
                    </div>
                </div>
            </div>
        </div>
    </>
}
