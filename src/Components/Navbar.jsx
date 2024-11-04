import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white flex justify-between items-center mx-2 px-5 h-14 '>
        <div className='logo font-bold flex items-baseline  text-2xl'>
          <span className='text-green-900 font-bold text-2xl flex '> &lt;</span>
          
          <span>Pass<span className='text-green-900 font-bold text-2xl'>OP</span></span>
          <span className='text-green-900 font-bold text-2xl'> /&gt;</span>
          </div>
        <ul className=''>
            <li className='flex gap-8 '>
                <a className='hover:font-bold text-lg' href="/">Home</a>
                <a className='hover:font-bold text-lg' href="/about">about</a>
                <a className='hover:font-bold text-lg' href="/contact">Contact</a>
                
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
