import React from 'react'

function Box({name, comment}) {
  return (
    <div className='flex px-2 justify-around mt-3 w-full h-20 border border-gray-600 round-xl hover:bg-[#EFC340 hover:text-black cursor-pointer'>
        <div className='mt-4 pr-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </div>
        <div className='grid place-content-center gap-y-2 txt-sm'>
            <p className='capitalize'>
                {name} <span className='text-gray-600'>4:00 PM</span>
            </p>
            <p className='text-gray-400 hover:text-black'>
                {comment}
            </p>
        </div>
        <p className='font-bold'>...</p>
    </div>
  )
}

export default Box