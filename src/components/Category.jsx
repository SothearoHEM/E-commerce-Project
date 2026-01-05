import React from 'react'
import { getData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';


function Category() {
    const {data} = getData();
    const navigate=useNavigate();
    const getUniqueCategories = (data,property) => {
            let newVAL = data?.map((item)=>{
                return item[property];
            }
            );
            newVAL = [...new Set(newVAL)];
            return newVAL;
    }  
    const categories = getUniqueCategories(data, 'category');
  return (
    <div className='mx-auto flex flex-wrap gap-4 items-center justify-around md:py-7 px-4 bg-[#0f0c29ec] py-10 '>
        {
            categories?.map((item,index)=>{
                return(
                    <div key={index} className='md:w-auto w-fit rounded-lg px-4 py-2 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out bg-linear-to-r from-blue-400 via-blue-500 to-blue-700 text-white'>
                        <button className='uppercase' onClick={() => navigate(`/category/${item}`)}>{item}</button>
                    </div>
                )
            })
        }
    </div>
  )
}
export default Category