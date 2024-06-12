import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser} from '../utils/auth';
function Withdrawal() {
    let navigate = useNavigate();
    const [user, setUser] = useState({})
    const hanldeData = async () =>{
      const auth =  await getCurrentUser()
      if(auth !== null){
        setUser(auth)
      }
    }
    useEffect(() => {
      hanldeData()
    }, [])
    return (
        <Layout>
        <section className=" min-h-screen flex items-center justify-center">
            <div className="bg-[#272A35] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center w-full">
                <div className="w-full px-2 md:px-3">
                    <h2 className="font-bold text-2xl text-white text-center">Your Infomation</h2>
                    <p className="text-xs mt-4 text-white text-center">You are already a member. {user?.usr_sitename}</p>
                
                </div>
            </div>
        </section>
        </Layout>
    )
}
export default Withdrawal