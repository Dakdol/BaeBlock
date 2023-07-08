import { useContext } from "react";
import { AppContext } from "../App";
import CustomerOrderList from "../components/Customer_OrderList";
import User from "../db/user.json";

const CustomerMypage = () => {
  const { web3, account, orderContract, order_c_address } =
    useContext(AppContext);

  const calculateTotalCost = (i) => {
    const orderList = User.customer[i].orderList.wishList;
    let totalCost = 0;

    orderList.forEach((item) => {
      const { cost, quantity } = item;
      totalCost += cost * quantity;
    });

    return totalCost;
  };
  console.log(account);
  console.log(User.customer[0].wallet);

  return (
    <div className="bg-blue-100 min-w-full min-h-full flex flex-col justify-center items-center gap-4">
      <div className="mt-16 font-bold">나의 주문 목록</div>
      {User.customer.map((v, i) =>
        v.wallet.toLowerCase() === account.toLowerCase() ? (
          <CustomerOrderList
            key={i}
            color="bg-deepYellow"
            storeName={v.orderList.storeName}
            foodPrice={calculateTotalCost(i)}
            deliveryFee={v.orderList.deliveryFee}
            deliveryTip={v.orderList.deliveryTip}
          />
        ) : null
      )}
    </div>
  );
};

export default CustomerMypage;
