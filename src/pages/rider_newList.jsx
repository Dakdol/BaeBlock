import React from 'react';
import { OrderList } from '../components/OrderList';

export const RiderNewList = () => {
  return (
    <div className='w-[350px] m-auto h-screen mt-4'>
      <div>배달 목록 리스트</div>
      <OrderList />
    </div>
  );
};
