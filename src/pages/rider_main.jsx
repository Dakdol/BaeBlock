import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NFTChips } from '../components/Nft_Chips';
import NftMarket from '../components/Main_nftMarket';
import LongBox from '../components/Main_longBox';
import Box from '../components/Main_recBox';
import Badge from '../components/Work_Btn';

export default function RiderMain() {
  const [location, setLocation] = useState('서울시 강남구');
  const [nickName, setNickName] = useState('나는라이더다'); //로그인에서 프롭스로 내려야할것같음
  const [deliveryCount, setDeliveryCount] = useState(0); //로그인에서 프롭스로 내려야할것같음

  const nftTitle = [
    { title: '멕시칸' },
    { title: '리뷰 최다' },
    { title: '친절한 사장님' },
    { title: '친절한 사장님' },
    { title: '친절한 사장님' },
    { title: '친절한 사장님' },
    { title: '친절한 사장님' },
    { title: '친절한 사장님' },
  ]; //로그인에서 프롭스로 내려야할것같음

  return (
    <div className='flex flex-col justify-center items-center pt-11 tracking-tighter mb-6'>
      <div className='border-[1px] px-2 rounded-lg max-w-[250px] whitespace-nowrap overflow-ellipsis overflow-hidden '>
        {location}
      </div>

      <div className='w-[360px] h-[156px] flex flex-col justify-between  mt-6'>
        <div className='text-headline font-bold'>{nickName} 라이더님!</div>
        <div className='text-headline font-bold'>어제 {deliveryCount}번 배달했어요!</div>
        <div className='text-headline font-bold'>오늘도 안전 운전하세요!</div>{' '}
      </div>

      <div className='w-[360px] flex justify-between items-end mt-6'>
        <div className='w-80'>
          <div className=' flex justify-start items-center gap-2 flex-wrap overflow-hidden h-16'>
            {nftTitle.map((v, i) => (
              <NFTChips key={i} title={nftTitle[i].title} />
            ))}
          </div>
        </div>
        <div>
          <Badge text='영업안함' color='bg-mint' />
        </div>
      </div>

      <div className='w-[360px] flex flex-col justify-between items-center gap-4 mt-6'>
        <Link to={'/rider/newlist'}>
          <LongBox text='새로운 배달을 시작해요!' color='bg-lightGray' />
        </Link>

        <Link to={'/rider/delivery'}>
          <LongBox text='현재 배달 중인 목록' color='bg-lightGray' />
        </Link>

        <div className='flex justify-between w-full'>
          <Box text='오늘의 수익' color='bg-lightBage' />
          <Box text='나의 프로필' color='bg-deepYellow' />
        </div>

        <NftMarket />
      </div>
    </div>
  );
}
