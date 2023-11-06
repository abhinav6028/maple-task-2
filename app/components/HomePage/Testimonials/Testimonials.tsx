'use client'

import React from 'react'
import H1, { H5 } from '../../UI/Typography'
import Carousel from 'react-elastic-carousel';



function Testimonials() {


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2.5 },
    ];

    const customBtn = () => {
        return (
            <button></button>
        )
    }

    const reviews = [
        {
            name: 'John Brown',
            text: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.'

        },
        {
            name: 'John Brown',
            text: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.'

        },
        {
            name: 'John Brown',
            text: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.'

        },
        {
            name: 'John Brown',
            text: 'The Canadian Home is absolutely amazing. It successfully surpasses all the other apps in this area. Their Chat function is what have been missing from online home search. The experts are always available with correct answers to anything.'

        },
    ]



    return (
        <div className='bg-[#ECF4FA] md:p-10 py-5 text-center  flex justify-center' >


            <div className='w-[1200px] space-y-5'>

                <H1>The Canadian Home</H1>
                <h5 className='font-semibold'>What customers say about the The Canadian Home experience</h5>

                <div className='mt-6'>

                    <Carousel breakPoints={breakPoints} renderArrow={customBtn}>

                        {reviews.map((item, index) => (

                            <div key={index} className='text-center space-y-5 px-10 m-4  bg-white p-5 py-16 w-[800px] rounded-3xl border border-blue-400 '>
                                <p className='text-xs'>{item.text}</p>

                                <h1 className='font-bold ' >{item.name}</h1>
                            </div>

                        ))}

                    </Carousel>

                </div>
            </div>

        </div>
    )
}

export default Testimonials
