import React, { useState } from 'react';
import testDB from '../db/testDB.json';

export const RiderOrderList = () => {
  // 리스트 선택 시 고를 수 있는 기능

  return (
    <div>
      <div className='flex justify-center my-4'>
        <button className='bg-colors-mint px-4 py-2 rounded-md mr-8 font-bold'>거리순</button>
        <button className='bg-colors-purple px-4 py-2 rounded-md font-bold'>배달료순</button>
      </div>

      <ul className=''>
        {testDB.customer.map((v, i) => (
          <li key={i} className='bg-colors-lightYellow my-2 rounded-md'>
            <div className='px-4 py-2'>
              <div className='flex justify-between font-bold'>
                <div>15분</div>
                <div>{testDB.customer[i].deliveryFee * 2 + testDB.customer[i].deliveryTip}원</div>
              </div>
              <div className='text-caption'>
                <div>
                  {testDB.store[i].storeName}
                  <span className='ml-8'>거리</span>
                </div>
                <div>{testDB.store[i].address}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
