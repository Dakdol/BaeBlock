import React from 'react';

export const CustomerPayment = () => {
  return (
    <div className='bg-[#F8F8F8]'>
      <div className='bg-white w-[386px] h-8 absolute z-10'></div>
      <div className='flex justify-center mt-3'>
        <div className='font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          장바구니
        </div>
      </div>

      <div className='bg-white mt-12 px-5 py-3 category-shadow'>
        <div className='font-bold text-subtitle text-left mb-2'>음식점 이름</div>
      </div>
    </div>
  );
};
