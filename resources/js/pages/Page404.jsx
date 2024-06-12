import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { getCurrentUser} from '../utils/auth';
function Page404() {
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
        <div className="bg-[#272A35] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-white">Page Not found</h2>
                    <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-white">
                        <a href="#">Could not find requested resource</a>
                    </div>

                    <div className="mt-3 text-xs flex justify-between items-center text-white">
                        <Link to={'/'} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">go back home</Link>
                    </div>
                </div>
                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
                </div>
            </div>
        </section>
        </Layout>
    )
}
export default Page404