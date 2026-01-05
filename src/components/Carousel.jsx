import React, { useEffect } from 'react'
import { getData } from '../context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from './Category';
import { useNavigate } from 'react-router-dom';


function Carousel() {
  const navigate = useNavigate();
  const { data , fetchData } = getData();
  console.log('Carousel data:', data);
  useEffect(() => {
    fetchData();
  }, []);
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div>
      <Slider {...settings}>
        {
          (Array.isArray(data) ? data.slice(0,5) : [])?.map((item, index)=>{
            return(
              <div key={index} className='bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10'>
                <div className='flex gap-10 justify-center h-145 items-center px-4 flex-col md:flex-row my-15 md:my-0'>
                  <div className='space-y-4 w-full md:w-1/2'>
                      <h1 className='text-white text-2xl font-bold max-w-125 md:text-4xl'>{item.title}</h1>
                      <p className='text-gray-300 max-w-100'>{item.description}</p>
                      <button className='bg-linear-to-r from-blue-400 via-blue-500 to-blue-700 text-white px-4 py-2 rounded-md hover:scale-105' onClick={() => navigate(`/product/${item.id}`)}>Shop Now</button>
                  </div>
                  <div>
                    <img src={item.image} alt={item.title} className='md:h-125 md:w-125 h-70 w-90 object-contain bg-[#d9d8e1e0] rounded-2xl shadow-2xl shadow-blue-800'/>
                  </div>
                </div>
              </div>
            )
          })          
        }
    </Slider>
    <Category />
    </div>
  )
}

export default Carousel