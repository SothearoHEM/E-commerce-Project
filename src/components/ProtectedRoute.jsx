import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { SignedOut, SignInButton } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  const {user}=useUser();
  return (
    <div>
        { user ? children : <div className='flex flex-col items-center w-full h-125 justify-center'>
            <h1 className='text-center mt-20 font-semibold text-2xl'>Please sign in to access the cart.</h1> 
            <SignedOut>
                        <SignInButton className='signin-btn bg-blue-700 text-white px-2 py-1 rounded cursor-pointer'/>
            </SignedOut>
            </div> }
    </div>
  )
}

export default ProtectedRoute