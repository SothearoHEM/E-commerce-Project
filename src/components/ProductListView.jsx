import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';



function ProductListView({ item }) {
    const navigate=useNavigate();
    const {addToCart}=useCart();
  return (
    <div className='space-y-4 mt-2 rounded-md'>
        <div className='bg-gray-100 flex gap-7 items-center p-2 rounded-md'> 
            <img src={item.image} alt={item.title} className='md:w-60 md:h-60 w-35 h-35 object-contain cursor-pointer bg-white rounded-md py-2' onClick={() => navigate(`/product/${item.id}`)}/>
            <div className='md:w-4/5 w-3/5'>
                <h1 className='font-semibold md:text-xl text-sm cursor-pointer hover:text-blue-700' onClick={() => navigate(`/product/${item.id}`)}>{item.title}</h1>
                <p className='text-gray-700 md:text-sm text-sm'>{item.category.toUpperCase()}</p>
                <p className='text-gray-600 mt-2'>{item.description.substring(0,150)}...</p>
                <p className='text-xl font-semibold text-blue-700 mt-4'>$ {item.price}</p>
                <p className='text-gray-500 text-sm'>$5 delivery to all places</p>
                <button className='flex items-center mt-2 gap-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700' onClick={() => addToCart(item)}><IoCartOutline /> Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductListView