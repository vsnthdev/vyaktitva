// CONSTANTS

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'
import { CircleUserIcon, HouseIcon, MicVocalIcon, NotebookTextIcon } from "lucide-react"
import { YoutubeLogoIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react/dist/ssr'

const links = [
    {
        id: 'home',
        name: 'Home',
        url: 'https://vsnth.dev',
        icon: <HouseIcon />,
        getIsActive: (url: string) => url === 'https://vsnth.dev'
    },
    {
        id: 'blog',
        name: 'Blog',
        url: 'https://vasanthdeveloper.com',
        icon: <NotebookTextIcon />,
        getIsActive: (url: string) => new URL(url).hostname === 'vasanthdeveloper.com'
    },
    {
        id: 'sessions',
        name: 'Sessions',
        url: 'https://sessions.vsnth.dev',
        icon: <MicVocalIcon />,
        getIsActive: (url: string) => new URL(url).hostname === 'sessions.vsnth.dev'
    },
    {
        id: 'about',
        name: 'About',
        url: 'https://vsnth.dev#about',
        icon: <CircleUserIcon />,
        getIsActive: (url: string) => url === 'https://vsnth.dev#about'
    }
]

const socials = [
    {
        name: 'YouTube',
        url: 'https://vas.cx/youtube',
        icon: <YoutubeLogoIcon weight='bold' className='w-5 h-5' />,
    },
    {
        name: 'GitHub',
        url: 'https://vas.cx/github',
        icon: <GithubLogoIcon weight='bold' className='w-5 h-5' />,
    },
    {
        name: 'LinkedIn',
        url: 'https://vas.cx/linkedin',
        icon: <LinkedinLogoIcon weight='bold' className='w-5 h-5' />,
    }
]

// COMPONENT

export function Header({ activeId, className }: { activeId?: string, className?: string }) {
    // define different animations for mobile and desktop
    const mobileAnimation = {
        initial: { y: 100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 0.5,
            }
        },
    }

    const desktopAnimation = {
        initial: { x: 100, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                type: 'spring',
            }
        },
    }

    // select animation based on device
    const animation = isMobile ? mobileAnimation : desktopAnimation

    return <>
        <div className="fixed z-40 w-full bottom-0 flex pb-10 justify-center md:justify-end md:pr-10 md:pb-12">
            <motion.header
                initial={animation.initial}
                animate={animation.animate}
                className={twMerge(
                    // base styles
                    'flex items-center shadow-lg shadow-black/40 justify-center rounded-full px-6 py-4 md:py-3 backdrop-blur-md bg-black/30 border-2 border-white/20 text-xs md:text-base',

                    // user overrides
                    className ? className : '',
                )}
            >
                <div className='gap-x-6 flex items-center'>
                    {links.map(link => <a key={`header-link-${link.id}`} href={link.url} className={clsx(
                        // base styles
                        'flex items-center justify-center gap-x-1 md:gap-x-2 transition-opacity',
                        activeId && link.id == activeId ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                    )}>
                        <span className="[&>svg]:size-5 md:[&>svg]:size-4">{link.icon}</span>
                        <span className="font-medium hidden md:inline">{link.name}</span>
                    </a>)}
                </div>
                <div className='px-4 h-full pointer-events-none'>
                    <div className='bg-white w-[2px] rounded-full h-full opacity-20' />
                </div>
                <div className='gap-x-4 flex items-center'>
                    {socials.map(link => <a key={`header-social-${link.name}`} target='_blank' rel='noopener' href={link.url} className='transition-opacity opacity-60 hover:opacity-100'>
                        <span className="[&>svg]:size-5 md:[&>svg]:size-4">{link.icon}</span>
                    </a>)}
                </div>
            </motion.header>
        </div>
    </>
}