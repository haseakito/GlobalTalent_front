import React from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type BusinessProps = {
    icon: StaticImport,
    title: string,
    content: string,
}
export function Business(props: BusinessProps) {

    const { icon, title, content } = props

  return (               
    <div className='flex flex-row p-6 rounded-[20px]'>
        <div className='flex justify-center items-center w-[64px] h-[64px] rounded-full bg-dimBlue'>
            <Image
                src={ icon }
                alt=''
                className='w-1/2 h-1/2 object-contain'
            />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-[18px] leading-5 mb-1'>
                { title }
            </h4>
            <p className='font-poppins font-normal text-[16px] leading-6'>
                { content }
            </p>
        </div>
    </div>        
  )
}
