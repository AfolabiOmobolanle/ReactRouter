import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-screen h-36 bg-black'>
        <ul className='flex flex-row px-10 py-6 gap-4 items-end justify-end'>
            <li className='text-white font-extrabold text-3xl'>
            <Link to = "/HomePage">Home</Link> </li>
            <li className='text-white font-extrabold text-3xl'>
            <Link to = "/AboutUs">About Us</Link></li>
            <li className='text-white font-extrabold text-3xl'>
            <Link to = "/Blog">Blog</Link></li>
            <li className='text-white font-extrabold text-3xl'>
            <Link to = "/OurService">Our Services</Link></li>
              

        </ul>
    </div>
  )
}

export default Navbar