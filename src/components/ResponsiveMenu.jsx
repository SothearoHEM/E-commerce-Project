import React from 'react'
import { NavLink } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import { HiMenuAlt1 } from 'react-icons/hi';
import { UserButton, useUser } from '@clerk/clerk-react';
import { FaUserCircle } from 'react-icons/fa';

function ResponsiveMenu({ openNav, setOpenNav }) {
    const {user}=useUser();
  return (
    <div className={`${openNav ? 'left-0' : '-left-full'} flex bottom-0 top-0 w-2.5/4 h-full bg-white fixed z-50 flex-col transition-all duration-300 ease-in-out shadow-lg md:hidden`}>
        <div>
            <div className='flex items-center justify-start gap-3 p-5'>
                {
                    user ? <UserButton  size={50}/> : <FaUserCircle className=' text-gray-700' size={50}/>
                }
                <div >
                    <h1>Hello, {user?.firstName}</h1>
                    <p className='text-sm text-gray-600'>{user ? user.emailAddresses[0].emailAddress : "Guest User"}</p>
                </div>
            </div>
            <nav className='flex flex-col gap-7 px-7 mt-10'>
                <NavLink to={'/'} onClick={() => setOpenNav(false)} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer text-lg list-none`}><li>Home</li></NavLink>
                <NavLink to={'/about'} onClick={() => setOpenNav(false)} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer text-lg list-none`}><li>About</li></NavLink>
                <NavLink to={'/product'} onClick={() => setOpenNav(false)} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer text-lg list-none`}><li>Product</li></NavLink>
                <NavLink to={'/contact'} onClick={() => setOpenNav(false)} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer text-lg list-none`}><li>Contact</li></NavLink>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu