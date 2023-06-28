import React from 'react';
import { RiderOrderList } from '../components/Rider_orderList';

export const StoreNewList = () => {
  return (
    <div className='flex flex-col w-[350px] m-auto h-screen pt-11'>
      <div className='font-a text-headline font-bold'>주문 대기</div>
      <RiderOrderList />
      <div className='flex justify-center my-4'></div>
    </div>
  );
};
