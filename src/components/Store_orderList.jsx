import testDB from '../db/testDB.json';

export const StoreOrderList = () => {
  // 리스트 선택 시 고를 수 있는 기능

  return (
    <div className='flex flex-col '>
      {testDB.customer.map((v, i) => (
        <div
          key={i}
          className='bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow'>
          <div className='px-4 py-2'>
            <div className='flex justify-between font-bold'>
              <div>15분</div>
              <div>{testDB.customer[i].deliveryFee * 2 + testDB.customer[i].deliveryTip}원</div>
            </div>
            <div className='text-caption'>
              <div className='flex justify-between'>
                {testDB.store[i].storeName}
                <span className='ml-8'>거리</span>
              </div>
              <div className='flex'>{testDB.store[i].address}</div>
            </div>
          </div>
          <div className='flex justify-end gap-4 mb-2 mr-2'>
            <button className='bg-lightGray px-2 py-1 rounded-xl font-bold border-[1.5px] border-black text-caption text-darkGray'>
              주문 거절
            </button>
            <button className='bg-lightYellow px-2 py-1 rounded-xl font-bold border-[1.5px] border-black'>
              주문 수락
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
