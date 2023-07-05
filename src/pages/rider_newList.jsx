import React, { useState } from 'react';
import { RiderOrderList } from '../components/Rider_orderList';
import { Link } from 'react-router-dom';

export const RiderNewList = () => {
  const [startDelivery, setStartDelivery] = useState(false);
  // 배달 최대 3개 선택 되면 1, 2, 3 동그라미 컬러 변경
  const [selectDelivery, setSelectDelivery] = useState(0);

  const onClickPopUp = () => {
    setStartDelivery(!startDelivery);
  };

  return (
    <div className='flex flex-col'>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center pt-4'>
        <div className='font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          대기 중인 배달 목록
        </div>
      </div>

      <div className='flex justify-evenly items-center mt-14'>
        <div className='flex justify-center items-center w-8 h-8 rounded-full border-2 border-black'>
          1
        </div>
        <div className='flex justify-center items-center w-8 h-8 rounded-full border-2 border-black'>
          2
        </div>
        <div className='flex justify-center items-center w-8 h-8 rounded-full border-2 border-black'>
          3
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        <button className='bg-mint px-4 py-2 rounded-md mr-8 font-bold'>거리순</button>
        <button className='bg-deepYellow px-4 py-2 rounded-md font-bold'>배달료순</button>
      </div>

      <div className='flex flex-col justify-center items-center mt-4'>
        <RiderOrderList />
      </div>

      {startDelivery ? (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-between absolute w-72 h-44 py-4 mb-[360px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black'>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <div className='font-bold text-headline'>배달을 시작하세요!</div>
              <div className='text-caption'>배달을 시작하세요!!</div>
            </div>
            <div className='flex justify-center gap-4'>
              <button
                className='bg-lightGray p-2 rounded-xl font-bold border-[1.5px] border-black'
                onClick={onClickPopUp}>
                다시 선택
              </button>
              <Link to='/rider/delivery'>
                <button
                  className='bg-lightYellow p-2 rounded-xl font-bold border-[1.5px] border-black'
                  onClick={onClickPopUp}>
                  배달 시작!
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className='flex justify-center my-4'>
        <button
          className='bg-red-500 px-4 py-2 rounded-md font-bold text-white'
          onClick={onClickPopUp}>
          배달 시작!
        </button>
      </div>
    </div>
  );
};
