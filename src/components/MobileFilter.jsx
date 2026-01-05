import React from 'react'
import { FaFilter } from 'react-icons/fa';
import { getData } from '../context/DataContext';

function MobileFilter({openMobileFilter, setOpenMobileFilter, search, setSearch, category, setCategory, priceRange, setPriceRange, handleCategoryChange, handlePriceRangeChange}) {
    const {catagoryOnlyData} = getData();
    const toggleFilter = () => {
        setOpenMobileFilter(!openMobileFilter);
    }
  return (<>
    <div className='md:hidden bg-gray-100 p-4 rounded-md mt-10 shadow-lg mb-5 flex items-center justify-between gap-2'>
            <h1 className='font-semibold text-lg'>Filters</h1>
            <FaFilter onClick={toggleFilter} className='text-xl text-gray-700'></FaFilter>
    </div>
    {
            openMobileFilter ? <div className='bg-gray-100 p-2 md:hidden'>
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
                <h1 className='mt-5 mb-2 font-semibold'>Price Range</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="">Price: ${priceRange[0]} - ${priceRange[1]}</label>
                    <input type="range" min="0" max="1000" className='w-full' value={priceRange[1]} onChange={handlePriceRangeChange} />
                </div> 
                <button className='mt-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full'
                onClick={() => {
                  setCategory('All');
                    setPriceRange([0, 1000]);
                    setSearch('');
                }}>Reset Filters</button>
                <button onClick={toggleFilter} className='mt-5 bg-gray-400 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-300 w-full'>Close</button>
        </div> : null
    }
  </>    
  )
}

export default MobileFilter