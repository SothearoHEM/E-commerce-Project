import React, { useEffect,useState } from 'react'
import { getData } from '../context/DataContext';
import FilterSection from '../components/FilterSection.jsx';
import loading from '../assets/loading.json';
import ProductCard from '../components/ProductCard.jsx';
import Pagination from '../components/Pagination.jsx';
import empty from '../assets/empty.json';
import Lottie from 'lottie-react';
import MobileFilter from '../components/MobileFilter.jsx';

function Product() {
  const {data, fetchData} = getData();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [page, setPage] = useState(1);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1)
  }
  const handlePriceRangeChange = (e) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
    setPage(1);
  }
  const filterData = data?.filter((item)=>{
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  }
  const dynamicPage = Math.ceil(filterData?.length / 8);


  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 mb-10'>
        <MobileFilter openMobileFilter={openMobileFilter} setOpenMobileFilter={setOpenMobileFilter} search={search} setSearch={setSearch} category={category} 
            setCategory={setCategory} priceRange={priceRange} setPriceRange={setPriceRange} 
            handleCategoryChange={handleCategoryChange} handlePriceRangeChange={handlePriceRangeChange}/>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>
              <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} priceRange={priceRange} setPriceRange={setPriceRange} 
              handleCategoryChange={handleCategoryChange} handlePriceRangeChange={handlePriceRangeChange} />
              {
                filterData?.length === 0 ? (
                  <div className='flex w-full h-125'> 
                    <Lottie animationData={empty} loop={true} className='w-full h-full'/>
                  </div>
                ):
                <div className='grid md:grid-cols-4 grid-cols-2 gap-7 mt-10 w-full'>
                {
                  filterData?.slice(page*8-8, page*8).map((product,index)=>{
                    return(
                      <ProductCard key={index} product={product} />
                    )
                  })
                }
              </div>            
              }

            </div>          
          ):(
            <div className='flex items-center justify-center h-125 mx-auto'>
                  <Lottie animationData={loading} loop={true} className='w-40 h-40'/>

            </div>
          )
        }
        <Pagination page={page} pageHandler={pageHandler} dynamicPage={dynamicPage} />
      </div>
    </div>
  )
}

export default Product