import React from 'react';
import testDB from '../db/testDB.json';

export const OrderList = () => {
  // 리스트 선택 시 고를 수 있는 기능

  return (
    <div>
      <ul>
        {testDB.customer.map((customer, i) => (
          <li key={i} className='bg-primary-darkYellow my-4 rounded-[10px]'>
            <div className='px-4 py-2'>
              <div>
                배달료: {testDB.customer[i].deliveryFee * 2} <br />
                배달팁: {testDB.customer[i].deliveryTip}{' '}
              </div>
              <div>
                고객 주소: {testDB.customer[i].address} <br />
                매장 주소: {testDB.store[i].address}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
