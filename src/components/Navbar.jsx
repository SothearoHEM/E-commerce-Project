import { MapPin } from 'lucide-react'
import React ,{useState}from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { CgClose } from 'react-icons/cg';
import { useCart } from '../context/CartContext.jsx';
import {HiOutlineMenu } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu.jsx';

function Navbar({ location,getLocation, openDropdown, setOpenDropdown }) {
    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }
    const {cartItems}=useCart();
    const [openNav , setOpenNav] = useState(false);
  return (
    <div className='bg-white py-3 shadow-2xl px-4 sticky top-0 z-50 md:px-0'>
        <div className='max-w-7xl mx-auto flex justify-between items-center'>

            <div className='flex items-center gap-7'>
                <Link to='/'>
                    <h1 className='text-3xl font-bold text-gray-700'><span className='text-3xl text-blue-700'>k</span>-Five</h1>
                </Link>
                <div className='md:flex gap-1 cursor-pointer text-gray-600 items-center hidden'>
                    <MapPin className='text-red-500' />
                    <span className='font-semibold'>{location ? <div>
                        <p>{location.state}, {location.country}</p>
                    </div>:"Add Address"}</span>
                    <FaCaretDown onClick={toggleDropdown}/>                  
                </div>
                 {
                        openDropdown ? <div className='w-52 h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-4 border-gray-100 rounded-md'>
                            <p className='font-semibold text-lg flex justify-between items-center'>Change Location <span onClick={toggleDropdown}><CgClose /></span></p>
                            <button onClick={getLocation} className='bg-blue-700 text-white p-1 rounded-md cursor-pointer hover:bg-blue-500 mt-2'>Detect My Location</button>
                        </div>
                        : null
                }
            </div>
            <nav className='flex items-center '>
                <ul className='md:flex gap-7 font-semibold text-gray-700 cursor-pointer items-center hidden'>
                    <NavLink to={'/'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer`}><li>Home</li></NavLink>
                    <NavLink to={'/about'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer`}><li>About</li></NavLink>
                    <NavLink to={'/product'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer`}><li>Product</li></NavLink>
                    <NavLink to={'/contact'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-blue-700":"text-black"} cursor-pointer`}><li>Contact</li></NavLink>
                </ul>
                <Link to={'/cart'} className='relative ml-7'>
                    <IoCartOutline className='h-7 w-7 cursor-pointer text-gray-700' />
                    <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItems.length}</span>
                </Link>
                <div className='ml-7 block'>
                    <SignedOut>
                        <SignInButton className='signin-btn bg-blue-700 text-white px-2 py-1 rounded cursor-pointer'/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                {
                    openNav ? <CgClose className='h-8 w-8 ml-7 md:hidden cursor-pointer' onClick={() => setOpenNav(false)}/> 
                    : <HiOutlineMenu className='h-8 w-8 ml-7 md:hidden cursor-pointer' onClick={() => setOpenNav(true)}/>
                }
            </nav>
        </div>
        <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
    </div>
  )
}

export default Navbar