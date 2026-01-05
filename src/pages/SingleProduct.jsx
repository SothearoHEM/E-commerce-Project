import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import loading from '../assets/loading.json';
import Breadcrums from '../components/Breadcrums.jsx';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../context/CartContext.jsx';

function SingleProduct() {
    const param = useParams();
    const [SingleProduct, setSingleProduct] = React.useState("");
    const {addToCart,cartItems}=useCart();

    const getSingleProduct = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
            const product = res.data;
            setSingleProduct(product);
            console.log("Single product data:", product);
        }catch (error) {
            console.log("Error in fetching single product data");
        }
    }

    useEffect(() => {
        getSingleProduct();
    }, []);

    const OriginalPrice = Math.round(SingleProduct.price + (SingleProduct.price * SingleProduct.discount / 100));

  return (
    SingleProduct ? 
    <div className='px-4 pb-4 md:0'>
        <Breadcrums title={SingleProduct.title} />
        <div className='max-w-7xl mx-auto md:p-6 grid md:grid-cols-2 grid-cols-1 gap-10'>
            <div className='w-full'>
                <img src={SingleProduct.image} alt={SingleProduct.title} className='w-full md:h-96 h-50 object-contain'/>
            </div>
            <div className='w-full'>
                <h1 className='md:text-3xl text-xl font-semibold mb-4'>{SingleProduct.title}</h1>
                <p className='text-gray-700'>{SingleProduct.category.toUpperCase()}</p>
                <p className='text-xl font-semibold text-blue-700 my-4'>$ {SingleProduct.price} 
                    <span className='text-gray-500 line-through ml-2'>$ {OriginalPrice}</span>
                    <span className='bg-blue-700 text-white px-2 rounded-md ml-2'>{SingleProduct.discount}% discount</span>
                </p>
                <p className='text-gray-600 mb-6'>{SingleProduct.description}</p>
                <div className='flex gap-4 mt-4'>
                    <button onClick={()=>addToCart(SingleProduct)} className='flex bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition'><IoCartOutline className='w-6 h-6 mr-2'/> Add to Cart</button>
                </div>
            </div>
        </div>
    </div> :
    <div className='flex items-center justify-center h-125 mx-auto'>
        <Lottie animationData={loading} loop={true} className='w-40 h-40'/>
    </div>
  )
}

export default SingleProduct