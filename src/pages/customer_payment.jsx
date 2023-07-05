import { Link } from 'react-router-dom';
import { PaymentMenu } from '../components/Payment_menu';
import { useState } from 'react';

export const CustomerPayment = () => {
  const [pay, setPay] = useState(false);

  const onClickPay = () => {
    setPay(!pay);
  };

  return (
    <div className='bg-[#F8F8F8]'>
      <div className='bg-white w-[386px] h-14 absolute z-10'></div>
      <div className='flex justify-center pt-4'>
        <div className='font-bold text-subtitle max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden absolute z-20'>
          장바구니
        </div>
      </div>

      {pay ? (
        <div className='flex justify-center items-center'>
          <div className='flex flex-col justify-between absolute w-72 h-44 py-4 mt-[600px] bg-white border-2 border-black solid-shadow px-4 rounded-2xl text-black'>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <div className='font-bold text-headline'>주문을 완료할까요?</div>
              <div className='text-caption'>맛있고 빠르게 배달해드릴게요!</div>
            </div>
            <div className='flex justify-center gap-4'>
              <button
                className='bg-lightGray w-20 p-2 rounded-xl font-bold border-[1.5px] border-black'
                onClick={onClickPay}>
                아직...
              </button>
              <Link to='/customer/ordercomplete'>
                <button
                  className='bg-lightYellow p-2 rounded-xl font-bold border-[1.5px] border-black'
                  onClick={onClickPay}>
                  결제하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <div className='bg-white mt-14 px-5 py-4 category-shadow'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-subtitle'>호화반점</div>
          <div>20~30분 후 도착</div>
        </div>
        <div className='flex justify-between items-end text-body border-t-[1.5px] pt-2 mt-2 border-lightGray'>
          <div>서울시 어쩌구 저쩌구 저쩌구로 배달</div>
          <div className='text-caption text-purple'>수정</div>
        </div>
      </div>

      <div className='flex flex-col gap-4 bg-white mt-4 px-5 py-4 category-shadow'>
        <PaymentMenu foodName='낙지탕탕미엔' option='곱빼기' price='15000' />
        <PaymentMenu foodName='낙지탕탕미엔' option='곱빼기' price='15000' />
        <div className='text-center font-bold text-purple'>+ 메뉴 추가</div>
      </div>

      <div className='bg-white mt-4 px-5 py-4 category-shadow'>
        <div className='font-bold text-subtitle'>결제 수단</div>
        <div className='flex mt-4'>
          <input class='w-4 accent-purple' type='radio' name='radio' />
          <span class='ml-2 text-caption font-bold'>폴리곤으로 결제</span>
        </div>
        <div className='flex mt-2'>
          <input class='w-4 accent-purple' type='radio' name='radio' />
          <span class='ml-2 text-caption font-bold'>BB 코인으로 결제</span>
        </div>
      </div>

      <div className='flex flex-col gap-2 bg-white my-4 px-5 py-4 category-shadow'>
        <div className='font-bold text-subtitle'>결제금액</div>
        <div className='flex justify-between items-center mt-2'>
          <div className='font-bold text-caption'>총 주문금액</div>
          <div className='text-caption'>30000원</div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-caption'>배달비</div>
          <div className='text-caption'>1350원</div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-caption'>배달팁</div>
          <div className='text-caption'>0원</div>
        </div>
        <div className='flex justify-between items-center border-t-[1.5px] pt-4 mt-4 border-lightGray'>
          <div className='font-bold text-body'>총 결제금액</div>
          <div className='font-bold text-subtitle'>31,350원</div>
        </div>
      </div>

      <div className='sticky bottom-0 bg-white px-4 pb-4'>
        <button
          className='flex justify-center gap-2 bg-lightYellow w-[350px] py-3 rounded-md text-subtitle font-bold text-black'
          onClick={onClickPay}>
          <span>31,350원</span>결제하기
        </button>
      </div>
    </div>
  );
};
