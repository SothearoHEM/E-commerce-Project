import React, { useEffect,useState } from 'react'
import { getData } from '../context/DataContext';
import FilterSection from '../components/FilterSection.jsx';
import loading from '../assets/loading.webm';
import ProductCard from '../components/ProductCard.jsx';
import Pagination from '../components/Pagination.jsx';

function Product() {
  const {data, fetchData} = getData();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }
  const handlePriceRangeChange = (e) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
  }
  const filterData = data?.filter((item)=>{
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || item.category === category;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  }
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8'>
              <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} priceRange={priceRange} setPriceRange={setPriceRange} 
              handleCategoryChange={handleCategoryChange} handlePriceRangeChange={handlePriceRangeChange} />
              <div className='grid grid-cols-4 gap-7 mt-10'>
                {
                  filterData?.slice(page*8-8, page*8).map((product,index)=>{
                    return(
                      <ProductCard key={index} product={product} />
                    )
                  })
                }
              </div>
            </div>          
          ):(
            <div className=' flex items-center justify-center h-screen mx-auto'>
                <video muted autoPlay loop className='w-20 h-20'>
                  <source src={loading} type="video/webm" />
                </video>
            </div>
          )
        }
        <Pagination page={page} pageHandler={pageHandler} />
      </div>
    </div>
  )
}

export default Product