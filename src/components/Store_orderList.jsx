import { useContext, useState } from "react";
import testDB from "../db/testDB.json";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export const StoreOrderList = () => {
  const navigate = useNavigate();
  const { web3, account, orderContract, order_c_address } =
    useContext(AppContext);
  const [accept, setAccept] = useState(false);
  const [decline, setDecline] = useState(false);

  const onClickAccept = () => {
    setAccept(!accept);
  };

  const onClickDecline = () => {
    setDecline(!decline);
  };
  const onClickAccept2 = async () => {
    var order = await orderContract.methods.returnOrder(0).call();
    var a = web3.utils.numberToHex(
      Number(order.deliveryFee)
    ); /*해당 주문번호의 배달비*/
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .storeAccept_Decline(0, true) /*주문번호,수락or거절*/
              .encodeABI(),
            gas: "100000",
            value: a,
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };
  const onClickDecline2 = async () => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods
              .storeAccept_Decline(1, false) /*주문번호,수락or거절*/
              .encodeABI(),
            gas: "100000",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col ">
      {accept ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[500px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">주문을 수락해요!</div>
              <div className="text-caption">조리를 시작해주세요!</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickAccept2}
              >
                수락
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {decline ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[500px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">주문을 거절할까요?</div>
              <div className="text-caption">주문을 취소해요.</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightGray w-20 p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickDecline2}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {testDB.customer.map((v, i) => (
        <div
          key={i}
          className="bg-white w-[350px] mb-3 rounded-lg border-[1.5px] border-darkGray solid-shadow"
        >
          <div className="px-4 py-2">
            <div className="flex justify-between font-bold">
              <div>15분</div>
              <div>
                {testDB.customer[i].deliveryFee * 2 +
                  testDB.customer[i].deliveryTip}
                원
              </div>
            </div>
            <div className="text-caption">
              <div className="flex justify-between">
                {testDB.store[i].storeName}
                <span className="ml-8">거리</span>
              </div>
              <div className="flex">{testDB.store[i].address}</div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mb-2 mr-2">
            <button
              className="bg-lightGray px-2 py-1 rounded-xl font-bold border-[1.5px] border-black text-caption text-darkGray"
              onClick={onClickDecline}
            >
              주문 거절
            </button>
            <button
              className="bg-lightYellow px-2 py-1 rounded-xl font-bold border-[1.5px] text-caption border-black"
              onClick={onClickAccept}
            >
              주문 수락
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
