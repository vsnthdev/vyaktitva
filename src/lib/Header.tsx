/*
 *  A Header that has vyaktitva.
 *  Created On 28 December 2022
 */

import { Drawer } from 'vaul'
import { SvgBlob } from 'react-svg-blob'
import { SearchIcon, MenuIcon } from 'lucide-react'
import { motion, useInView, useIsPresent } from 'framer-motion'
import { YoutubeLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';
import { useEffect, useRef, useState } from 'react';

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
        name: 'Sessions',
        edges: 6,
        url: 'https://sessions.vsnth.dev'
    },
    {
        name: 'About',
        edges: 4,
        url: 'https://vsnth.dev#about'
    }
]

const socials = [
    {
        name: 'YouTube',
        url: 'https://vas.cx/youtube',
        icon: <YoutubeLogo weight='bold' className='w-5 h-5' />,
    },
    {
        name: 'GitHub',
        url: 'https://vas.cx/github',
        icon: <GithubLogo weight='bold' className='w-5 h-5' />,
    },
    {
        name: 'LinkedIn',
        url: 'https://vas.cx/linkedin',
        icon: <LinkedinLogo weight='bold' className='w-5 h-5' />,
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

    // HOOKS
    const headerRef = useRef(null)
    const inView = useInView(headerRef)

    return <Drawer.Root direction='right'>
        <header ref={headerRef} className='select-none'>
            <div className='container mx-auto font-medium py-10 px-10 flex justify-between text-lg lg:py-14'>
                {/* logo */}
                <div className='w-full flex'>
                    <motion.span
                        className='text-xl will-change-transform transform-gpu'
                        initial='initial'
                        transition={{
                            delay: 0.2,
                            type: 'spring',
                        }}
                        animate={inView ? 'animate' : 'initial'}
                        variants={{
                            initial: {
                                y: -85,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            }
                        }}
                    >{brand}</motion.span>
                </div>

                {/* navigation for desktops/laptops */}
                <motion.nav
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className='hidden w-full justify-center lg:flex'
                    variants={{
                        initial: {
                            opacity: 1,
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05,
                                when: 'beforeChildren',
                            }
                        }
                    }}>
                    {links.map(link => <motion.div
                        key={link.name}
                        className='relative mx-7'
                        transition={{
                            type: 'spring',
                        }}
                        variants={{
                            initial: {
                                y: -85,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1,
                            }
                        }}>
                        <a className='peer z-10 relative' href={link.url}>{link.name}</a>
                        <SvgBlob className='absolute -top-6 -left-8 z-0 transition-opacity pointer-events-none opacity-0 peer-hover:opacity-100' width={75} variant='gradient' colors={['#a855f7', '#4f46e5']} shapeProps={{
                            growth: 6,
                            edges: link.edges,
                        }} />
                    </motion.div>)}
                </motion.nav>

                {/* social media icons for desktops/laptops */}
                <motion.div
                    className='hidden w-full items-center justify-end space-x-7 lg:flex'
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    variants={{
                        initial: {
                            opacity: 1,
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                delayChildren: 0.2,
                                staggerChildren: 0.05,
                                when: 'beforeChildren',
                                staggerDirection: -1,
                            }
                        }
                    }}>
                    {socials.map(social => <motion.a
                        key={social.name}
                        href={social.url}
                        target='_blank'
                        rel='noopener'
                        transition={{
                            type: 'spring',
                        }}
                        variants={{
                            initial: {
                                y: -85,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1,
                            }
                        }}>
                        {social.icon}
                    </motion.a>)}

                    {/* search button */}
                    {onSearch && <motion.div
                        transition={{
                            type: 'spring',
                        }}
                        variants={{
                            initial: {
                                y: -85,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1,
                            }
                        }}
                        className='hidden pl-3 justify-center items-center lg:flex'>
                        <SearchIcon className='w-6 h-6 cursor-pointer' onClick={() => onSearch()} />
                    </motion.div>}
                </motion.div>

                {/* mobile burger menu */}
                <motion.div
                    className='lg:hidden'
                    initial='initial'
                    transition={{
                        delay: 0.3,
                        type: 'spring',
                    }}
                    animate={inView ? 'animate' : 'initial'}
                    variants={{
                        initial: {
                            y: -85,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        }
                    }}>
                    <Drawer.Trigger className='cursor-pointer'>
                        <MenuIcon className='w-7 h-7' />
                    </Drawer.Trigger>
                </motion.div>
            </div>
        </header>

        {/* mobile navigation menu */}
        <Drawer.Portal>
            <Drawer.Overlay className='bg-black/60 fixed h-[100vh] inset-0 z-[999]' />

            <Drawer.Content className='bg-neutral-800 fixed right-0 top-0 h-full pl-4 py-6 rounded-l-2xl flex z-[1000]'>
                <div className='h-full flex items-center pr-4'>
                    <div className='w-[0.4rem] h-10 bg-neutral-950 rounded-full' />
                </div>

                <div className='flex flex-col mr-6 space-y-4 w-full'>
                    <span className='text-xl font-medium pt-2'>Menu</span>
                    <div className='flex flex-col font-medium w-full min-w-36'>
                        {links.map(link => <Drawer.Trigger key={link.url} className='text-left flex w-full'>
                            <a href={link.url} className='py-2 w-full'>{link.name}</a>
                        </Drawer.Trigger>)}
                    </div>
                    <div className='flex space-x-6 pl-2 pt-2'>
                        {socials.map(social => <Drawer.Trigger key={social.url}>
                            <a href={social.url} target="_blank" rel="noopener">{social.icon}</a>
                        </Drawer.Trigger>)}
                    </div>
                </div>
            </Drawer.Content>
        </Drawer.Portal>
    </Drawer.Root>
}
