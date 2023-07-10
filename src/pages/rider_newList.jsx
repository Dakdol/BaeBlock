import React, { useEffect, useState, useContext } from "react";
import { RiderOrderList } from "../components/Rider_orderList";
import user from "../db/user.json";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export const RiderNewList = () => {
  const { account, orderContract, order_c_address } = useContext(AppContext);
  const [startDelivery, setStartDelivery] = useState(false);
  const [orders, setOrders] = useState([]);
  const [activeBtn, setActiveBtn] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  // 배달 최대 3개 선택 되면 1, 2, 3 동그라미 컬러 변경
  const [selectDelivery, setSelectDelivery] = useState(0);

  const onClickPopUp = () => {
    setStartDelivery(!startDelivery);
  };

  const handleShowPopup = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1500);
  };

  const onClickSortByFee = () => {
    const sortedOrders = [...orders].sort(
      (a, b) => b.deliveryFee + b.deliveryTip - (a.deliveryFee + a.deliveryTip)
    );
    setOrders(sortedOrders);
    setActiveBtn("fee");
    handleShowPopup("배달료순으로 정렬되었습니다.");
  };

  const onClickSortByDist = () => {
    const sortedOrders = [...orders].sort((a, b) => a.distance - b.distance);
    setOrders(sortedOrders);
    setActiveBtn("dist");
    handleShowPopup("거리순으로 정렬되었습니다.");
  };

  useEffect(() => {
    const getOrderList = user.customer.map((customer) => customer.orderList);
    setOrders(getOrderList);
  }, []);

  const onClickStartDelivery = async (orderNumber) => {
    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: order_c_address,
            data: orderContract.methods.startDelivery(orderNumber).encodeABI(),
            gas: "300000",
          },
        ],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-[386px] h-14 absolute z-10"></div>
      <div className="flex justify-center pt-4">
        <div className="font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20">
          대기 중인 배달 목록
        </div>
      </div>

      <div className="absolute bg-white w-[386px] flex justify-center items-center gap-16 mt-14">
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full border-2 border-black ${
            selectDelivery >= 1 ? "bg-red-300" : ""
          }`}
        >
          1
        </div>
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full border-2 border-black ${
            selectDelivery >= 2 ? "bg-lightYellow" : ""
          }`}
        >
          2
        </div>
        <div
          className={`flex justify-center items-center w-8 h-8 rounded-full border-2 border-black ${
            selectDelivery >= 3 ? "bg-green-300" : ""
          }`}
        >
          3
        </div>
      </div>

      {startDelivery && selectDelivery >= 1 ? (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between absolute w-72 h-44 py-4 mt-[650px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="font-bold text-headline">배달을 시작하세요!</div>
              <div className="text-caption">배달을 시작하세요!!</div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-lightGray p-2 rounded-xl font-bold border-[1.5px] border-black"
                onClick={onClickPopUp}
              >
                다시 선택
              </button>
              <Link to="/rider/delivery">
                <button
                  className="bg-lightYellow p-2 rounded-xl font-bold border-[1.5px] border-black"
                  onClick={onClickStartDelivery.bind(null, selectDelivery)}
                >
                  배달 시작!
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {startDelivery && selectDelivery < 1 && (
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-around items-center absolute w-72 h-44 py-4 mt-[650px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black">
            <div className="font-bold text-headline text-center">
              선택된 주문이 없어요!
            </div>
            <button
              className="bg-lightYellow w-20 p-2 rounded-xl font-bold border-[1.5px] border-black mt-4"
              onClick={onClickPopUp}
            >
              확인
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-24">
        <button
          className="bg-mint px-4 py-2 rounded-md mr-8 font-bold"
          onClick={onClickSortByDist}
        >
          거리순
        </button>
        <button
          className="bg-deepYellow px-4 py-2 rounded-md font-bold"
          onClick={onClickSortByFee}
        >
          배달료순
        </button>
      </div>

      {showPopup && (
        <div className="absolute z-30 mt-[690px] bg-white border-[1.5px] border-darkGray px-4 py-2 rounded-2xl font-bold fade-in fade-in-out">
          {popupMessage}
        </div>
      )}

      <div className="flex flex-col justify-center items-center mt-4">
        <RiderOrderList
          orders={orders}
          activeBtn={activeBtn}
          selectDelivery={selectDelivery}
          setSelectDelivery={setSelectDelivery}
        />
      </div>

      <div className="sticky bottom-0  mt-[700px] bg-white rounded-b-2xl w-[386px] flex justify-center items-center px-4 py-4 border-t-2 border-lightGray">
        <button
          className="bg-red-500 px-4 py-2 rounded-md font-bold text-white"
          onClick={() => {
            if (selectDelivery < 1) {
              setStartDelivery(true);
            } else {
              onClickPopUp();
            }
          }}
        >
          배달 시작!
        </button>
      </div>
    </div>
  );
};
