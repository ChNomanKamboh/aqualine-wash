import React from 'react'

function Sidebar({side, setSide}) {
    
    return (
        <>
            {
                side && (
                    <div className=' absolute right-0 w-[30%] h-screen bg-black'>

                        <button onClick={() => { setSide(false) }} className='text-white ml-48 mt-5'>Remove</button>

                        <ul>
                            <li className='text-white'>Home</li>
                            <li>Bookings</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                )
            }

        </>
    )
}

export default Sidebar
