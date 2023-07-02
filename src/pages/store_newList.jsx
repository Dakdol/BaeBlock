import React from 'react';
import { RiderOrderList } from '../components/Rider_orderList';

export const StoreNewList = () => {
  return (
    <div className='flex flex-col w-[350px] m-auto h-screen mt-12'>
      <div className='font-a text-headline font-bold mb-4'>대기 중인 주문</div>
      <RiderOrderList />
      <div className='flex justify-center my-4'></div>
    </div>
  );
};
