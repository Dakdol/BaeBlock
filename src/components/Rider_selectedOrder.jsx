import React from 'react';

export const RiderSelectedOrder = () => {
  return (
    <div className='flex-none w-60 h-[180px] border-2 rounded-lg px-2 py-1 bg-colors-lightGray mr-4'>
      <div className='font-bold text-headline'>1번</div>
      <div className='flex flex-col gap-4 mt-2'>
        <div className='text-subtitle'>주소지 어쩌고 저쩌고</div>
        <div className='text-caption font-bold'>배달 예정 시간</div>
        <div>거리</div>
      </div>
    </div>
  );
};
