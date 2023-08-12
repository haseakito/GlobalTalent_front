import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type StatisticProps = {
    icon: StaticImport,
    stats: string,
    title: string,
    description: string
}

export function Statistic(props: StatisticProps) {

    const { icon, stats, title, description } = props
    
  return (
    <div className='text-center border-[1px] rounded hover:rounded-none shadow hover:shadow-md duration-300 py-10'>
        <div className='flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full sm:w-12 sm:h-20'>
            <Image
                src={ icon }
                alt=''
                className='w-8 h-8 text-teal-900 sm:w-10 sm:h-10'
            />            
        </div>
        <h6 className='text-4xl font-bold text-purple-400'>
            { stats }
        </h6>
        <p className='mb-2 font-bold text-md'>{ title }</p>
        <p className='text-gray-700 text-sm'>
            { description }
        </p>
    </div>
  )
}
