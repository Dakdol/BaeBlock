import React from 'react';
import { FaWifi, FaBatteryThreeQuarters } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';

export const Header = () => {
  return (
    <div className='flex justify-between mx-6 mt-2.5'>
      <div>9 : 41</div>
      <div className='flex gap-2 items-center'>
        <GiNetworkBars size={16} />
        <FaWifi size={16} />
        <FaBatteryThreeQuarters size={20} />
      </div>
    </div>
  );
};
