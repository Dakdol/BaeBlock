import { Link } from 'react-router-dom';
import BtnNav from '../components/BtnNav';
function CustomerOrderComplete() {
  return (
    <div>
      <BtnNav />
      <div className='flex flex-col items-center'>
        <div className='w-[350px] mt-[8px] border-[1px] border-darkGray '></div>
        <div className='flex flex-col items-center gap-6 mt-8'>
          <div className='font-bold text-3xl'>주문 접수 완료!</div>
          <div className='flex flex-col justify-center items-center font-bold text-subtitle'>
            <div>라이더와 매장이 주문을 수락하면</div>
            <div>차례대로 알려드릴게요!</div>
          </div>
          <div className='text-caption'>라이더와 매장의 사정으로 취소될 수 있어요.</div>
        </div>

        <div className='w-[340px] h-[340px] my-8 border-[1px] rounded-3xl'></div>

        <div className='flex flex-col items-center mt-4'>
          <Link to='/'>
            <button className='bg-purple btn-style text-lightGray'>주문 내역 보기</button>
          </Link>
          <div className='text-purple text-body mt-4'>다른 메뉴도 구경할래!</div>
        </div>
      </div>
    </div>
  );
}

export default CustomerOrderComplete;
