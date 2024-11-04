import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center items-baseline bg-slate-800 text-white fixed bottom-0 w-full'>
            <span className='text-green-500 font-bold text-xl   '> &lt;</span>
            <span>Pass<span className='text-green-500 font-bold text-md '>OP</span></span>
            <span className='text-green-500 font-bold text-xl'> /&gt;</span>
            <div className='px-2'>
                Created with ❤ by Suraj Bisht
            </div>
        </div >
    )
}

export default Footer
