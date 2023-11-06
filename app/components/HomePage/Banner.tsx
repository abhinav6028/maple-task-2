"use client"
import Image from 'next/image'
import React from 'react'
import H1, { H5 } from '../UI/Typography'
import InputField from '../UI/InputField'
import Button from '../UI/Button'

export default function Banner() {
    return (
        <div>
            <div className="w-screen h-[600px] bg-[url('/Assets/home/skyImage.jpg')] bg-cover flex flex-col relative ">
                <div className='w-full text-center mt-auto absolute top-24 md:space-y-8 space-y-3' >

                    <H1 >Thinking of selling your home?</H1>
                    <div className='w-full flex justify-center'>
                        <div className='md:w-[700px] w-[300px] space-y-5 '>

                            <H5>Get an instant estimate of your home’s value. You can quickly determine the estimated value of your home by answering a few quick questions.</H5>
                            <InputField />
                            <Button>
                                Get Free Estimate
                            </Button>
                        </div>

                    </div>

                </div>


            </div>
            <Image src={'/Assets/home/BannerImage.png'} alt='bgimage' width={1000} height={1000} className='w-full  md:h-auto absolute md:top-10 top-72 h-96' />
        </div>
    )
}
