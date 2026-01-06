import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

function ProductCard({ product }) {
  const navigate=useNavigate();
  const {addToCart,cartItems}=useCart();

  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-auto flex flex-col'>
        <img src={product.image} alt={product.title} className='md:h-60 md:w-60 h-35 w-35 object-contain mx-auto mb-4 aspect-square' onClick={()=>navigate(`/product/${product.id}`)}/>
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='p-1 font-bold text-blue-700'>$ {product.price}</p>
        <button onClick={() => addToCart(product)} className='bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer flex items-center justify-center gap-2 mt-2'>
            <span><IoCartOutline className='md:w-6 md:h-6 w-4 h-4'/></span>Add to Cart
        </button>
    </div>
  )
}

export default ProductCard