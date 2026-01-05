import React from 'react'
import { useCart } from '../context/CartContext.jsx';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useUser } from '@clerk/clerk-react';
import emptyCart from '../assets/emptyCart.jpg';
import { useNavigate } from 'react-router-dom';

function Cart({location, getLocation}) {
  const {cartItems, updateQuantity, deleteItem}=useCart();
  const {user} = useUser();
  const navigate=useNavigate();
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 0;
  return (
    <div className='mt-10 max-w-7xl mx-auto mb-5 overflow-hidden'>
        {
          cartItems.length > 0 ? 
          <div>
            <h1 className='font-bold text-2xl'>My Cart ({cartItems.length})</h1>
            <div>
                <div className='mt-10 '>
                    {cartItems.map((item,index)=>{
                        return(
                            <div key={index} className='flex items-center gap-7 border-b border-gray-200 pb-5 mb-5 bg-gray-200 rounded-md p-4 md:justify-between justify-around'>
                                <div className='flex items-center gap-4'>
                                    <img src={item.image} alt={item.title} className='md:h-32 md:w-32 h-25 w-25 object-contain'/>
                                <div className='md:w-100 line-clamp-2'>
                                    <h1 className='font-semibold text-lg'>{item.title}</h1>
                                    <p className='font-bold text-blue-700'>$ {item.price}</p>
                                </div>
                                </div>
                                <div className='bg-blue-600 text-white flex gap-4 p-2 rounded-md font-bold md:text-xl text-md items-center'>
                                    <button className='px-2 cursor-pointer' onClick={() => updateQuantity(cartItems, item.id, 'decrement')}>-</button>
                                    <span>{item?.quantity}</span>
                                    <button className='px-2 cursor-pointer' onClick={() => updateQuantity(cartItems, item.id, 'increment')}>+</button>
                                </div>
                                <span>
                                    <FaRegTrashAlt className='text-red-600 w-6 h-6 cursor-pointer mr-2 hover:bg-gray-300 hover:rounded-md' onClick={() => deleteItem(item.id)} />
                                </span>
                            </div>
                        )
                    })}
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
                    <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2'>
                        <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Full Name</label>
                            <input type="text" className='p-2 rounded-md border border-gray-300' placeholder='Enter Your Full Name' value={user.fullName}/>

                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Email Address</label>
                            <input type="email" className='p-2 rounded-md border border-gray-300' placeholder='Enter Your Email Address' value={user.emailAddresses[0].emailAddress}/>
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Phone Number</label>
                            <input type="text" className='p-2 rounded-md border border-gray-300' placeholder='Enter Your Phone Number'/>
                        </div>
                        <div className='flex w-full space-y-1'>
                            <div className='flex flex-col space-y-1 w-full'> 
                                <label htmlFor="" className='font-semibold text-gray-700'>Country</label>
                                <input type="text" className='p-2 rounded-md border border-gray-300' placeholder='Enter Your Country' value={location?.country} />
                            </div>
                            <div className='flex flex-col ml-4 space-y-1 w-full'>
                                <label htmlFor="" className='font-semibold text-gray-700'>City</label>
                                <input type="text" className='p-2 rounded-md border border-gray-300' placeholder='Enter Your City' value={location?.state}/>
                            </div>
                        </div>
                        <div className='flex w-full space-y-1'>
                            <div className='flex flex-col space-y-1 w-full'>
                                <label htmlFor="" className='font-semibold text-gray-700'>postCode</label>
                                <input type="text" className='p-2 rounded-md border border-gray-300' placeholder='Enter Your PostCode' value={location?.postcode} />
                            </div>
                        </div>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800'>Submit</button>
                        <div className='flex items-center justify-center w-full text-gray-700'>
                        ----------OR----------
                        </div>
                        <div className='flex justify-center '>
                          <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800' onClick={getLocation}>Detect Location</button>
                        </div> 
                    </div>
                    <div className='bg-gray-100 rounded-md p-7 mt-4 space-y-2 h-max'>
                        <h1 className='text-gray-800 font-bold text-xl'>Bill Details</h1>
                        <div className='flex justify-between'>
                            <span className='text-gray-700'>Price ({cartItems.length} items)</span>
                            <span className='font-bold text-gray-900'>$ {totalPrice.toFixed(2)}</span>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <span className='text-gray-700'>Quantity</span>
                                <span className='font-bold text-gray-900'>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <span className='text-gray-700'>Tax</span>
                                <span className='font-bold text-gray-900'>$ 0</span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-gray-700'>Delivery Charges</span>
                            <span className='font-bold text-gray-900'>$ 5</span>
                        </div>  
                        <div>
                            <div className='flex justify-between'>
                                <span className='text-gray-700'>Discount</span>
                                <span className='font-bold text-green-600'>$ {discount}</span>
                            </div>
                        </div>
                        <div className='border-b border-gray-300'></div>
                        <div className='flex justify-between'>
                            <span className='font-bold text-gray-800'>Total Amount</span>
                            <span className='font-bold text-gray-900'>$ {(totalPrice + 5 - discount).toFixed(2)}</span>
                        </div>
                        <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-md mt-4 hover:bg-blue-800'>Proceed to Pay</button>
                    </div>
                </div>
            </div>
          </div>: 
          <div>
            <div className='flex flex-col items-center gap-3 justify-center h-150'>
                    <h1 className='text-blue-700/70 font-bold md:text-4xl text-2xl'>Oh no! Your cart is empty.</h1>
                    <img src={emptyCart} alt="" className='w-100'/>
                    <button onClick={() => navigate('/product')} className='bg-blue-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-blue-800'>Continue Shopping</button>
            </div>
          </div>
        }
    </div>
  )
}

export default Cart