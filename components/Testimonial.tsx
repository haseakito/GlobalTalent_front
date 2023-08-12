import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { profile } from 'console'

type TestimonialProps = {
    testimonial: string,
    quote: string,
    profile: StaticImport,
    name: string,
    position: string,
}

export function Testimonial(props: TestimonialProps) {

    const { testimonial, quote, profile, name, position } = props
  return (
    <figure
        className='flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700'
    >
        <blockquote className='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{ testimonial }</h3>
            <p className='my-4'>{ quote }</p>
        </blockquote>
        <figcaption className='flex justify-center items-center space-x-3'>
            <Image
                src={ profile }
                alt=''
                className='w-9 h-9 rounded-full'
            />
            <div className='space-y-0.5 font-medium dark:text-white text-left'>
                <div>{ name }</div>
                <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
                    { position }
                </div>
            </div>
        </figcaption>
    </figure>
  )
}
