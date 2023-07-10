import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import order from "../db/order.json";

const CustomerOrderList = (props) => {
  const { account, orderContract, order_c_address } = useContext(AppContext);
  const [state, setState] = useState("");

  const getOrderState = async () => {
    try {
      const response = await orderContract.methods.returnOrderState(0).call();
      if (Number(response) === 0) {
        setState("주문 완료");
      } else if (Number(response) === 1) {
        setState("가게 수락");
      } else if (Number(response) === 2) {
        setState("가게 거절");
      } else if (Number(response) === 3) {
        setState("조리 완료");
      } else if (Number(response) === 4) {
        setState("배달 수락");
      } else if (Number(response) === 5) {
        setState("배달 중");
      } else if (Number(response) === 6) {
        setState("배달 완료");
      } else {
        setState("완료");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderState();
  });

  const onClickRiderCompleteAndPay = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .orderComplete(0, true)
              .encodeABI() /* 주문번호,true*/,
            gas: "100000",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`flex items-center justify-center ${props.color} w-[360px] rounded-lg border-[1.5px] border-black basic-shadow`}
    >
      <div className="min-w-full flex justify-between items-center tracking-tighter px-4">
        <div className="flex flex-col justify-between items-start">
          <div className="flex gap-2 justify-center items-center">
            <div className="font-bold" style={{ fontSize: "20px" }}>
              {props.storeName}
            </div>
          </div>
          <div>
            <div className="text-body font-bold mt-1 pb-1">
              주문한 음식
              <div className="mt-1 ml-1 text-body font-thin">
                {order[0].orderMenu.map((v) => (
                  <div className="flex justify-between">
                    ▪ {v.foodname} <div>{v.quantity} 개</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between text-body font-bold pb-1">
              <div>총 결제금액</div>
              <div className="ml-2">
                {(
                  props.deliveryTip +
                  props.foodPrice +
                  props.deliveryFee
                ).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <div>
          {state == 6 ? (
            <button
              onClick={onClickRiderCompleteAndPay}
              className="text-white bg-purple
            px-4
            py-2
            rounded-xl"
            >
              {state}
            </button>
          ) : (
            <button className="text-purple font-bold  px-4 py-2 rounded-xl">
              {state}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderList;
