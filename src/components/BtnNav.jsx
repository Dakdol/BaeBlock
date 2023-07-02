import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BtnNav = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-between items-center mt-4 w-[360px] absolute'>
        <Link to='/'>
          <HiOutlineArrowSmLeft size={24} />
        </Link>
        <Link to='/'>
          <HiOutlineHome size={24} />
        </Link>
      </div>
    </div>
  );
};

export default BtnNav;
