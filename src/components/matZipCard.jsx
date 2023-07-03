import React from 'react';
import star from '../images/icon_star.png';

export const MatZipCard = ({ img1, img2, img3 }) => {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='flex relative w-[350px] h-[200px] border-[1.5px] rounded-3xl border-black overflow-hidden solid-shadow'>
          <img
            className='absolute w-[40%] h-[50%] object-cover border-y-2 border-l-2 border-white rounded-tl-3xl'
            src={img1}
            alt=''
          />
          <img
            className='absolute bottom-0 w-[40%] h-[50%] object-cover border-b-2 border-l-2 border-white rounded-bl-3xl'
            src={img2}
            alt=''
          />
          <img
            className='absolute right-0 w-[60%] h-full object-cover border-2 border-white rounded-r-3xl'
            src={img3}
            alt=''
          />
        </div>
      </div>
      <div className='flex justify-between items-center px-1 mt-1'>
        <div className='text-body font-bold'>AI는 조류독감이다</div>
        <div className='text-caption text-darkGray'>21-31분</div>
      </div>
      <div className='flex justify-start items-center gap-2 text-caption text-darkGray px-1'>
        <img className='w-[18px] mr-0.5' src={star} alt='star' />
        {/* ⭐ */}
        <span>5.0</span>
        <span>(123)</span>
        <span>·</span>
        <span>1.3km</span>
        <span>·</span>
        <span>1350원</span>
      </div>
    </div>
  );
};
