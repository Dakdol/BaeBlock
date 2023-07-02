import { FaRegSquarePlus } from 'react-icons/fa6';
import { FaRegSquareMinus } from 'react-icons/fa6';

import food from '../images/food.png';
import { useState } from 'react';
import BtnNav from '../components/BtnNav';
import { CustomerMenuDetail } from '../components/Customer_menuDetail';

function CustomerSelectMenu() {
  const [counter, setCounter] = useState(0);
  const onClickAdd = () => {
    setCounter(counter + 1);
  };
  const onClickSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='flex flex-col overflow-y-auto'>
      <div className='flex flex-col'>
        <BtnNav />
        <img src={food} alt='food' />
      </div>

      <div className='flex justify-between items-center mx-8 mt-4 mb-6'>
        <div className='font-bold text-headline'>귤</div>
        <div className='font-bold text-body'>15000원</div>
      </div>

      <CustomerMenuDetail />
      <CustomerMenuDetail />
      <CustomerMenuDetail />

      <div className='flex flex-col mx-6 mb-12'>
        <div className='font-bold text-body mb-4'>수량</div>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <FaRegSquareMinus size={22} color='#AA3FFF' onClick={onClickSub} />
            <div className='text-caption'>{counter}</div>
            <FaRegSquarePlus size={22} color='#AA3FFF' onClick={onClickAdd} />
          </div>
          <div class='border-t border-lightGray border-[1px]'></div>
        </div>
      </div>

      <div className='flex justify-between items-center px-4 py-4 border-t-2 border-lightGray'>
        <div className='font-bold text-body'>총 : 15000 원</div>
        <button className='text-subtitle font-bold bg-lightYellow rounded-xl px-6 py-2'>
          카트에 담기
        </button>
      </div>
    </div>
  );
}

export default CustomerSelectMenu;
