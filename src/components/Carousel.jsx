import React, { useEffect, useContext } from 'react'
import { DataContext, getData } from '../context/DataContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from './Category';


function Carousel() {
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
                <div className='flex gap-10 justify-center h-140 items-center px-4'>
                  <div className='space-y-4 w-1/2'>
                      <h1 className='text-white text-4xl font-bold w-125 '>{item.title}</h1>
                      <p className='text-gray-300 w-100'>{item.description}</p>
                      <button className='bg-linear-to-r from-blue-400 via-blue-500 to-blue-700  text-white px-4 py-2 rounded-md hover:scale-105'>Shop Now</button>
                  </div>
                  <div>
                    <img src={item.image} alt={item.title} className='h-125 w-125 object-contain bg-[#d9d8e1e0] rounded-2xl shadow-2xl shadow-blue-800'/>
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