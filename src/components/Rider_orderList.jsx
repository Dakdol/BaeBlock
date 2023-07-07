import user from '../db/user.json';

export const RiderOrderList = () => {
  // 리스트 선택 시 고를 수 있는 기능

  return (
    <div className='flex flex-col '>
      {user.customer.map((v, i) => (
        <button
          key={i}
          className='bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow'>
          <div className='px-4 py-2'>
            <div className='flex justify-between font-bold'>
              <div>15분</div>
              <div>
                {(
                  user.customer[i].orderList.deliveryFee * 2 +
                  user.customer[i].orderList.deliveryTip
                ).toLocaleString()}
                원
              </div>
            </div>
            <div className='text-caption'>
              <div className='flex justify-between mb-2'>
                {user.customer[i].orderList.storeName}
                <span className='ml-8'>거리</span>
              </div>
              <div className='flex'>고객 위치: {user.customer[i].cus_address}</div>
              {/* <div className='flex'>매장 위치: {user.store[i].sto_address}</div> */}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
