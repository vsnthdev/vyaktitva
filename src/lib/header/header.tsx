// CONSTANTS

import { clsx } from 'clsx'
import { CircleUserIcon, HouseIcon, MicVocalIcon, NotebookTextIcon } from "lucide-react"

const links = [
    {
        name: 'Home',
        url: 'https://vsnth.dev',
        icon: <HouseIcon />,
        getIsActive: (url: string) => url === 'https://vsnth.dev'
    },
    {
        name: 'Blog',
        url: 'https://vasanthdeveloper.com',
        icon: <NotebookTextIcon />,
        getIsActive: (url: string) => new URL(url).hostname === 'vasanthdeveloper.com'
    },
    {
        name: 'Sessions',
        url: 'https://sessions.vsnth.dev',
        icon: <MicVocalIcon />,
        getIsActive: (url: string) => new URL(url).hostname === 'sessions.vsnth.dev'
    },
    {
        name: 'About',
        url: 'https://vsnth.dev#about',
        icon: <CircleUserIcon />,
        getIsActive: (url: string) => url === 'https://vsnth.dev#about'
    }
]

// COMPONENT

export function Header() {
    return <>
        {/* fixed w-full bottom-0 pb-10 md:pb-20 justify-center flex pr-10 md:justify-end */}
        <div className="fixed w-full bottom-0 flex justify-center pb-10 md:justify-end md:pr-10 md:pb-12">
            <header className="gap-x-4 md:gap-x-6 flex items-center shadow-lg shadow-black/30 justify-center rounded-full px-6 py-3 backdrop-blur-md bg-black/20 border-2 border-white/30 text-xs md:text-base">
                {links.map(link => <a href={link.url} className={clsx(
                    // base styles
                    'flex items-center justify-center gap-x-1 md:gap-x-2 transition-opacity',
                    link.getIsActive(window.location.href) ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                )}>
                    <span className="[&>svg]:size-4">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                </a>)}
            </header>
        </div>
    </>
}