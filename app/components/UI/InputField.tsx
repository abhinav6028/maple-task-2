import React from 'react'

export default function InputField() {
  return (
    <div className='flex justify-center'>

      <input type="email"   className="bg-gray-50   text-gray-900 text-sm rounded-lg border border-blue-400 focus:ring-blue-500 focus:border-blue-500 block md:w-[600px] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Address..." />
    </div>
  )
}
