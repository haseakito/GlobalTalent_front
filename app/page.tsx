import { Hero } from "@/components/Hero"
import Thunder from '@/public/Thunder.svg'
import React from '@/public/React.svg'
import Python from '@/public/Python.svg'
import Discord from '@/public/Discord.svg'
import Profile from '@/public/Profile.jpg'
import Star from '@/public/Star.svg'
import Secure from '@/public/Secure.svg'
import Rocket from '@/public/Rocket.svg'
import { Statistic } from "@/components/Statistic"
import { Testimonial } from "@/components/Testimonial"
import { Business } from "@/components/Business"

export default function Home() {

    // Business data
    const BusinessData = [
        {
            icon: Star,
            title: 'Engineer first',
            content: 'You can connect with software engineers around the world. Post blogs, jobs, and find your best mates.',            
        },
        {
            icon: Secure,
            title: 'Trust',
            content: 'Your information are not used for any marketing purposes. we trust our community to use this platform properly.',            
        },
        {
            icon: Rocket,
            title: 'Global',
            content: 'Connect with our community across the globe and enrich both your personal and professional life.',     
        }
    ]

    // Statistics data
    const StatsData = [
        {
            icon: Thunder,
            stats: '800',
            title: 'Users',
            description: "We're happy to announce active users hit all time high!"
        },
        {
            icon: React,
            stats: '18.2.0',
            title: 'React',
            description: 'We use Nextjs & React in our frontend for this project.'
        },
        {
            icon: Python,
            stats: '3.7+',
            title: 'FastAPI',
            description: 'We use FastAPI in our backend for this project'
        },
        {
            icon: Discord,
            stats: '30+',
            title: 'Discord',
            description: 'Join discord and connect with us for our community!'
        }
    ]

    // Testimonial data
    const TestimonialData = [
        {
            testimonial: 'Speecheless with how wonderful this community is',
            quote: '',
            profile: Profile,
            name: 'James Lee',
            position: 'Software Engineer',
        },
        {
            testimonial: 'Mindblowing how easy to connect with people',
            quote: '',
            profile: Profile,
            name: 'James Lee',
            position: 'Software Engineer',
        },
        {
            testimonial: 'Much better experiences than traditional social media',
            quote: '',
            profile: Profile,
            name: 'James Lee',
            position: 'Software Engineer',
        },
        {
            testimonial: 'Warm, collaborative community open to beginners',
            quote: '',
            profile: Profile,
            name: 'James Lee',
            position: 'Software Engineer',
        }
    ]

  return (
    <div >
        <Hero />
        <section className="mt-10 bg-white dark:bg-gray-900 flex md:flex-row flex-col sm:py-16 py-6">
            <div className="flex-1 flex justify-center items-start flex-col mx-10">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
                    <span>Pal</span> is the platform designed for Software Engineers
                </h2>
                <p className="font-poppins font-semibold text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                    With Pal, you never have to worry about friends, jobs, and most importantly bugs!
                </p>
                <button
                    className="py-4 px-6 font-poppins font-semibold text-[18px] text-primary bg-cyan-400 hover:opacity-90 duration-300 rounded-[10px] outline-none mt-10"
                >
                    Get Started
                </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
                { BusinessData.map((value, key) => (
                    <div
                        key={ key }                    
                    >
                        <Business
                            icon={ value.icon }
                            title={ value.title }
                            content={ value.content }
                        />
                    </div>
                ))}
            </div>
        </section>
        <section className='mt-10 bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>                
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-2 lg:py-20">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        { StatsData.map((value, key) => (
                            <div key={ key }>
                                <Statistic
                                    icon={ value.icon }
                                    stats={ value.stats }
                                    title={ value.title }
                                    description={ value.description }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>        
        <section className='mt-10 bg-white dark:bg-gray-900'>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
                <div className='mx-auto max-w-screen-sm'>
                    <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                        What People are saying about us
                    </h2>
                    <p className='mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
                        Explore everything you need to know and get comfortable with our community! 
                    </p>
                </div>
                <div className='grid gap-3 lg:gap-10 mb-8 lg:mb-12 lg:grid-cols-2'>
                    { TestimonialData.map((value, key) => (
                        <div key={ key }>
                            <Testimonial
                                testimonial={ value.testimonial }
                                quote={ value.quote }
                                profile={ value.profile }
                                name={ value.name }
                                position={ value.position }
                            
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}
