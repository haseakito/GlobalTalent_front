import React from 'react'
import Profile from '@/public/Profile.jpg'
import Edit from '@/public/Edit.svg'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'
import Image from 'next/image'


export default function page() {
  return (
    <div>

        <Tabs defaultValue='account' className='grid justify-center mx-10'>
            <TabsList className='grid w-full grid-cols-5'>
                <TabsTrigger value='account'>Account</TabsTrigger>
                <TabsTrigger value='following'>Following</TabsTrigger>                
                <TabsTrigger value='followers'>Followers</TabsTrigger>
                <TabsTrigger value='bookamark'>Bookmark</TabsTrigger>
                <TabsTrigger value='password'>Password</TabsTrigger>            
            </TabsList>
            <TabsContent value='account' className='relative'>
                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>Make changes to your account here. Click save when you are done.</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='grid justify-center'>
                            <Image
                                src={ Profile }
                                alt=''
                                className='w-32 h-32 mb-3 rounded-full shadow-lg'
                            />                       
                        </div>
                        <button className='absolute right-48 top-48'>
                            <Image
                                src={ Edit }
                                alt=''
                                className='w-8 hover:bg-opacity-80 hover:scale-95 duration-150'
                            />
                        </button>
                        <div>
                            <label>
                                Name
                            </label>
                            <div className='border-b border-teal-500 py-2'>
                                <input
                                    type="text"
                                    placeholder="Example"
                                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                Bio
                            </label>
                            <div className='border-b border-teal-500 py-2'>
                                <input
                                    type="text"
                                    placeholder="I like sushi"
                                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                                />
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </CardContent>
                    <CardFooter >
                        <button
                            className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-gray-900 rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                        >
                            Save changes
                        </button>
                        <button                                
                            className='text-blue-600 hover:underline dark:text-blue-500 duration-200'
                        >
                            Delete an Account
                        </button>                        
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value='following'>
                <Card>
                    <CardHeader>
                        <CardTitle>Who you are following</CardTitle>
                        <CardDescription>See who you are following and get to know them more!</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value='followers'>
                <Card>
                    <CardHeader>
                        <CardTitle>Who are following you</CardTitle>
                        <CardDescription>See who follows you and get to interact more!</CardDescription>                    
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value='bookmark'>
                <Card>
                    <CardHeader>
                        <CardTitle>Bookmarks</CardTitle>
                        <CardDescription>Pin your interest and fascinating jobs!</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </TabsContent>        
            <TabsContent value='password'>
                <Card>
                    <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>Change your password here. Make sure you want to change password before you do.</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>                        
                        <div>
                            <label>
                                Current Password
                            </label>
                            <div className='border-b border-teal-500 py-2'>
                                <input
                                    type="password"
                                    placeholder=""
                                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                                />
                            </div>
                        </div>
                        <div className='pt-10'>
                            <label>
                                New Password
                            </label>
                            <div className='border-b border-teal-500 py-2'>
                                <input
                                    type="password"
                                    placeholder=""
                                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                Confirm New Password
                            </label>
                            <div className='border-b border-teal-500 py-2'>
                                <input
                                    type="password"
                                    placeholder=""
                                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <button
                            className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-200 focus:outline-none bg-gray-900 rounded-full border border-gray-200 hover:bg-gray-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                        >
                            Save changes
                        </button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}
