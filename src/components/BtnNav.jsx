import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { HiOutlineHome } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const BtnNav = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <div className='flex justify-center'>
      <div className='flex justify-between items-center pt-4 w-[360px] absolute'>
        <HiOutlineArrowSmLeft size={24} onClick={onClickBtn} />
        <HiOutlineHome size={24} />
      </div>
    </div>
  );
};

export default BtnNav;
