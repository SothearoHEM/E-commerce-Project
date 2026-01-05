import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import loading from '../assets/loading.json';
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView.jsx';


function CategoryProduct() {
    const [searchData, setCategoryProducts] = React.useState([]);
    const param = useParams();
    const category = param.category;
    console.log("Category from URL:", category);

    const getFilteredProducts = async (category) => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            const products = res.data;
            setCategoryProducts(products);
            console.log("Filtered products data:", products);
        }
        catch (error) {
            console.log("Error in fetching filtered products data");
        }
    }

    React.useEffect(() => {
        getFilteredProducts(category);
        window.scrollTo(0, 0);
    }, [category]);

  return (
    <div>
        {
            searchData.length > 0 ? 
            <div className='max-w-7xl mx-auto mt-10 mb-10 px-4'> 
                <button className='bg-gray-800 text-white mb-5 px-3 py-1 rounded-md cursor-pointer flex gap-1 hover:bg-gray-700' onClick={() => window.history.back()}><ChevronLeft /> Back</button>
                {
                    searchData.map((item,index)=>{
                        return <ProductListView key={index} item={item} />
                    })
                }
            </div>
            :
            <div className='flex items-center justify-center h-125'>
                <Lottie animationData={loading} loop={true} className='w-40 h-40'/>
            </div>
        }
    </div>
  )
}

export default CategoryProduct