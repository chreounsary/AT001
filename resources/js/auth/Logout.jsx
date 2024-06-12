import React, { useEffect} from 'react'
import Layout from '../components/Layout';
import {useNavigate } from 'react-router-dom';
import { clearCurrentUser } from '../utils/auth';
function Logout() {
    let navigate = useNavigate();
    const hanldeData = async () =>{
        await clearCurrentUser();
        navigate('/')
    }
    useEffect(() => {
      hanldeData()
    }, [])
    return (
        <Layout>
        <section className=" min-h-screen flex items-center justify-center">
            <div className="bg-[#272A35] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
                <div className="w-full px-2 md:px-3">
                    <h2 className="font-bold text-2xl text-white text-center">Processing</h2>
                    <p className="text-xs mt-4 text-white text-center">You are leave your account...</p>
                </div>
            </div>
        </section>
        </Layout>
    )
}
export default Logout