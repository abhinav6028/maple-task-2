import React from 'react'

function Button(props:any) {
  return (
    <div>
      <button className='md:px-10 px-3 bg-[#0D73C1] py-3 rounded-full md:text-md text-xs text-white'>{props.children}</button>
    </div>
  )
}

export default Button
