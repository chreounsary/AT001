import React from 'react'
import Box from './Box'

function RightSidebar() {
  return (
    <section className='h-[98vh] rounded-xl text-white bg-[#272A35]'>
        <div className='w-60 mx-auto pt-3'>
            <div className='flex justify-between gap-x-2 item-center'>
                <div className='flex items-center gap-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                    </svg>
                    <div className='text-base capitalize pb-2 font-light text-center'>
                        <p>General Chat</p>
                    </div>
                </div>
                {/* user Cont */}
                <div className='flex gap-x-2'>
                    <p className='font-light text-base text-gray-500'>
                        500
                    </p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex items-center px-2 w-full h-28 bg-[#EFC340] mt-1 rounded-2xl'>
                <div className='w-1/3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                </div>
                <div className='text-sm w-2/3 font-sans px-2'>
                    <p className='text-black font-bold capitalize tex-lg'>Daily Bonus</p>
                    <p className='text-gray-600'>
                        Get a chance to participain in the lotterry for {' '} 
                        <span className='text-red-500'>Free</span>
                    </p>
                </div>
            </div>
            <Box name="Khem Rx" comment={'I love this website'} />
            <Box name="Sary tok" comment={'what a wonderfull website'} />
            <Box name="Syden tok" comment={'I like the ux this website'} />
            <Box name="Jonh Deo" comment={'I like the ux this website'} />
            <Box name="Rachan Tok" comment={'I like the ux this website'} />
        </div>
    </section>
  )
}

export default RightSidebar