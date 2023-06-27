import React from 'react';
import { RiderOrderList } from '../components/rider_orderList';

export const RiderNewList = () => {
  return (
    <div className='w-[350px] m-auto h-screen mt-4'>
      <div>주문 목록 리스트</div>
      <RiderOrderList />
    </div>
  );
};
