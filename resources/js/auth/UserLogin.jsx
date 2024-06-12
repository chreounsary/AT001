import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { Login, getCurrentIP } from '../services/auth';
import { swalAlertNoButton } from '../utils/alert';
import { setCurrentUser } from '../utils/auth';
function UserLogin() {
    let navigate = useNavigate();
    const [ip, setIP] = useState("");
    const handleLogin = async(datas) => {
        try {
            datas.ip = '127.0.0.1';
            const user = await Login(datas);
            if(user && user?.success === true){
                await setCurrentUser(user)
                swalAlertNoButton({
                    text: "Login successful", 
                    icon: "success",
                    position: 'center'
                })
                navigate('/')
            }
        } catch (error) {
            swalAlertNoButton({
                text: error?.response?.data?.message, 
                icon: "error",
                position: 'center'
            })
        }
    }
    const handleData = async() =>{
        try {
            const res = await getCurrentIP()
            setIP(res?.data?.ip);
        } catch (error) {
            console.log("get Ip error", error);
        }
    }
    useEffect(() => {
        handleData()
    }, [])
    return (
        <Layout>
        <section className=" min-h-screen flex items-center justify-center">
            <div className="bg-[#272A35] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-16">
                    <h2 className="font-bold text-2xl text-white">Login</h2>
                    <p className="text-xs mt-4 text-white">If you are already a member, easily log in</p>
                        <Formik 
                            initialValues={{ username: "", password: "" }}
                                validate={(values) => {
                                const errors = {};
                                if (!values.username) {
                                    errors.username = "Required";
                                }
                                if (!values.password) {
                                    errors.password = "Required";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    handleLogin(values)
                                    setSubmitting(false);
                                }, 400);
                              }}
                        >
                            {({ isSubmitting }) => (
                            <Form className='flex flex-col gap-4'>
                                <Field
                                    type="username"
                                    name="username"
                                    className="p-2 mt-8 rounded-xl border w-full"
                                    placeholder="Enter username"
                                />
                                <ErrorMessage className='text-red-500' name="username" component="div" />
                                <div className="relative">
                                    <Field 
                                        type="password" 
                                        name="password" 
                                        placeholder="Password"
                                        className="p-2 rounded-xl border w-full" 
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                    </svg>
                                </div>
                                <ErrorMessage className='text-red-500' name="password" component="div" />
                                <button className='bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300' type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                    
                    
                    <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-white">
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div className="mt-3 text-xs flex justify-between items-center text-white">
                        <p>Don't have an account?</p>
                        <Link to={'/register'} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 text-[#002D74]">Register</Link>
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
export default UserLogin