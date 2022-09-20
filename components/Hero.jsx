import React from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className='bg-salon w-full'>
        <div className='flex pt-[4rem] flex-col text-center lg:text-left lg:items-start items-center justify-center  min-h-screen lg:ml-16 lg:ml-0'>
            <div className='space-y-4'>
                <div className=''>
                    <h1 className='text-[3rem] text-white max-w-sm font-bold'>A Smooth Salon Experience in Your Town</h1>
                </div>
                <div className='max-w-md text-gray-primary'>
                    <p className='text-gray'>
                        If you've ever wondered what hairstyles suit you and how you should cut your hair, here's a list of the top styles for all men
                    </p>
                </div>
                <div className='flex lg:justify-start items-center justify-center space-x-4'>
                    <span>
                        <Link href="/Login">
                            <button className='rounded-lg bg-creme-secondary text-brown-secondary p-2'>
                                Book an Appointment
                            </button>
                        </Link>
                    </span>
                    <span>
                        <button className='rounded-full bg-blue-500 p-4 flex'>
                            <FaPlay className='text-white align-self-center'/>
                        </button>
                    </span>
                </div>
            </div>
            <div className='flex space-x-2 mt-[1.5rem]'>
                <div className='lg:absolute top-[75%] left-[65%] flex lg:flex-row flex-col justify-center items-center space-x-2'>
                    <div className='h-[75px] w-[75px] relative flex'>
                        <Image
                            src="https://cdn.pixabay.com/photo/2015/09/11/23/27/woman-936549_960_720.jpg"
                            className='object-cover rounded-full'
                            layout="fill"
                        />
                    </div>
                    <span>
                        <h1 className='text-white'>Hot Steam Tabs</h1>
                        <h5 className='text-creme-secondary font-bold'>$50.00</h5>
                    </span>
                </div>
                <div className='lg:absolute top-[25%] left-[75%] flex lg:flex-row flex-col justify-center items-center space-x-2'>
                    <div className='h-[75px] w-[75px] relative flex'>
                        <Image
                            src="https://cdn.pixabay.com/photo/2015/09/11/23/27/woman-936549_960_720.jpg"
                            className='object-cover rounded-full'
                            layout="fill"
                        />
                    </div>
                    <span>
                        <h1 className='text-white'>Hot Steam Tabs</h1>
                        <h5 className='text-creme-secondary font-bold'>$50.00</h5>
                    </span>
                </div>
            </div>
        </div>
        
        <div>
            <div className='initial-gradient'></div>
            <div className='second-gradient'></div>
        </div>
        
    </section>
  )
}

export default Hero