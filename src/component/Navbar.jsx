import React, { useState } from 'react'

function Navbar() {
    const [side, setside] = useState(false)
    return (
        <nav className='h-24 w-full bg-[#11111199] flex fixed z-20 '>
            <div className='w-full flex items-center lg:justify-between ml-20'>
                <img src="/logo_1x-1.png" alt="" />
                <ul className='flex justify-evenly gap-6 text-white font-bold text-sm '>
                    <li className='hover:cursor-pointer duration-200 text-[#CEB98B]'>Home</li>
                    <li className='hover:cursor-pointer duration-200 hover:text-[#CEB98B]'>Booking</li>
                    <li className='hover:cursor-pointer duration-200 hover:text-[#CEB98B]'>About us</li>
                    <li className='hover:cursor-pointer duration-200 hover:text-[#CEB98B]'>Product</li>
                    <li className='hover:cursor-pointer duration-200 hover:text-[#CEB98B]'>Blogs</li>
                    <li className='hover:cursor-pointer duration-200 hover:text-[#CEB98B]'>Contacts</li>
                    <li className='hover:cursor-pointer duration-200 hover:text-[#CEB98B]'>Pages</li>
                    <ul className='flex w-52 justify-evenly text-[#CEB98B]'>
                        <li className='hover:cursor-pointer duration-200 hover:text-white'><i class="fa-solid fa-user-ninja"></i></li>
                        <li className='hover:cursor-pointer duration-200 hover:text-white'><i class="fa-solid fa-cart-shopping"></i></li>
                        <li className='hover:cursor-pointer duration-200 hover:text-white'><i class="fa-solid fa-magnifying-glass"></i></li>
                    </ul>
                </ul>
            </div>
            <button onClick={() => { setside(true) }} className='text-white text-2xl items-center lg:hidden'><i class="fa-solid fa-bars"></i></button>
           

        </nav>
    )
}

export default Navbar
