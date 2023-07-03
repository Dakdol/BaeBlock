import { FaRegSquarePlus } from 'react-icons/fa6';
import { FaRegSquareMinus } from 'react-icons/fa6';

import food from '../images/food.png';
import { useState } from 'react';
import BtnNav from '../components/BtnNav';
import { CustomerMenuDetail } from '../components/Customer_menuDetail';

function CustomerSelectMenu() {
  const [counter, setCounter] = useState(1);
  const onClickAdd = () => {
    setCounter(counter + 1);
  };
  const onClickSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='min-w-full h-[250px]'>
        <img className='w-full h-full object-cover' src={food} alt='food' />
      </div>

      <div className='flex justify-between items-center mx-6 mt-4 mb-6'>
        <div className='font-bold text-headline'>타코야키</div>
        <div className='font-bold text-body'>15000원</div>
      </div>

      <CustomerMenuDetail />
      <CustomerMenuDetail />
      <CustomerMenuDetail />

      <div className='flex justify-between items-center mx-6 mb-8'>
        <div className='font-bold text-body'>수량</div>
        <div className='flex items-center gap-2'>
          <FaRegSquareMinus size={22} color='#AA3FFF' onClick={onClickSub} />
          <div className='text-body font-bold'>{counter}</div>
          <FaRegSquarePlus size={22} color='#AA3FFF' onClick={onClickAdd} />
        </div>
      </div>

      <div className='sticky bottom-0 bg-white nded-b-2xl w-[386px] flex justify-between items-center px-4 py-4 border-t-2 border-lightGray'>
        <div className='font-bold text-body'>총 : 15000 원</div>
        <button className='text-subtitle font-bold bg-lightYellow rounded-xl px-6 py-2'>
          카트에 담기
        </button>
      </div>
    </div>
  );
}

export default CustomerSelectMenu;
