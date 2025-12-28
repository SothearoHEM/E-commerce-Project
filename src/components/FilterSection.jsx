import React from 'react'
import { getData } from '../context/DataContext';

function FilterSection({search, setSearch, category, setCategory, priceRange, setPriceRange, handleCategoryChange, handlePriceRangeChange}) {
    const {catagoryOnlyData} = getData();
  return (
    <div className=' w-150 bg-gray-100 p-4 rounded-md h-max mt-10'>
        <input type="text" placeholder="Search products..." onChange={(e)=>setSearch(e.target.value)} className="w-full p-2 rounded-md border border-gray-300" />

        <h1 className='mt-5 mb-2 font-semibold'>Category</h1>
        <div className='flex flex-col gap-2 mt-3'>
            {
                catagoryOnlyData?.map((item,index)=>{
                    return(
                        <div key={index} className='flex items-center gap-2'>
                            <input type="checkbox" id={item} name={item} className='w-4 h-4' value={item} checked={category === item} onChange={handleCategoryChange} />
                            <button className='capitalize cursor-pointer'>{item}</button>
                        </div>
                    )
                })
            }
        </div>
        <h1 className='mt-5 mb-2 font-semibold'>Price Rang</h1>
        <div className='flex flex-col gap-2'>
            <label htmlFor="">Price: ${priceRange[0]} - ${priceRange[1]}</label>
            <input type="range" min="0" max="1000" className='w-full' value={priceRange[1]} onChange={handlePriceRangeChange} />
        </div>
        <button className='mt-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300'
        onClick={() => {
          setCategory('All');
          setPriceRange([0, 1000]);
          setSearch('');
        }}>Reset Filters</button>
    </div>
  )
}

export default FilterSection