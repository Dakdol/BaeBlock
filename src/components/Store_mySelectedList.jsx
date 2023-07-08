import { useContext, useEffect, useState } from "react";
// import storeNewOrder from "../db/storeNewOrder.json";
import { AppContext } from "../App";

export const StoreMySelectedList = () => {
  const [finished, setFinished] = useState({});
  const [toggle, setToggle] = useState({ index: null });
  const {
    web3,
    account,
    orderContract,
    order_c_address,
    storeOrderList,
    getStoreOrderList,
  } = useContext(AppContext);

  const onClickFinish = async (i) => {
    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          to: order_c_address,
          data: orderContract.methods.cookFinish(0).encodeABI() /*주문번호*/,
          gas: "100000",
        },
      ],
    });
    setToggle({ index: null });
    setFinished({
      ...finished,
      [i]: true,
    });
  };

  const onClickToggle = (i) => {
    setToggle({ index: i });
  };

  const calculateTotalCost = (i) => {
    const orderList = storeOrderList[i].orderMenu;
    let totalCost = 0;

    orderList.forEach((item) => {
      const { price, quantity } = item;
      totalCost += price * quantity;
    });

    return totalCost;
  };
  useEffect(() => {
    getStoreOrderList();
  }, []);

  return (
    <div className="flex flex-col">
      {toggle.index !== null && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[500px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">조리를 완료했어요!</div>
              <div className="text-caption">고객님께 조리 완료를 알려요!</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={() => onClickFinish(toggle.index)}
              >
                완료
              </button>
            </div>
          </div>
        </div>
      )}

      {storeOrderList.map((v, i) => {
        if (finished[i]) return null;
        return (
          <div
            key={i}
            className="bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow"
          >
            <div className="px-4 py-2">
              <div className="flex justify-between font-bold">
                <div>OrderID : {v.OrderID}</div>
                <div>총 {calculateTotalCost(i).toLocaleString()} 원</div>
              </div>

              <div className="flex justify-between text-caption">
                <div className="flex flex-col">
                  {v.orderMenu.map((A, i) => (
                    <div className="w-[150px] flex justify-between" key={i}>
                      <div>{A.foodname}</div> <div>{A.quantity}개</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mb-2 mr-2">
              <button
                className="bg-lightYellow px-2 py-1 rounded-xl font-bold border-[1.5px] text-caption border-black"
                onClick={() => onClickToggle(i)}
              >
                조리 완료
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
