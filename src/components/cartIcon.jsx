import cart from '../images/cart.png';

const CartIcon = (props) => {
  return (
    <div className='flex justify-end'>
      <div className='relative right-3 bottom-6 w-20 h-20 bg-purple text-lightBage flex justify-center items-center rounded-full border-2 basic-shadow'>
        <img className='w-40 h-auto' src={cart} alt='cart' />
        <div className='w-8 h-8 absolute right-0 bottom-0 translate-x-2 translate-y-2 bg-purple rounded-full p-2 border-[1px] basic-shadow flex justify-center items-center'>
          {props.cartMenuCount}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
