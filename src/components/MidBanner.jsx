import React from 'react';
import banner from '../assets/banner1.jpg';
import { useNavigate } from 'react-router-dom';

const MidBanner = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-100 py-12 md:py-24'>
      <div
        className='relative max-w-7xl mx-auto md:rounded-3xl overflow-hidden bg-cover bg-center h-125 md:h-162.5'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center'>
          <div className='text-center text-white px-6 max-w-4xl'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight'>
              Style Meets Innovation
            </h1>
            <p className='text-lg md:text-2xl mb-8 font-light opacity-90'>
              Explore trendy men's & women's fashion, stunning jewelry, and the latest electronics — all in one place with amazing deals!
            </p>
            <button onClick={() => navigate('/product')} className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl text-lg md:text-xl transition duration-300 shadow-lg transform hover:scale-105'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;