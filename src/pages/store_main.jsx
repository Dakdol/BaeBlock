import { useState } from 'react';
import { NFTChips } from '../components/Nft_Chips';
import { Link } from 'react-router-dom';

import NftMarket from '../components/Main_nftMarket';

import LongBox from '../components/Main_longBox';
import Box from '../components/Main_recBox';
import WorkBadgeBTN from '../components/Work_Btn';

export default function RiderMain() {
  const [storeName, setStoreName] = useState('놀부 부대찌개'); //로그인에서 프롭스로 내려야할것같음
  const [monthProfit, setMonthProfit] = useState('100,000,000'); //로그인에서 프롭스로 내려야할것같음
  const [isWork, setIsWork] = useState(false);

  const toggleWorkBtn = () => {
    setIsWork(!isWork);
  };

  const nftTitle = [
    { title: '리뷰 최다' },
    { title: '친절한 사장님' },
    { title: '친절한 사장님' },
    { title: '리뷰 최다' },
    { title: '멕시칸' },
  ]; //로그인에서 프롭스로 내려야할것같음

  return (
    <div className='flex flex-col justify-center items-center pt-11 tracking-tighter mb-6'>
      <div className='border-[1px] px-2 rounded-lg max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden '>
        {storeName}
      </div>

      <div className='w-[360px] h-[156px] mt-6 flex flex-col justify-between'>
        <div className='text-headline font-bold'>{storeName} 사장님!</div>
        <div className='text-headline font-bold'>이번 달 매출은 {monthProfit}원 입니다!</div>
        <div className='text-headline font-bold'>오늘도 잘 먹겠습니다!</div>{' '}
      </div>

      <div className='w-[360px] flex justify-between items-end mt-6'>
        <div className='w-80'>
          <div className=' flex justify-start items-center gap-2 flex-wrap overflow-hidden h-16'>
            {nftTitle.map((v, i) => (
              <NFTChips key={i} title={nftTitle[i].title} />
            ))}
          </div>
        </div>
        <div onClick={toggleWorkBtn}>
          <WorkBadgeBTN
            text={isWork ? '영업중' : '영업안함'}
            color={isWork ? 'bg-mint' : 'bg-gray'}
          />
        </div>
      </div>

      <div className='w-[360px] flex flex-col justify-between items-center gap-4 mt-6'>
        <Link to={'/store/newlist'}>
          <LongBox text='새로운 주문이 들어왔어요!' color='bg-lightGray' />
        </Link>

        <Link to={'/store/mylist'}>
          <LongBox text='현재 수락한 주문 리스트' color='bg-lightGray' />
        </Link>

        <div className='flex justify-between w-full'>
          <Box text='매출 보기' color='bg-lightBage' />
          <Link to={'/store/menu-edit'}>
            <Box text='메뉴 수정' color='bg-deepYellow' />
          </Link>
        </div>

        <NftMarket />
      </div>
    </div>
  );
}
