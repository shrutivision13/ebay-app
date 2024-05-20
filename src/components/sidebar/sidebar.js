"use client"
import { route } from '@/helper/route/router';
import * as React from 'react';

function Sidebar() {

    const sidebar = typeof window !== 'undefined' ? document.querySelector("aside") : ""
    const maxSidebar = typeof window !== 'undefined' ? document.querySelector(".max") : ""
    const miniSidebar = typeof window !== 'undefined' ? document.querySelector(".mini") : ""
    const maxToolbar = typeof window !== 'undefined' ? document.querySelector(".max-toolbar") : ""
    const logo = typeof window !== 'undefined' ? document.querySelector('.logo') : ""
    const content = typeof window !== 'undefined' ? document.querySelector('.content') : ""

    function openNav() {
        if (sidebar.classList.contains('-translate-x-48') && typeof window !== 'undefined') {
            // max sidebar 
            sidebar.classList.remove("-translate-x-48")
            sidebar.classList.add("translate-x-none")
            maxSidebar.classList.remove("hidden")
            maxSidebar.classList.add("flex")
            miniSidebar.classList.remove("flex")
            miniSidebar.classList.add("hidden")
            maxToolbar.classList.add("translate-x-0")
            maxToolbar.classList.remove("translate-x-24", "scale-x-0")
            logo.classList.remove("ml-12")
            content.classList.remove("ml-12")
            content.classList.add("ml-12", "md:ml-60")
        } else {
            // mini sidebar
            sidebar.classList.add("-translate-x-48")
            sidebar.classList.remove("translate-x-none")
            maxSidebar.classList.add("hidden")
            maxSidebar.classList.remove("flex")
            miniSidebar.classList.add("flex")
            miniSidebar.classList.remove("hidden")
            maxToolbar.classList.add("translate-x-24", "scale-x-0")
            maxToolbar.classList.remove("translate-x-0")
            logo.classList.add('ml-12')
            content.classList.remove("ml-12", "md:ml-60")
            content.classList.add("ml-12")
        }
    }

    const handleNavigate = (item) => {


    }
    return (
        <>


            <aside className={`w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]`}>
                <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12">

                    <div className="flex pl-4 items-center space-x-2 ">
                        <div className="text-white hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 group bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white  ">
                        <div className="transform ease-in-out duration-300 mr-12">
                            Ebay
                        </div>
                    </div>
                </div>
                <div onClick={openNav} className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white bg-[#1E293B] hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                </div>
                <div className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
                    {
                        route.map((item) => {
                            return (
                                <>
                                    <div key={item.path} className="hover:mx-2 hover:bg-white  w-full text-white hover:text-black bg-[#1E293B] p-2 pl-8 rounded-l-lg  transform ease-in-out duration-300 flex flex-row items-center ">
                                        <div onClick={() => handleNavigate(item)}>
                                            {item.name}
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
                <div className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
                    {
                        route.map((item) => {
                            return (
                                <div key={item.path} className="hover:ml-4 justify-end pr-5 text-white hover:text-black w-full hover:bg-white bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                                    <span dangerouslySetInnerHTML={{ __html: item.icon }} className="w-4 h-4 " />
                                </div>

                            )
                        })
                    }
                    {/* <div className="hover:ml-4 justify-end pr-5 text-white hover:text-black w-full hover:bg-white bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        </div>
                        <div className="hover:ml-4 justify-end pr-5 text-white hover:text-black w-full hover:bg-white bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            </svg>
                        </div> */}
                </div>
            </aside>
        </>
    )
}

export default Sidebar;