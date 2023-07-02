import ShopCart from '../images/shoppingCart.png';

const CartIcon = ({ cartMenuCount }) => {
  return (
    <div className='flex justify-end'>
      <div className='relative'>
        <img className='w-[90px] h-auto' src={ShopCart} alt='' />
        <div className='absolute bottom-3 right-4 font-bold text-body text-lightYellow'>
          {cartMenuCount}
        </div>
      </div>
    </div>
  );
};

export default CartIcon;
