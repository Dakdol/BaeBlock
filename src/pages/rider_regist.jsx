import React from 'react';
import MMLogo from '../images/logo_metaMask.png';
import Logo from '../images/BBLogoLightGradient.png';

export const RiderRegist = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-24 tracking-tighter'>
      <div className='font-bold text-[24px]'>메타마스크로 간편하게 가입해요.</div>
      <div className='flex flex-col justify-center items-center gap-1 mt-8'>
        <div className='text-body'>배불럭은 이더리움의 스마트 컨트랙트를 활용한</div>
        <div className='text-body'>새로운 배달앱 입니다!</div>
        <div className='text-body'>
          라이더님은 <span className='font-bold text-purple'>중개 배달비 없이 모두</span> 받아가요!
        </div>
      </div>
      <div className='font-bold text-subtitle mt-16'>
        <span className='font-bold text-purple'>여우를 눌러 가입</span>해보세요!
      </div>
      <img className='w-48 mt-4' src={MMLogo} alt='metamask' />
      <div className='text-caption text-darkGray mt-32'>이용약관</div>
      <img className='w-20 mt-8' src={Logo} alt='Logo' />
    </div>
  );
};
