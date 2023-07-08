import { useContext } from 'react';
import { AppContext } from '../App';

export const RiderOrderList = ({ orders }) => {
  const { account, orderContract, order_c_address } = useContext(AppContext);

  const onClickSetDelivery = async (orderNumber) => {
    try {
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods.setDelivery(orderNumber).encodeABI(),
            gas: '300000',
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col '>
      {orders.map((order, i) => (
        <button
          key={i}
          className='bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow'
          onClick={() => onClickSetDelivery(0)}>
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
