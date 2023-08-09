'use client'

import React, { useRef } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormSchema } from '@/utils/schema'
import { ContactFormProps } from '@/utils/types/Form'
import emailjs from '@emailjs/browser'
import { FaArrowCircleRight } from 'react-icons/fa'

export function ContactForm() {

    // Ref for contact form
    const formRef = useRef(null)

    // react-hook-form configs
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ContactFormProps>({
        mode: 'onChange',
        resolver: zodResolver(ContactFormSchema)
    })

    // Function handling sending a contact email
    const onSubmit: SubmitHandler<ContactFormProps> = async () => {        

        // EmailJs secrets
        const service_Id = process.env.NEXT_PUBLIC_SERVICE_ID
        const template_Id = process.env.NEXT_PUBLIC_TEMPLATE_ID
        const public_key = process.env.NEXT_PUBLIC_PUBLIC_API_KEY


        if (service_Id !== undefined && template_Id !== undefined && public_key !== undefined && formRef.current !== null ) {

            await emailjs.sendForm(service_Id, template_Id, formRef.current, public_key).then((result) => {
                console.log(result.text)
                window.alert('Contact sent Sucessfully')
            }).catch((error) => {
                console.log(error)
                alert('Ooops something went wrong')
            })
        }
    }

    
  return (
    <div className='relative overflow-hidden'>
        <form
            ref={ formRef }
            onSubmit={ handleSubmit(onSubmit) }
            className=' bg-white border-[1px] shadow-sm hover:shadow-lg duration-300 px-24 py-20'
        >
            <h1 className='text-center text-4xl font-bold py-4'>
                Contact
            </h1>
            <div className='relative z-0 w-full gap-6 mb-6'>
                <input
                    type='text'
                    placeholder=''
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    {...register('name')}
                />
                <label
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                >
                    Name*
                </label>
                { errors.name && <p className='text-red-600 text-sm'>❌ { errors.name.message }</p>}
            </div>
            <div className='relative z-0 w-full gap-6 mb-6'>
                <input
                    type='text'
                    placeholder=''
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    {...register('email')}
                />
                <label
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                >
                    Email*
                </label>
                { errors.email && <p className='text-red-600 text-sm'>❌ { errors.email.message }</p>}
            </div>
            <div className='relative z-0 w-full gap-6 mb-6'>
                <input
                    type='text'
                    placeholder=''
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    {...register('organization')}
                />
                <label
                    className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                >
                    Organization
                </label>
                { errors.organization && <p className='text-red-600 text-sm'>❌ { errors.organization.message }</p>}
            </div>
            <div>
                <label
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                    Contact Details*
                </label>
                <textarea
                    rows={5}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    {...register('contact')}   
                >
                </textarea>             
            </div>
            { errors.contact && <p className='text-red-600 text-sm'>❌ { errors.contact.message }</p>}
            <div className='pt-10'>
                <button
                    type='submit'
                    className='w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'                
                    >
                    <span className='w-full relative hover:font-semibold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                        Submit
                    </span>
                </button>
            </div>
        </form>
        <span className='absolute box-border z-10 -bottom-40 -right-36 bg-orange-400 w-60 h-96 rotate-45 translate-x-28'></span>
    </div>
  )
}
