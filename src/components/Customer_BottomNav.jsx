import like from '../images/icon_like.png';
import list from '../images/icon_list.png';
import rocket from '../images/icon_rocket.png';
import shop from '../images/icon_shop.png';
import user from '../images/icon_user.png';

const BottomBar = () => {
  return (
    <div className=' min-w-full'>
      <div className='bg-white shadow-custom rounded-tl-[5px] rounded-tr-[5px] w-[390px] h-[60px] flex justify-evenly  items-center'>
        <img className='w-[40px]' src={shop} alt='shop' />
        <img className='w-[40px]' src={list} alt='list' />
        <img className='w-[40px]' src={rocket} alt='rocket' />
        <img className='w-[40px]' src={like} alt='like' />
        <img className='w-[40px]' src={user} alt='user' />
      </div>
    </div>
  );
};

export default BottomBar;
