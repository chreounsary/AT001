import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { useNavigate, useParams } from 'react-router-dom';
import Iframe from 'react-iframe'
import { swalAlertNoButton } from '../utils/alert';
import { useSelector } from 'react-redux';
function GamePlay() {
    const {authStore} = useSelector((state) => state)
    let navigate = useNavigate();
    const [gamePlay, setGamePlay] = useState({})
    const hanldeData = async (authStore) => {
        try {
            //hanlde Function
        } catch (error) {
            swalAlertNoButton({
                text: error?.response?.data?.message,
                icon: "error",
                position: 'center'
            })
            // 403 Forbidden
            if(error?.response?.data?.status_error === 403){
                navigate('/')
            }
        }
    }
    useEffect(() => {
        console.log(authStore);
        hanldeData(authStore)
    }, [authStore])
    return (
        <Layout>
            <section className=" min-h-screen w-full p-4">
                <div className="mt-2 sm:mt-3 relative z-10 rounded-xl shadow-xl">
                    <div className="bg-white border-slate-100  dark:bg-slate-800 transition-all duration-500 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                        <div className="flex items-center space-x-4">
                            <Iframe
                                className="w-full rounded-2xl sm:h-[80%] md:h-screen"
                                url={gamePlay?.url}
                                display="block"
                                position="relative"
                            />
                        </div>
                    </div>
                    <div
                        className="bg-slate-50 text-slate-500  dark:bg-slate-600 transition-all duration-500 dark:text-slate-200 rounded-b-xl flex items-center">
                        <div className="flex-auto flex items-center justify-evenly">
                            <button type="button" aria-label="Add to favorites">
                                <svg width="24" height="24">
                                    <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                                <svg width="24" height="24" fill="none">
                                    <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" aria-label="Rewind 10 seconds">
                                <svg width="24" height="24" fill="none">
                                    <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <button type="button" className="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100  dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                            <svg width="30" height="32" fill="currentColor">
                                <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                                <rect x="20" y="4" width="4" height="24" rx="2"></rect>
                            </svg>
                        </button>
                        <div className="flex-auto flex items-center justify-evenly">
                            <button type="button" aria-label="Skip 10 seconds" className="">
                                <svg width="24" height="24" fill="none">
                                    <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                                <svg width="24" height="24" fill="none">
                                    <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M18 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-[#272A35] flex rounded-2xl shadow-lg p-3 items-center">
                    <div className="w-full">
                        <h2 className="font-bold text-2xl text-white text-center">{gamecode}</h2>
                        <div className='w-full mt-5'>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default GamePlay