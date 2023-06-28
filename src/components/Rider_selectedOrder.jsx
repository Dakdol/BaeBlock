import React from 'react';

export const RiderSelectedOrder = () => {
  // Rider_orderList에서 선택한 애들의 정보가 여기에 떠야함.

  return (
    <div className='flex-none w-60 h-[180px] border-2 rounded-lg px-2 py-1 bg-lightGray mr-4'>
      <div className='font-bold text-subtitle'>1번</div>
      <div className='flex flex-col gap-4 mt-1'>
        <div className='text-body overflow-hidden overflow-ellipsis line-clamp-2'>
          주소지 어쩌고 저쩌고 쌸라쌸라릴ㅇ잉어디까지 짤리는지 함 보자
        </div>
        <div className='text-caption font-bold'>
          남은 시간: <span className='text-body font-bold'>프롭스</span>
        </div>
        <div className='text-caption font-bold'>
          거리: <span className='text-body font-bold'>프롭스</span>
        </div>
      </div>
    </div>
  );
};
