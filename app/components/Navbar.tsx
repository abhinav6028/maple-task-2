import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
        <div className='flex  p-4 justify-between  md:px-28'>

            <Image src={'/Assets/logo.png'} className='xs:w-8 ' width={180} height={180} alt='logo' />

            <div className='md:flex  items-center space-x-5 hidden'>

                <div className='flex space-x-3 cursor-pointer items-center'>
                    <Image src={'/Assets/Icons/mobile.png'} className='w-5' width={20} height={20} alt='mobile icon' />
                    <h1 className='xs:text-xs'>+1 (905) 206-1444</h1>
                </div>

                <div className='flex space-x-3 cursor-pointer items-center'>
                    <Image src={'/Assets/Icons/mail.png'} className='w-5 h-4' width={30} height={5} alt='mail icon' />
                    <h1 className='xs:text-xs'>info@thecanadianhome.com</h1>
                </div>


            </div>

        </div>
    )
}

export default Navbar
