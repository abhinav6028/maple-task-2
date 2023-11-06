'use client'


import React, { useState } from 'react'
import H1 from '../../UI/Typography'

function Corousal() {
    const [startingIndex, setStartingIndex] = useState(0)
    const [endingIndex, setEndingIndex] = useState(5)
    // console.log(startingIndex, endingIndex, '88888888888888')
    const images = [
        "/Assets/home/Corousal/image 11.png",
        "/Assets/home/Corousal/image 8.png",
        "/Assets/home/Corousal/image 9.png",
        "/Assets/home/Corousal/image 10.png",
        "/Assets/home/Corousal/image 12.png",
        "/Assets/home/Corousal/image 7.png",
        "/Assets/home/Corousal/image 11.png",
    ]


    const displayImg = images.slice(startingIndex, endingIndex + 1)
    // console.log(displayImg,'000000000000000000000000000')
    return (
        <div className='p-10 mt-8 text-center space-y-10 bg-[#F4F8FC] pb-20'>
            <h3 className='font-bold text-3xl'>Featured on</h3>
            <div className='flex justify-center w-full items-center space-x-10  '>
                <img src="/Assets/Icons/Vector 5.png" alt="" className='h-10 w-5' onClick={() => { startingIndex != 0 ? (setStartingIndex(startingIndex - 1), setEndingIndex(endingIndex - 1)) : null }} />
                <div className='flex  space-x-5'>
                    {displayImg.map((item, index) => (
                        index >= startingIndex && index <= endingIndex ?
                            <img src={item} alt="" width={150} height={150} className='h-16' />
                            : null
                    ))}
                </div>
                <img src="/Assets/Icons/Vector 5.png" alt="" className='h-10 w-5 rotate-180' onClick={() => { endingIndex != images.length - 1 ? (setStartingIndex(startingIndex + 1), setEndingIndex(endingIndex + 1)) : null }} />

            </div>

        </div>
    )
}

export default Corousal
