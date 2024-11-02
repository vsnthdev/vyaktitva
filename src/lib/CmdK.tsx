'use client'
/*
 *  Command palette component that has vyaktitva.
 *  Created On 02 November 2024
 */

import { DiscordLogo, GithubLogo, LinkedinLogo, WhatsappLogo, XLogo, YoutubeLogo, At } from '@phosphor-icons/react/dist/ssr'
import { Command } from 'cmdk'
import { BirdIcon, GalleryVerticalEndIcon, HomeIcon, PresentationIcon, SearchIcon, UserCircleIcon } from 'lucide-react'
import { KeyboardEvent, ReactNode, useEffect, useState } from 'react'

function Group({ children, heading }: { children: ReactNode, heading: string }) {
    return <Command.Group heading={heading} className='flex flex-col gap-y-2 [&[hidden]]:hidden [&>div[cmdk-group-heading]]:uppercase [&>div[cmdk-group-heading]]:opacity-50 [&>div[cmdk-group-heading]]:text-sm [&>div[cmdk-group-heading]]:font-bold [&>div[cmdk-group-items]]:flex [&>div[cmdk-group-items]]:flex-col [&>div[cmdk-group-items]]:gap-y-2'>
        {children}
    </Command.Group>
}

function Item({ icon, name, onSelect }: { icon: ReactNode, name: string, onSelect: () => void }) {
    return <Command.Item
        onSelect={onSelect}
        className='flex items-center gap-x-2 pl-4 py-3 transition-colors rounded-md data-[selected=false]:bg-neutral-700/40 data-[selected=true]:bg-neutral-600 data-[selected=true]:cursor-pointer data-[selected=true]:text-white data-[selected=false]:text-neutral-300'>
        {icon}
        <span>{name}</span>
    </Command.Item>
}

export function CmdK() {
    // HOOKS
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: globalThis.KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                if (window.innerWidth >= 1024) {
                    e.preventDefault()
                    setOpen((open) => !open)
                }
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return <Command.Dialog open={open} onOpenChange={setOpen} onClick={() => setOpen(false)} className='grid place-items-center fixed inset-0 z-[1001] bg-black/40'>
        <div className='font-content bg-neutral-800 rounded-md shadow-xl flex flex-col w-[35rem] overflow-hidden'>
            <div className='flex px-2 font-medium text-neutral-400 focus-within:text-neutral-200 selection:bg-white/20'>
                <div className='flex items-center ml-3 mt-[2px]'>
                    <SearchIcon className='w-5 h-5 aspect-square transition-colors' strokeWidth={2.2} />
                </div>
                <Command.Input
                    placeholder='Search links'
                    className='w-full outline-none transition-colors bg-transparent rounded pl-4 pr-6 py-4 placeholder:text-neutral-400'
                />
            </div>

            <Command.List className='flex flex-col border-t-2 border-neutral-700 p-4 overflow-y-scroll max-h-[475px] [&>div[cmdk-list-sizer]]:flex [&>div[cmdk-list-sizer]]:flex-col [&>div[cmdk-list-sizer]]:gap-y-4'>
                <Command.Empty className='select-none pointer-events-none  text-neutral-400 flex flex-col justify-center items-center pt-8 pb-12 space-y-4'>
                    <BirdIcon className='w-20 h-20 select-none' strokeWidth={1} />
                    <p className='text-lg'>No search results</p>
                </Command.Empty>

                <Group heading='Main'>
                    <Item
                        name='Home'
                        icon={<HomeIcon className='size-4' />}
                        onSelect={() => { window.location.href = "https://vsnth.dev" }}
                    />
                    <Item
                        name='Blog'
                        icon={<GalleryVerticalEndIcon className='size-4' />}
                        onSelect={() => { window.location.href = "https://vasanthdeveloper.com" }}
                    />
                    <Item
                        name='Sessions'
                        icon={<PresentationIcon className='size-4' />}
                        onSelect={() => { window.location.href = "https://sessions.vsnth.dev" }}
                    />
                    <Item
                        name='About me'
                        icon={<UserCircleIcon className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/about" }}
                    />
                </Group>

                <Group heading='Social'>
                    <Item
                        name='YouTube'
                        icon={<YoutubeLogo weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/videos" }}
                    />
                    <Item
                        name='GitHub'
                        icon={<GithubLogo weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/github" }}
                    />
                    <Item
                        name='LinkedIn'
                        icon={<LinkedinLogo weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/linkedin" }}
                    />
                    <Item
                        name='X (Twitter)'
                        icon={<XLogo weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/twitter" }}
                    />
                    <Item
                        name='Discord'
                        icon={<DiscordLogo weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/@discord" }}
                    />
                    <Item
                        name='WhatsApp'
                        icon={<WhatsappLogo weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/gtel" }}
                    />
                    <Item
                        name='Email'
                        icon={<At weight='bold' className='size-4' />}
                        onSelect={() => { window.location.href = "https://vas.cx/gtel" }}
                    />
                </Group>
            </Command.List>
        </div>

    </Command.Dialog>
}
