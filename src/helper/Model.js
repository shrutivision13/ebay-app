'use client'

import { useEffect, useState } from 'react'
import { useForm, IconEyeOff, IconEye } from '@/helper/imports/Imports';
import '../style/layout.css';

export const SimpleModel = ({ handleClose, onSubmit, openedModal, selectedUserData, showModal }) => {
    console.log('openedModal :>> ', openedModal);
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue
    } = useForm()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    useEffect(() => {
        if (openedModal === "edit") {
            setValue('userName', selectedUserData.userName);
            setValue('email', selectedUserData.email);
            setValue('password', selectedUserData.password);
            setValue('phoneNumber', selectedUserData.phoneNumber);
        }
    }, [selectedUserData])
    return (
        <>
            {showModal &&
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                    >
                        <div className="relative my-6 mx-3 modal-width">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {openedModal === "add" ? "Add User" : openedModal === "edit" ? "Edit User" : "Delete User"}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={handleClose}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="relative p-6 flex-auto">
                                        <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                            {
                                                openedModal === 'add' || openedModal === 'edit' ? <>
                                                    <div className="mb-1 pt-0">
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-black-600  uppercase last:mr-0 mr-1">
                                                            UserName
                                                        </span>
                                                        <input type="text" placeholder="Enter Username"  {...register('userName', { required: true })}
                                                            className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none w-full ${errors.userName ? 'border-2 border-red-500' : ''}`}
                                                        />
                                                    </div>
                                                    {errors.userName && <span className='text-xs font-semibold text-red-500 mb-2' >UserName is required</span>}
                                                    <div className="mb-1 pt-0">
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-black-600  uppercase last:mr-0 mr-1">
                                                            Email
                                                        </span>
                                                        <input type="text" placeholder="Enter Email"  {...register('email', { required: true })} className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none w-full ${errors.email ? 'border-2 border-red-500' : ''}`} />
                                                    </div>
                                                    <div className="mb-1 pt-0">
                                                        <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-black-600  uppercase last:mr-0 mr-1">
                                                            Contact Number
                                                        </span>
                                                        <input type="number" placeholder="Enter Contact Number"  {...register('phoneNumber', { required: true })} className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none w-full ${errors.email ? 'border-2 border-red-500' : ''}`} />
                                                    </div>
                                                    {errors.email && <span className='text-xs font-semibold text-red-500 mb-2' >Contact Number is required</span>}
                                                    {
                                                        openedModal === "add" ?
                                                            <div className="mb-1 pt-0">
                                                                <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-black-600 uppercase last:mr-0 mr-1">
                                                                    Password
                                                                </span>
                                                                <div className='relative'>
                                                                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Enter Password" {...register('password', { required: true })} className={`px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none w-full ${errors.password ? 'border-2 border-red-500' : ''}`} />
                                                                    {
                                                                        isPasswordVisible ?
                                                                            <IconEyeOff className='absolute eye-icon' onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} /> :
                                                                            <IconEye className='absolute eye-icon' onClick={() => { setIsPasswordVisible(!isPasswordVisible) }} />
                                                                    }
                                                                </div>
                                                                {errors.password && <span className='text-xs font-semibold text-red-500 mb-2'>Password field is required</span>}
                                                            </div> : ""
                                                    }
                                                </> : "Are you sure you want to delete this user ?"
                                            }
                                        </div>
                                    </div>
                                    {/*footer*/}

                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleClose}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            {
                                                openedModal === "edit" ? "Save" : openedModal == "add" ? "Add User" : "Delete User"
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
            }
        </>
    )
}