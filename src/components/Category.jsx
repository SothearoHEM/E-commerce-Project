import React, { useEffect } from 'react'
import { useContext } from 'react';
import { getData } from '../context/DataContext';


function Category() {
    const {catagoryOnlyData} = getData();
    console.log('Category Data:', catagoryOnlyData);
  return (
    <div className=' mx-auto flex gap-4 items-center justify-around py-7 px-4  bg-[#0f0c29ec]'>
        {
            catagoryOnlyData?.map((item,index)=>{
                return(
                    <div key={index} className='rounded-lg px-4 py-2 hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out bg-linear-to-r from-blue-400 via-blue-500 to-blue-700  text-white'>
                        <button className='uppercase'>{item}</button>
                    </div>
                )
            })
        }
    </div>
  )
}
export default Category