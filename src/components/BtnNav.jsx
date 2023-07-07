import { HiOutlineArrowSmLeft } from 'react-icons/hi';
import { TbWallet, TbWalletOff } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const BtnNav = ({ scrollPosition, account, onClickAccount }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  const bgColor = scrollPosition >= 250 ? 'bg-white' : 'transparent';

  return (
    <div className='flex justify-center'>
      <div
        className={`${bgColor} w-[386px] flex justify-between items-center pt-4 pb-2 px-6 fixed z-20`}>
        <HiOutlineArrowSmLeft size={24} onClick={onClickBtn} />
        {account ? (
          <div className='flex gap-1'>
            {/* <div>
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div> */}
            <TbWallet size={24} />
          </div>
        ) : (
          <TbWalletOff size={24} onClick={onClickAccount} />
        )}
      </div>
    </div>
  );
};

export default BtnNav;
