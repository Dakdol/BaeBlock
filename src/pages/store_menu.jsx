import { useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import plus from '../images/icon_plus.png';

import back from '../images/icon_ArrowBack.png';
import home from '../images/icon_home_.png';
import food from '../images/food.png';
import MenuList from '../components/MenuList';
import StoreIntroEdit from '../components/Store_IntroEdit';

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
      <div className='flex flex-col justify-start items-center'>
        <div className='min-w-full bg-pink-100 h-[250px]'>
          <img className='w-full h-full object-cover' src={food} alt='food' />
        </div>

        <div className='flex flex-col justify-center items-center absolute top-[300px]'>
          <div className='flex flex-col'>
            <StoreIntroEdit storeName='도널드 트럼프의 점심' nftTitle={nftTitle} starCount='5' />
          </div>
          <div className='mt-4'>
            <div className='text-subtitle font-bold mb-2'>메뉴</div>
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
              <div className='bg-white w-[350px] h-[100px] flex justify-center items-center p-4 rounded-2xl border-2 border-darkGray solid-shadow font-bold text-headline'>
                메뉴 추가
                <img className='ml-4 w-6 h-6' src={plus} alt='plus button' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
