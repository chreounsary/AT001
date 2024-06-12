import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Profile() {
    const {authStore} = useSelector((state) => state)
    const [user, setUser] = useState({})
    const hanldeData = async () =>{
        if(authStore?.userInfo?.user){
            setUser(authStore?.userInfo?.user)
        }
    }
    useEffect(() => {
        hanldeData()
    }, [authStore])
    return (
        <Layout>
            {console.log(user)}
        <section className=" min-h-screen flex items-center justify-center">
            <div className="bg-[#272A35] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
                <div className="w-full px-2 md:px-3">
                    <h2 className="font-bold text-2xl text-white text-center">Your Infomation</h2>
                    <p className="text-xs mt-4 text-white text-center">You are already a member. {user?.usr_sitename}</p>
                    <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-sm mx-auto mt-2">
                        <li>
                            <div className="px-4 py-5 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Name</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">You are logged</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500"><span className="text-green-600">{user?.usr_username}</span></p>
                                    {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Edit</a> */}
                                </div>
                            </div>
                        </li>
                        <li className="border-t border-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Your Balance</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Current Balance</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500">Referralcode : <span className="text-red-600">{user?.info_referralcode}</span></p>
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">{user?.info_balance}</a>
                                </div>
                            </div>
                        </li>
                        <li className="border-t border-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Last Login</h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">Your are progressing</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-500">Date: <span className="text-yellow-600">{user?.usr_lastlogin}</span></p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-3 text-xs flex justify-between items-center text-white text-center gap-3">
                        <Link to={'/deposit'} className="w-full py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">Deposit</Link>
                        <Link to={'/withdrawal'} className="w-full py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">Withdrawal</Link>
                    </div>

                    <div className="mt-3 text-xs flex justify-between items-center text-white text-center">
                        <Link to={'/logout'} className="w-full py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">Logout</Link>
                    </div>
                    
                </div>
            </div>
        </section>
        </Layout>
    )
}
export default Profile