import React from 'react'

function Banner2() {

  const images = [

    {
      src: '/Assets/home/banner 2/image 1.png',
      name: 'Visibility',
      desc: 'Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility '
    },
    {
      src: '/Assets/home/banner 2/image 2.png',
      name: 'Real Local Agents',
      desc: 'Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility '
    },
    {
      src: '/Assets/home/banner 2/image 3.png',
      name: 'Email & Notification',
      desc: 'Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility '
    },
    {
      src: '/Assets/home/banner 2/b2.png',
      name: 'Professional photos',
      desc: 'Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility '
    }

  ]
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 p-10 m-10 '>
      {images.map((item, index) => (
        <div className='text-center space-y-5'>
          <div className='w-full flex justify-center  md:h-44 h-40' >

            <img src={item.src} alt="image" className='w-40 h-43' />


          </div>

          <div>

            <h1 className='font-semibold'>{item.name}</h1>
            <p className='text-xs'>{item.desc}</p>
          </div>
        </div>

      ))}


    </div>
  )
}

export default Banner2
