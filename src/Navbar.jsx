import React from 'react'

const Navbar = () => {
    const list = [
        'Services',
        'Blog',
        'Gallery',
        'About'
    ] 

    return (
        <div className='fixed bg-gray-700 flex justify-between items-center gap-15 py-3 px-10 
        left-1/2 translate-x-[-50%] top-[20%] rounded-full backdrop-blur-md bg-opacity-60 text-white
        shadow-lg z-10'>

            <ul className='flex gap-8 text-1xl'>
                { list.map((item) => (
                    <li key={ item } className='relative group cursor-pointer'>
                        { item }
                    </li>
                )) }
            </ul>

            <button className='bg-gradient-to-r from-red-400 to-gray-400 py-1 px-6 ml-4
            rounded-3xl shadow-2xl text-white font-semibold'>
                Contact
            </button>
        </div>
    )
}

export default Navbar