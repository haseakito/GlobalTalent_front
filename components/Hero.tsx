'use client'

import React, { useEffect, useState } from 'react'
import Game from '@/public/Game.svg'
import Earth from '@/public/Earth.svg'
import Image from 'next/image'

export function Hero() {

    const [ loopCount, setLoopCount ] = useState(0)

    const [ isDeleting, setIsdeleting ] = useState(false)

    // String state 
    const [ text, setText ] = useState('')

    const [ delta, setDelta ] = useState(300)

    const period = 1000

    useEffect(() => {

        // Text array
        const rotateText = [ "Post Jobs", "Post blogs", "Connect with Mates"]

        // Function handling rotating the text
        const tick = () => {
            let i = loopCount % rotateText.length
            let fullText = rotateText[i]
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

            setText(updatedText)

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2)
            }

            if (!isDeleting && updatedText === fullText) {
                setIsdeleting(true)
                setDelta(period)

            } else if (isDeleting && updatedText === '') {
                setIsdeleting(false)
                setLoopCount(loopCount + 1)
                setDelta(500)
            }
        }

        const ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [ text, delta, isDeleting, loopCount ])


  return (
    <section
        className='relative flex justify-center my-5 px-6 text-white'  
    >
        <div className='w-full h-full absolute animate-fade-in'>
            <div className='absolute flex justify-center w-full h-full animate-fade-in'>
                <Image
                    src={ Game }
                    alt=''
                    className='w-60 lg:w-80 absolute -left-10 -bottom-10'
                />                
                <Image
                    src={ Earth }
                    alt=''
                    className='w-60 lg:w-80 absolute -right-10 -top-10'
                />               
            </div>
        </div>
        <div className='relative inline-block my-64 md:my-48 xl:my-64'>
            <h1 className='inline-block text-5xl font-bold text-black dark:text-white'>
                <span className='inline-block text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 via-purple-400 to-purple-800 text-6xl font-extrabold'>Pal</span> is a <span className='text-transparent bg-clip-text bg-gradient-to-br from-green-200 to-green-500'>Developer first</span> platform
            </h1>
            <div className='pl-10 pt-10 text-black dark:text-white'>
                <p className='text-2xl'>What you can expect here?</p>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-3xl font-extrabold'>{ text }</span>
            </div>
            <div className='pt-20 text-lg text-black dark:text-white'>
                <p>As a software engineer, you encounter many problems, don't you?</p>
                <p>You can connect with people with same interests and exchange information</p>
                <p>Also, you can post jobs to innovate this world faster!</p>
            </div>
        </div>            
    </section>
  )
}
