/*
 *  A Header that has vyaktitva.
 *  Created On 28 December 2022
 */

import debounce from 'debounce'
import { SvgBlob } from 'react-svg-blob'
import React, { useEffect, useState } from 'react'
import { YoutubeIcon, GithubIcon, LinkedinIcon, SearchIcon, MenuIcon } from 'lucide-react'

// CONSTANTS

const links = [
    {
        name: 'Home',
        edges: 5,
        url: 'https://vsnth.dev',
    },
    {
        name: 'Blog',
        edges: 7,
        url: 'https://vasanthdeveloper.com'
    },
    {
        name: 'Projects',
        edges: 6,
        url: 'https://github.com/vsnthdev?tab=repositories'
    },
    {
        name: 'About',
        edges: 4,
        url: 'https://vas.cx/about'
    }
]

const socials = [
    {
        name: 'YouTube',
        url: 'https://vas.cx/youtube',
        icon: <YoutubeIcon className='w-5 h-5' />,
    },
    {
        name: 'GitHub',
        url: 'https://vas.cx/github',
        icon: <GithubIcon className='w-5 h-5' />,
    },
    {
        name: 'LinkedIn',
        url: 'https://vas.cx/linkedin',
        icon: <LinkedinIcon className='w-5 h-5' />,
    }
]

// INTERFACES

interface HeaderProps {
    brand: string
    onSearch?: () => any
}

// COMPONENT

export function Header(props: HeaderProps) {
    // props
    const { brand, onSearch } = props

    // hooks
    const [mobileNavOpen, toggleMobileNav] = useState(false)

    useEffect(() => {
        // when window is resized
        window.addEventListener('resize', debounce(() => {
            toggleMobileNav(false)
        }, 1000))

        // when the page is scrolled
        window.addEventListener('scroll', debounce(() => {
            toggleMobileNav(false)
        }, 1000))
    }, [])

    return <>
        <header className='select-none'>
            <div className='container mx-auto font-medium py-10 px-10 flex justify-between text-lg lg:py-14'>
                {/* logo */}
                <div className='w-full flex'>
                    <span className='text-xl'>{brand}</span>
                </div>

                {/* navigation for desktops/laptops */}
                <nav className='hidden w-full justify-center lg:flex'>
                    {links.map(link => <div key={link.url} className='relative mx-7'>
                        <a className='peer z-10 relative' href={link.url}>{link.name}</a>
                        <SvgBlob className='absolute -top-6 -left-8 z-0 transition-opacity pointer-events-none opacity-0 peer-hover:opacity-100' width={75} variant='gradient' colors={['#ff0f7b', '#f89b29']} shapeProps={{
                            growth: 6,
                            edges: link.edges,
                        }} />
                    </div>)}
                </nav>

                {/* social media icons for desktops/laptops */}
                <div className='hidden w-full items-center justify-end space-x-7 lg:flex'>
                    {socials.map(social => <a key={social.url} href={social.url} target='_blank' rel='noopener'>{social.icon}</a>)}

                    {/* search button */}
                    {onSearch && <div className='hidden pl-3 justify-center items-center lg:flex'>
                        <SearchIcon className='w-6 h-6 cursor-pointer' onClick={() => onSearch()} />
                    </div>}
                </div>

                {/* mobile burger menu */}
                <div className='lg:hidden cursor-pointer' onClick={() => toggleMobileNav(true)}>
                    <MenuIcon className='w-7 h-7' />
                </div>
            </div>
        </header>

        {/* mobile navigation menu */}
        <div
            data-close='true'
            className={`select-none z-[999] fixed h-[100vh] inset-0 backdrop-blur-sm transition-opacity duration-300 bg-black/40 ${mobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            onClick={e => (e.target as any).dataset.close && toggleMobileNav(false)}>
            <div
                className={`fixed right-0 top-0 h-full bg-stone-800 pl-9 py-6 transition-transform ${mobileNavOpen ? 'delay-100 translate-x-0' : 'translate-x-56'}`}>
                <div className='flex flex-col mr-6 space-y-4'>
                    <span className='text-xl font-medium pt-2'>Menu</span>
                    <div className='flex flex-col font-medium'>
                        {links.map(link => <a key={link.url} className='pr-24 py-2' href={link.url}>{link.name}</a>)}
                    </div>
                    <div className='flex space-x-6 pl-2 pt-2'>
                        {socials.map(social => <a key={social.url} href={social.url} target="_blank" rel="noopener">{social.icon}</a>)}
                    </div>
                </div>
            </div>
        </div>
    </>
}
