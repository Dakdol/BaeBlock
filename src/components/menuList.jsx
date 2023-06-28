import pencil from '../images/icon_pencil_.png';

const MenuList = (props) => {
  return (
    <div className='bg-white w-[350px] h-[100px] flex justify-between items-center p-4 rounded-2xl border-2 border-darkGray solid-shadow'>
      <div>
        <div className='flex gap-2 items-center'>
          <div className='text-subtitle font-bold'>{props.menuName}</div>
          {props.ownerRecommend ? (
            <div className='bg-deepYellow rounded-full px-1 text-white text-caption'>
              사장님 추천
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='text-body text-darkGray'>{props.menuFrom}</div>
        <div className='text-body text-darkGray'>{props.menuPrice}원</div>
      </div>
      <div className='relative bg-darkGray rounded-lg w-20 h-20 border-4 border-deepYellow'>
        <img src={props.menuImage} alt='' />
        <div className='absolute bottom-[-12px] right-[-12px]'>
          <img src={pencil} alt='pencil' />
        </div>
      </div>
    </div>
  );
};
export default MenuList;
