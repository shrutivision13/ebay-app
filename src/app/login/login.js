"use client"

import { ApiLogin } from "@/api-wrapper/ApiLogin";
import Toast from "@/helper/toast/Toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IconEyeOff, IconEye } from '@/helper/imports/Imports';
import { useState } from "react";
import Loader from "@/helper/loader/loader";

function Login() {
    let router = useRouter();
    const [isPasswordVisible, setIsPasswordVisible] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm()
    const onSubmit = (data) => {
        setIsLoading(true)
        let dataPass = {
            email: data.email,
            password: data.password
        }
        ApiLogin(dataPass)
            .then((res) => {
                if (res.success) {
                    setIsLoading(false)
                    let userData = {
                        authToken: res.authToken,
                        userId: res.userId,
                        name: res.name,
                        role: res.role == 1 ? "Admin" : "User"
                    }
                    localStorage.setItem("login_details", JSON.stringify(userData))
                    Toast.success(res.message);

                    router.push('/dashboard')
                } else {
                    setIsLoading(false)
                    Toast.error(res.message);

                }
            }).catch((err) => {
                setIsLoading(false)
                Toast.error("something went wrong!!");
            });
    }

    return (
        <>
            {isLoading && <Loader isLoading={isLoading} />}
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">Login</h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div class="mb-2">
                                            <label class="block text-gray-700 text-sm font-bold mb-1" for="email">Email</label>
                                            <input class={`w-full px-2 py-2 border  rounded-md focus:outline-none ${errors.email ? "border-red-300" : "border-gray-300"}`}
                                                type="email" {...register('email', { required: true })} name="email" placeholder="Enter Email Address" />
                                        </div>
                                        {errors.email && <span className='text-xs font-semibold text-red-500' >Email is required</span>}
                                        <div className='relative  mb-2'>
                                            <label class="block text-gray-700 text-sm font-bold mb-1" for="email">Password</label>
                                            <input type={isPasswordVisible ? "text" : "password"} placeholder="Enter Password" {...register('password', { required: true })} className={`w-full px-2 py-2 border  rounded-md focus:outline-none ${errors.password ? 'border-2 border-red-500' : ''}`} />
                                            {
                                                isPasswordVisible ?
                                                    <IconEyeOff className='absolute right-2 bottom-3' onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} /> :
                                                    <IconEye className='absolute right-2 bottom-3' onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} />
                                            }
                                        </div>

                                        {errors.password && <span className='text-xs font-semibold text-red-500' >Password is required</span>}
                                        <div className="relative">
                                            <button className={`bg-cyan-500 text-white rounded-md px-2 py-1 ${errors.password || errors.email && "cursor-not-allowed"}`} type="submit" disabled={errors.password || errors.email}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Login;