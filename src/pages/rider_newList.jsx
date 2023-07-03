import React from 'react';
import { RiderOrderList } from '../components/Rider_orderList';

export const RiderNewList = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center pt-4'>
        <div className='font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          대기 중인 배달 목록
        </div>
      </div>

      <div className='flex justify-center mt-14'>
        <button className='bg-mint px-4 py-2 rounded-md mr-8 font-bold'>거리순</button>
        <button className='bg-purple px-4 py-2 rounded-md font-bold'>배달료순</button>
      </div>

      <div className='flex flex-col justify-center items-center mt-4'>
        <RiderOrderList />
      </div>

      <div className='flex justify-center my-4'>
        <button className='bg-red-400 px-4 py-2 rounded-md font-bold text-colors-lightGray'>
          배달 시작!
        </button>
      </div>
    </div>
  );
};
