import React from "react";
import order from "../db/order.json";

export const CustomerReceipt = ({ foodTotal, exchangeRate }) => {
  // Rider_orderList에서 선택한 애들의 정보가 여기에 떠야함.

  return (
    <div className="flex flex-col gap-2 mt-1">
      <div className="text-body font-thin ">주문번호 {order[0].OrderID}</div>
      <div className="text-body font-bold">
        배달 주소 : {order[0].cus_address}
      </div>
      <div className="text-body font-bold">
        가게 이름 : {order[0].storeName}
      </div>
      <div className="text-body font-bold">
        주문한 음식
        <div className="mt-1 ml-1 text-body font-thin">
          {order[0].orderMenu.map((v) => (
            <div>
              ▪ {v.foodname} {v.quantity}개
            </div>
          ))}
        </div>
      </div>

      <div className="text-body font-bold">
        <div className="mt-1 mb-1 text-body font-bold">
          <div> 음식 가격 : {order[0].deliveryTip} 원</div>
          <div>배달비 : {order[0].deliveryFee + order[0].deliveryTip} 원</div>
        </div>
        결제 금액 :{" "}
        {(
          (foodTotal + order[0].deliveryFee + order[0].deliveryTip) /
          exchangeRate
        ).toFixed(3)}{" "}
        원
      </div>

      <div className="text-body"></div>
    </div>
  );
};
