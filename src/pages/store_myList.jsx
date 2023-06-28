import React from 'react';
import { RiderOrderList } from '../components/Rider_orderList';

export const StoreMyList = () => {
  return (
    <div className='flex flex-col w-[350px] m-auto h-screen'>
      <div className='font-a text-headline font-bold'>현재 주문 목록</div>
      <RiderOrderList />
      <div className='flex justify-center my-4'></div>
    </div>
  );
};
