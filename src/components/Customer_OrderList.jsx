import { useContext } from "react";
import { AppContext } from "../App";

const CustomerOrderList = (props) => {
  const { account, orderContract, order_c_address } = useContext(AppContext);

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
      className={`flex items-center justify-center ${props.color} w-[360px] h-[110px] rounded-lg border-[1.5px] border-black basic-shadow`}
    >
      <div className="min-w-full flex justify-between items-center tracking-tighter px-4">
        <div className="flex flex-col justify-between items-start">
          <div className="flex gap-2 justify-center items-center">
            <div className="font-bold" style={{ fontSize: "20px" }}>
              {props.storeName}
            </div>
          </div>
          <div>
            <div>총 음식값:{props.foodPrice}</div>
            <div>배달료:{props.deliveryFee}</div>
            <div>배달팁:{props.deliveryTip}</div>
          </div>
        </div>
        <div className="bg-purple p-4 rounded-xl">
          <button onClick={onClickRiderCompleteAndPay} className="text-white">
            음식수령완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderList;
