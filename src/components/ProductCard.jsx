import React from 'react'
import { IoCartOutline } from 'react-icons/io5'

function ProductCard({ product }) {
  return (
    <div className='border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-auto flex flex-col'>
        <img src={product.image} alt={product.title} className='h-60 w-60 object-contain mx-auto mb-4 aspect-square' />
        <h1 className='line-clamp-2 p-1 font-semibold'>{product.title}</h1>
        <p className='p-1 font-bold text-blue-700'>$ {product.price}</p>
        <button className='bg-blue-500 text-white w-full px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer flex items-center justify-center gap-2 mt-2'>
            <span><IoCartOutline className='w-6 h-6'/></span>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard