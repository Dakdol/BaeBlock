import React, { useState } from 'react';
import { RiderSelectedOrder } from '../components/Rider_selectedOrder';

export const RiderDeliveryStatus = () => {
  const [finished, setFinished] = useState(false);

  const onClickFinish = () => {
    setFinished(!finished);
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-4'>
        <div className='flex justify-center'>
          <div className='border-[1px] px-2 rounded-lg max-w-[250px] border-darkGray whitespace-nowrap overflow-ellipsis overflow-hidden'>
            서울시 강남구 언주로 18길 여기는 잘리는 곳
          </div>
        </div>

        {finished ? (
          <div className='flex justify-center items-center z-30'>
            <div className='flex flex-col justify-between absolute w-72 h-44 py-4 mt-[520px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black'>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='font-bold text-headline'>배달을 완료했어요!</div>
                <div className='text-caption'>고객님께 배달 완료를 알려요!</div>
              </div>
              <div className='flex justify-center gap-4'>
                <button
                  className='bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black'
                  onClick={onClickFinish}>
                  완료
                </button>
              </div>
            </div>
          </div>
        ) : null}

        <div className='w-full h-[520px] relative overflow-hidden mt-6'>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src={process.env.PUBLIC_URL + '/images/testMap.jpg'}
            alt='지도'
          />
        </div>
      </div>
      <div className='flex overflow-x-auto pt-5 pb-2 ml-5'>
        <RiderSelectedOrder onClickEvent={onClickFinish} />
        <RiderSelectedOrder onClickEvent={onClickFinish} />
        <RiderSelectedOrder onClickEvent={onClickFinish} />
      </div>
    </div>
  );
};
