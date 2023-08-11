'use client'

import React from 'react'
import { useAuth } from './auth/Auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormSchema } from '@/utils/schema'
import { LoginFormProps } from '@/utils/types/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaGoogle, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export  function LoginForm() {

    // Hooks handling the auth with Firebase
    const auth = useAuth()

    // react-hook-form configs
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormProps>({
        mode: 'onChange',
        resolver: zodResolver(LoginFormSchema)
    })

    // Function handling submitting the user input
    const onSubmit: SubmitHandler<LoginFormProps> = async (e) => { 
        auth.LogInWithEmailAndPassword(e.email, e.password)
    }

  return (
    <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 m-auto bg-neutral-700 bg-opacity-60'>        
        <div className='w-full lg:w-3/5 my-6 mx-auto lg:max-w-3xl h-full'>
            <div className='relative bg-white shadow-md rounded px-20 py-10'>
                <form
                    className=''            
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className='text-center text-4xl font-bold mb-10'>
                        Log In
                    </h1>            
                    <div className='relative z-0 w-full gap-6 mb-6'>
                        <input
                            type='email'
                            placeholder=''
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register('email')}
                        />
                        <label
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                            Email
                        </label>
                        { errors.email && <p className='text-red-600 text-sm'>❌ { errors.email.message }</p>}                          
                    </div>
                    <div className='relative z-0 w-full gap-6 mb-6'>
                        <input
                            type='password'
                            placeholder=''
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register('password')}
                        />
                        <label
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                            Password
                        </label>                    
                        { errors.password && <p className='text-red-500 text-sm'>❌ { errors.password.message }</p> }
                    </div>                
                    <div className='flex justify-center mt-10'>
                        <button
                            type='submit'
                            className='w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
                        >
                            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md hover:bg-opacity-0'>
                                Login
                            </span>
                        </button>
                    </div>
                </form>
                <p className='text-center py-4'>or</p>
                <span className='absolute rounded-r-full bg-black w-1/3 h-1 left-1/2 animate-scale-in-center'></span>
                <span className='absolute rounded-l-full bg-black w-1/3 h-1 right-1/2 animate-scale-in-center'></span>
                <div className='pt-10'>
                    <div className='relative'>       
                        <div className='absolute top-5 left-5 text-xl text-white'>
                            <FaTwitter />
                        </div>
                        <div className='py-2'>
                            <button
                                className='rounded-full w-full py-2 px-8 bg-black text-white border-2 border-gray-200 hover:bg-opacity-80 hover:font-medium duration-300 focus:ring-1 ring-white'
                                onClick={() => auth.signInWithTwitter()}>
                                Twitter
                            </button>
                        </div>
                    </div>
                    <div className='relative'>       
                        <div className='absolute top-5 left-5 text-xl'>
                            <FaGoogle />
                        </div>
                        <div className='py-2'>
                            <button
                                className='rounded-full w-full py-2 px-8 bg-white text-black border-2 border-gray-200 hover:bg-gray-100 hover:font-medium duration-300 focus:ring-1 ring-black'
                                onClick={() => auth.signInWithGoogle()}>
                                Google
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-2 mt-10 pb-10'>
                    <div className='pl-4 text-slate-800 md:text-center'>
                        <p className='italic'>
                            Do not have an account?
                        <Link href='/signup' className='cursor-pointer inline-block opacity-75 hover:opacity-100 hover:scale-105 hover:font-medium hover:underline duration-100 ml-2'
                        >
                            Sign up
                        </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
