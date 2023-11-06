import React, { Children } from 'react'

export default function H1(props: any) {

    return (
        <h1 className='md:text-[36px] text-xl font-semibold'>{props.children}</h1>
    )
}
 



export const H5 =(props:any)=>{
    return(
    <h1 className='md:text-lg text-xs '>{props.children}</h1>

    )
}