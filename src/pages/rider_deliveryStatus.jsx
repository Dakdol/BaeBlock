import React from 'react';
import { RiderSelectedOrder } from '../components/Rider_selectedOrder';

export const RiderDeliveryStatus = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-4'>
        <div className='flex justify-center'>
          <div className='border-[1px] px-2 rounded-lg max-w-[250px] border-darkGray whitespace-nowrap overflow-ellipsis overflow-hidden'>
            서울시 강남구 언주로 18길 여기는 잘리는 곳
          </div>
        </div>
        <div className='w-full h-[520px] relative overflow-hidden mt-6'>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src={process.env.PUBLIC_URL + '/images/testMap.jpg'}
            alt='지도'
          />
        </div>
      </div>
      <div className='flex overflow-x-auto pt-5 pb-2 ml-5'>
        <RiderSelectedOrder />
        <RiderSelectedOrder />
        <RiderSelectedOrder />
      </div>
    </div>
  );
};
