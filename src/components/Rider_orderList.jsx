import { useEffect } from 'react';

export const RiderOrderList = ({ orders }) => {
  // 리스트 선택 시 고를 수 있는 기능

  useEffect(() => {
    console.log(orders);
  }, []);

  return (
    <div className='flex flex-col '>
      {orders.map((order, i) => (
        <button
          key={i}
          className='bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow'>
          <div className='px-4 py-2'>
            <div className='flex justify-between font-bold'>
              <div>15분</div>
              <div>{(order.deliveryFee * 2 + order.deliveryTip).toLocaleString()}원</div>
            </div>
            <div className='text-caption'>
              <div className='flex justify-between mb-2'>
                {order.storeName}
                <span className='ml-8'>{order.distance} km</span>
              </div>
              <div className='flex'>고객 위치: {order.cus_address}</div>
              {/* <div className='flex'>매장 위치: {order.sto_address}</div> */}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
