import React from 'react';
import { RiderOrderList } from '../components/Rider_orderList';

export const RiderNewList = () => {
  return (
    <div className='flex flex-col w-[350px] m-auto h-screen'>
      <div className='font-a text-headline font-bold'>대기</div>
      <div className='flex justify-center my-4'>
        <button className='bg-mint px-4 py-2 rounded-md mr-8 font-bold'>거리순</button>
        <button className='bg-purple px-4 py-2 rounded-md font-bold'>배달료순</button>
      </div>
      <RiderOrderList />
      <div className='flex justify-center my-4'>
        <button className='bg-red-400 px-4 py-2 rounded-md font-bold text-colors-lightGray'>
          배달 시작!
        </button>
      </div>
    </div>
  );
};
