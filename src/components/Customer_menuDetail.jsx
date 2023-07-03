import React from 'react';

export const CustomerMenuDetail = ({ title, value, caption }) => {
  return (
    <div className='flex flex-col mx-6 mb-4'>
      <div className='font-bold text-body mb-4'>기본 옵션</div>
      <div className='flex flex-col gap-3'>
        <div className='flex'>
          <input class='w-4 accent-purple' type='radio' name='radio' />
          <span class='ml-2 text-caption'>제주산 귤</span>
        </div>
        <div className='flex'>
          <input class='w-4 accent-purple' type='radio' name='radio' />
          <span class='ml-2 text-caption'>태국산 귤</span>
        </div>
        <div class='border-t border-lightGray border-[1px]'></div>
      </div>
    </div>
  );
};
