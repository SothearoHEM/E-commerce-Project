import React from 'react';
import { Truck, Lock, RotateCcw, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Truck,
    text: 'Free Shipping',
    subtext: 'On all orders over 100$',
  },
  {
    icon: Lock,
    text: 'Secure Payment',
    subtext: '100% protected transactions',
  },
  {
    icon: RotateCcw,
    text: 'Easy Returns',
    subtext: '30-day hassle-free return policy',
  },
  {
    icon: HeadphonesIcon,
    text: '24/7 Support',
    subtext: 'Dedicated customer service anytime',
  },
];

const Features = () => {
  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center lg:items-start lg:text-left'
            >
              <feature.icon
                className='h-12 w-12 text-blue-600 mb-4'
                aria-hidden="true"
              />
              <div>
                <p className='text-lg font-semibold text-gray-900'>
                  {feature.text}
                </p>
                <p className='mt-2 text-sm text-gray-600'>
                  {feature.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;