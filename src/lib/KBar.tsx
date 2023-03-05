/*
 *  A KBar component that has vyaktitva.
 *  Created On 05 March 2023
 */

import React from 'react'
import { Action, useMatches, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults } from 'kbar'

export const actions: Action[] = [
    {
        id: 'home',
        name: 'Home',
        section: 'Main',
        perform: () => { window.location.href = "https://vsnth.dev" },
        icon: <svg className='w-5 aspect-square' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" />
        </svg>
    },
    {
        id: 'blog',
        name: 'Blog',
        section: 'Main',
        perform: () => { window.location.href = "https://vasanthdeveloper.com" },
        icon: <svg className='w-5 aspect-square' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5.127 3.502L5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0012.75 2h-5.5a2.25 2.25 0 00-2.123 1.502zM1 10.25A2.25 2.25 0 013.25 8h13.5A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5zM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 015.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 00-.123-.002H3.25z" />
        </svg>
    },
    {
        id: 'about',
        name: 'About me',
        section: 'Main',
        perform: () => { window.location.href = "https://vas.cx/about" },
        icon: <svg className='w-5 aspect-square' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd" d="M1 6a3 3 0 013-3h12a3 3 0 013 3v8a3 3 0 01-3 3H4a3 3 0 01-3-3V6zm4 1.5a2 2 0 114 0 2 2 0 01-4 0zm2 3a4 4 0 00-3.665 2.395.75.75 0 00.416 1A8.98 8.98 0 007 14.5a8.98 8.98 0 003.249-.604.75.75 0 00.416-1.001A4.001 4.001 0 007 10.5zm5-3.75a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm0 6.5a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zm.75-4a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z" />
        </svg>
    },
    {
        id: 'twitter',
        name: 'Twitter',
        section: 'Social',
        perform: () => { window.location.href = "https://vas.cx/twitter" },
        icon: <svg className='w-5 aspect-square' version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path fill='currentColor' d='M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104'></path></svg>,
    },
    {
        id: 'youtube',
        name: 'YouTube',
        section: 'Social',
        perform: () => { window.location.href = "https://vas.cx/videos" },
        icon: <svg className='w-5 aspect-square' fill='currentColor' version='1.1' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><path d='M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z' /></svg>
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        section: 'Social',
        perform: () => { window.location.href = "https://vas.cx/linkedin" },
        icon: <svg className='w-5 aspect-square' enableBackground="new 0 0 56.693 56.693" version="1.1" viewBox="0 0 56.693 56.693" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill='currentColor'><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" /><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" /></svg>
    }
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
            <KBarAnimator className='font-content bg-slate-800 rounded-md shadow-xl flex flex-col space-x-4 w-[35rem] overflow-hidden'>
                <div className='flex px-2 text-lg font-medium text-slate-200 selection:bg-white/20'>
                    <svg className='w-6 aspect-square ml-3' fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <KBarSearch className='w-full outline-none transition-colors bg-slate-800 rounded pl-4 pr-6 py-4 placeholder:text-slate-500' />
                </div>
                <div className='flex flex-col'>
                    {/* showing results */}
                    {results.length != 0 && <div className='animate-faceIn  border-t-2 border-slate-700/50 pb-3 pt-2'>
                        <KBarResults
                            items={results}
                            onRender={({ item, active }) =>
                                typeof item == 'string' ? (
                                    // section heading
                                    <div className='text-sm px-8 pt-3 pb-1 text-slate-500 font-semibold'>
                                        {item}
                                    </div>
                                ) : (
                                    // each item
                                    <div className='flex flex-col px-4 pt-1 pb-0'>
                                        <div
                                            className={`flex pl-4 py-3 transition-colors rounded-md ${active ? 'bg-slate-700/70 cursor-pointer' : ''}`}>
                                            {/* the icon */}
                                            {item.icon && <div
                                                className={`flex items-center justify-center ml-0 mr-3 transition-colors ${active
                                                    ? 'text-slate-300'
                                                    : 'text-slate-500'
                                                    }`}>
                                                {item.icon}
                                            </div>}

                                            {/* name & subtitle */}
                                            <div className='flex flex-col'>
                                                <span className={`transition-colors ${active ? 'text-white' : 'text-slate-400'}`}>{item.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        />
                    </div>}

                    {/* when no results */}
                    {results.length == 0 && <div className='animate-faceIn text-slate-400 flex flex-col justify-center items-center pt-8 pb-12 space-y-4'>
                        <svg className='w-10 aspect-square' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" />
                        </svg>
                        <p className='text-lg'>No search results</p>
                    </div>}
                </div>
            </KBarAnimator>
        </KBarPositioner>
    </KBarPortal>
}
