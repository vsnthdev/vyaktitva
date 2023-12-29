/*
 *  A KBar component that has vyaktitva.
 *  Created On 05 March 2023
 */

import React from 'react'
import { Action, useMatches, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults } from 'kbar'
import { HomeIcon, GalleryVerticalEndIcon, UserCircleIcon, GithubIcon, YoutubeIcon, LinkedinIcon, BirdIcon } from 'lucide-react';

export const actions: Action[] = [
    {
        id: 'home',
        name: 'Home',
        section: 'Main',
        icon: <HomeIcon className='w-[19px] h-[19px]' />,
        perform: () => { window.location.href = "https://vsnth.dev" },
    },
    {
        id: 'blog',
        name: 'Blog',
        section: 'Main',
        icon: <GalleryVerticalEndIcon className='w-[19px] h-[19px]' />,
        perform: () => { window.location.href = "https://vasanthdeveloper.com" },
    },
    {
        id: 'about',
        name: 'About me',
        section: 'Main',
        icon: <UserCircleIcon className='w-[19px] h-[19px]' />,
        perform: () => { window.location.href = "https://vas.cx/about" },
    },
    {
        id: 'youtube',
        name: 'YouTube',
        section: 'Social',
        icon: <YoutubeIcon className='w-[19px] h-[19px]' />,
        perform: () => { window.location.href = "https://vas.cx/videos" },
    },
    {
        id: 'github',
        name: 'GitHub',
        section: 'Social',
        icon: <GithubIcon className='w-[19px] h-[19px]' />,
        perform: () => { window.location.href = "https://vas.cx/github" },
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        section: 'Social',
        icon: <LinkedinIcon className='w-[19px] h-[19px]' />,
        perform: () => { window.location.href = "https://vas.cx/linkedin" },
    },
]

export const KBar = () => {
    // hooks
    const { results } = useMatches()

    return <KBarPortal>
        <KBarPositioner
            className='z-[1001] bg-black/60 backdrop-blur-sm'
            style={{
                animationName: 'animate-opacity',
                animationDuration: '200ms',
            }}>
            <KBarAnimator className='font-content bg-stone-900 rounded-md shadow-xl flex flex-col space-x-4 w-[35rem] overflow-hidden'>
                <div className='flex px-2 font-medium text-neutral-400 focus-within:text-neutral-200 selection:bg-white/20'>
                    <svg className='w-6 aspect-square ml-3 transition-colors' fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <KBarSearch className='w-full outline-none transition-colors bg-transparent rounded pl-4 pr-6 py-4 placeholder:text-neutral-400' />
                </div>
                <div className='flex flex-col'>
                    {/* showing results */}
                    {results.length != 0 && <div className='animate-faceIn border-t-2 border-stone-700/50 pb-3 pt-2'>
                        <KBarResults
                            items={results}
                            onRender={({ item, active }) =>
                                typeof item == 'string' ? (
                                    // section heading
                                    <div className='text-xs pt-3 pb-1 px-[34px] text-neutral-500 font-bold uppercase'>
                                        {item}
                                    </div>
                                ) : (
                                    // each item
                                    <div className='flex flex-col py-1'>
                                        <div className='flex flex-col px-4'>
                                            <div
                                                className={`flex pl-4 py-3 transition-colors rounded-md ${active ? 'bg-stone-600/70 cursor-pointer' : 'bg-stone-700/40'}`}>
                                                {/* the icon */}
                                                {item.icon && <div
                                                    className={`flex items-center justify-center ml-0 mr-3 transition-colors ${active
                                                        ? 'text-white'
                                                        : 'text-neutral-400'
                                                        }`}>
                                                    {item.icon}
                                                </div>}

                                                {/* name & subtitle */}
                                                <div className='flex flex-col text-sm'>
                                                    <span className={`transition-colors ${active ? 'text-white' : 'text-neutral-400'}`}>{item.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        />
                    </div>}

                    {/* when no results */}
                    {results.length == 0 && <div className='animate-faceIn select-none pointer-events-none  text-neutral-400 flex flex-col justify-center items-center pt-8 pb-12 space-y-4'>
                        <BirdIcon className='w-20 h-20 select-none' strokeWidth={1} />
                        <p className='text-lg'>No search results</p>
                    </div>}
                </div>
            </KBarAnimator>
        </KBarPositioner>
    </KBarPortal>
}
