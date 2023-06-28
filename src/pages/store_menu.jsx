import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineHome } from 'react-icons/ai';

import { AiOutlinePlusSquare } from 'react-icons/ai';
import food from '../images/food.png';

import MenuList from '../components/MenuList';
import StoreIntroEdit from '../components/Store_IntroEdit';
import { useState } from 'react';

export default function StoreMenu() {
  const [storeName, setStoreName] = useState('매장명'); //로그인시 프롭스로 내려줘야함??
  const nftTitle = [{ name: 'qwe' }, { name: 'Asd' }]; //로그인시 프롭스로 내려줘야함??
  const menuList = [
    {
      menuName: '사과',
      menuFrom: '국내산',
      menuPrice: '12000',
      menuImage: '../images/orange.png',
      ownerRecommend: true,
    },
    {
      menuName: '복숭이',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
  ]; //로그인시 프롭스로 내려줘야함??
  return (
    <div className='flex flex-col justify-start items-center relative'>
      <div className='min-w-full bg-pink-100 h-[250px] relative'>
        <button className='absolute top-[44px] left-[24px]'>
          <IoIosArrowBack size={24} />
        </button>
        <button className='absolute top-[44px] left-[342px]'>
          <AiOutlineHome size={24} />
        </button>
        <img src={food} alt='food' />
      </div>

      <div className='absolute top-[200px]'>
        <StoreIntroEdit starCount='3' nftTitle={nftTitle} storeName={storeName} />
      </div>

      <div className='mt-[130px]' style={{ fontSize: '20px' }}>
        <div className='font-agothic16'>메뉴</div>
        {menuList.map((v, i) => (
          <MenuList
            key={i}
            menuName={menuList[i].menuName}
            menuFrom={menuList[i].menuFrom}
            menuPrice={menuList[i].menuPrice}
            menuImage={menuList[i].menuImage}
            ownerRecommend={menuList[i].ownerRecommend}
          />
        ))}

        <div
          className='sticky  bottom-4 bg-white mb-4 font-agothic16 w-[350px]  flex justify-center items-center py-[20px]  mt-4 rounded-lg border-[2px] border-[#2D2D32]'
          style={{ fontSize: '24px' }}>
          메뉴 추가
          <AiOutlinePlusSquare className='ml-2' size={24} color='purple' />
        </div>
      </div>
    </div>
  );
}
