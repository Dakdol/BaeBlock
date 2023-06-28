import back from '../images/icon_ArrowBack.png';
import home from '../images/icon_home_.png';

import food from '../images/food.png';

import MenuList from '../components/MenuList';
import CartIcon from '../components/CartIcon';
import BottomBar from '../components/Customer_BottomNav';
import StoreIntro from '../components/Store_Intro';
import { useState } from 'react';

export default function CustomerViewMenu() {
  const [deliveryFee, setDeliveryFee] = useState(1000);
  const [cartCount, setCartCount] = useState(0); //로그인시 프롭스로 내려줘야함??

  const nftTitle = [{ name: '사장님' }, { name: '잘 되는지 확인' }]; //로그인시 프롭스로 내려줘야함??
  const menuList = [
    {
      menuName: '사과',
      menuFrom: '국내산',
      menuPrice: '12000',
      menuImage: '../images/orange.png',
      ownerRecommend: true,
    },
    {
      menuName: '복숭아',
      menuFrom: '캐나다산',
      menuPrice: '17000',
      menuImage: '../images/orange.png',
      ownerRecommend: false,
    },
  ]; //로그인시 프롭스로 내려줘야함??
  return (
    <>
      <div className='flex flex-col justify-start items-center relative'>
        <div className='min-w-full bg-pink-100 h-[250px] relative'>
          <div className='absolute top-11 flex justify-between items-center min-w-full px-6'>
            <img src={back} alt='back' />
            <img src={home} alt='home' />
          </div>

          <img src={food} alt='food' />
        </div>

        <div className='flex-cols justify-start items-start absolute top-[200px]'>
          <div
            className='flex justify-center items-center  bg-white w-[120px] rounded-full px-[6px] py-[1px] border-[3px] border-red-400 font-agothic16'
            style={{ fontSize: '14px' }}>
            배달료 {deliveryFee}원!
          </div>

          <StoreIntro storeName='안녕하세요!' nftTitle={nftTitle} starCount='3' />
        </div>

        <div className='mt-[150px]'>
          <div className='text-subtitle font-bold mb-4'>메뉴</div>
          <div className='flex flex-col gap-4'>
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
          </div>
        </div>
      </div>
      <div className='sticky bottom-0  mt-[250px]'>
        <CartIcon cartMenuCount={cartCount} />
        <BottomBar />
      </div>
    </>
  );
}
