'use client'

import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useAuth } from './auth/Auth'
import { motion, useCycle } from "framer-motion"
import Link from 'next/link'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"  
import { 
    MdSettings,
    MdAccountCircle,
    MdLogout,
    MdSearch
} from 'react-icons/md'
import {
    FaGithub,
    FaSun,
    FaMoon,
    FaHeart,
    FaBookmark
} from 'react-icons/fa'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

export function Header() {

    // Hooks handling the router
    const router = useRouter()    

    // Hooks handling the theme
    const { theme, setTheme } = useTheme()

    // Hooks handling the auth with Firebase
    const auth = useAuth()

    // String state handling the search input 
    const [ search, setSearch ] = useState('')

    // Boolean state handling opening the sidebar menu
    const [isOpen, toggleOpen] = useCycle(false, true)

    // Container ref for sidebar menu
    const containerRef = useRef(null);

    // variants for sidebar
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
    }

    // Function handling submitting the user input
    const handleSubmit = async () => {
        console.log(search)
    }    

    // Popover items for account
    const AccountPopover = [
        {
            icon : <MdSettings size={35} />,            
            title : 'Account',
            onClick: () => { router.push('/account/') }
        },
        {
            icon : <FaHeart size={35} />,
            title : 'My Likes',
            onClick: () => { router.push('/account/') }
        },
        {
            icon : <FaBookmark size={30} />,
            title : 'Bookmarks',
            onClick: () => { router.push('/account/') }
        },
        {
            icon: <MdLogout size={35} />,
            title: 'Log out',
            onClick: () => { router.push('/account/') }
        }
    ]
  return (
    <header>
        <nav>
            <div className='flex justify-between py-3 px-5'>
                <motion.div
                    initial={ false }
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}
                >
                    <motion.div
                        className='absolute z-auto top-0 left-0 bottom-0 w-36 lg:w-60 bg-gray-100 dark:bg-gray-800'
                        variants={sidebar}
                    />
                    <MenuToggle toggle={() => toggleOpen()} />
                    <Navigation />
                </motion.div>                                
                <div className='flex items-center gap-5 lg:gap-10'>
                    <div className='lg:mt-2 relative w-auto'>
                        <input
                            type='text'
                            value={ search }
                            placeholder='Search'
                            className='w-0 lg:w-full py-2 px-4 rounded focus:ring-1 ring-gray-500 lg:border-[1px]'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className='hidden lg:block'
                        >
                            <MdSearch
                                size={35}
                                className='absolute right-1 top-1 cursor-pointer'                                
                            />
                        </button>
                        <button
                            className='block lg:hidden'
                            onClick={() => console.log('')}
                        >
                            <MdSearch
                                size={35}
                                className='absolute right-1 top-1 cursor-pointer'                                
                            />
                        </button>
                    </div>
                    <a
                        href='https://github.com/haseakito/hr_globe_front'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <FaGithub
                            size={ 35 }
                            className='hover:opacity-90 hover:scale-95 duration-300 cursor-pointer'
                        />
                    </a>
                    {
                        theme === 'dark' ? 
                            <FaSun
                                size={30}
                                className='hover:opacity-90 hover:scale-95 duration-300 cursor-pointer'
                                onClick={() => setTheme('light')}
                            />
                            :
                            <FaMoon
                                size={30}
                                className='hover:opacity-80 hover:scale-95 duration-300 cursor-pointer'
                                onClick={() => setTheme('dark')}
                            />
                    }                                
                    <button
                        className='relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800'
                        onClick={() => router.push('/login')}
                    >
                        <span className='relative px-7 lg:px-14 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0'>
                            Log in
                        </span>
                    </button>                            
                </div>
            </div>            
        </nav>
    </header>
  )
}
