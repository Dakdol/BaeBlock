import cart from "../images/icon_cart.png";

const CartIcon = (props) => {
  return (
    <div className="  min-w-full flex justify-end">
      <div
        className="relative   right-2 font-agothic13 w-[70px] h-[70px] bg-purple text-[#FAFAF2] flex justify-center items-center rounded-full border-[1px] shadow-md "
        style={{ fontSize: "20px" }}
      >
        <img className="w-[160px]" src={cart} alt="cart" />
        <div className="w-8 h-8 absolute right-0 bottom-0 translate-x-2 translate-y-2 bg-purple rounded-full p-2 border-[1px] shadow-md flex justify-center items-center">
          {props.cartMenuCount}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
