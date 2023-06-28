import pencil from '../images/icon_pencil_.png';

const MenuList = (props) => {
  return (
    <div className='font-agothic13 bg-white w-[350px] flex justify-between  items-center px-[10px] py-[15px]  mt-4 rounded-lg border-[2px] border-[#2D2D32]'>
      <div style={{ fontSize: '20px' }}>
        <div className='flex gap-2 items-center'>
          <div>{props.menuName}</div>
          {props.ownerRecommend ? (
            <div
              className='bg-deepYellow rounded-full px-[6px] py-[1px] text-white flex justify-center items-center'
              style={{ fontSize: '16px' }}>
              사장님 추천
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>{props.menuFrom}</div>
        <div>{props.menuPrice}원</div>
      </div>
      <div className='relative bg-darkGray rounded-[10px]  w-[80px] h-[80px]'>
        <img src={props.menuImage} alt='' />
        <div className='absolute   bottom-[-10px] right-[-10px]'>
          <img src={pencil} alt='pencil' />
        </div>
      </div>
    </div>
  );
};
export default MenuList;
