import React from 'react';
import { RiderOrderList } from '../components/Rider_orderList';

export const RiderNewList = () => {
  return (
    <div className='flex flex-col w-[350px] m-auto h-screen'>
      <div className='font-a text-headline font-bold'>대기</div>
      <RiderOrderList />
      <div className='flex justify-center my-4'>
        <button className='bg-colors-red px-4 py-2 rounded-md font-bold text-colors-lightGray'>
          배달 시작!
        </button>
      </div>
    </div>
  );
};
