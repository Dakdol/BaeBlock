import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginSelect from './pages/login_select';
import { Header } from './components/Header';
import BtnNav from './components/BtnNav';

import CustomerViewMenu from './pages/customer_viewMenu';
import CustomerOrderComplete from './pages/customer_orderComplete';
import { CustomerRegistDetail } from './pages/customer_registDetail';
import { CustomerMain } from './pages/customer_main';
import { CustomerPayment } from './pages/customer_payment';
import { CustomerRegist } from './pages/customer_regist';
import { CustomerSignIn } from './pages/customer_signIn';
import CustomerSelectMenu from './pages/customer_selectMenu';

import StoreMain from './pages/store_main';
import StoreMenu from './pages/store_menu';
import { StoreNewList } from './pages/store_newList';
import { StoreMyList } from './pages/store_myList';
import StoreMenuEdit from './pages/store_menuEdit';
import { StoreSignIn } from './pages/store_signIn';
import { StoreRegist } from './pages/store_regist';
import { StoreRegistDetail } from './pages/store_registDetail';
import StoreMarket from './pages/store_market';

import RiderMain from './pages/rider_main';
import { RiderNewList } from './pages/rider_newList';
import { RiderDeliveryStatus } from './pages/rider_deliveryStatus';
import { RiderSignIn } from './pages/rider_signIn';
import { RiderRegist } from './pages/rider_regist';
import { RiderRegistDetail } from './pages/rider_registDetail';
import RiderMarket from './pages/rider_market';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollRef.current.scrollTop;
      setScrollPosition(currentScrollY);
      // console.log('Current scroll position:', currentScrollY);
    };
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className='min-h-screen flex justify-center items-center noDrag'>
          <div
            className='bg-white border-2 rounded-2xl border-black w-screen h-screen max-w-screen-width max-h-[844px] mx-auto overflow-y-auto text-black'
            ref={scrollRef}>
            <Header />
            <BtnNav scrollPosition={scrollPosition} />
            <Routes>
              <Route path='/' element={<LoginSelect />} />

              <Route path='/customer/signin' element={<CustomerSignIn />} />
              <Route path='/customer/regist' element={<CustomerRegist />} />
              <Route path='/customer/regist/detail' element={<CustomerRegistDetail />} />
              <Route path='/customer/main' element={<CustomerMain />} />
              <Route path='/customer/viewmenu' element={<CustomerViewMenu />} />
              <Route path='/customer/selectmenu' element={<CustomerSelectMenu />} />
              <Route path='/customer/payment' element={<CustomerPayment />} />
              <Route path='/customer/ordercomplete' element={<CustomerOrderComplete />} />

              <Route path='/store/signin' element={<StoreSignIn />} />
              <Route path='/store/regist' element={<StoreRegist />} />
              <Route path='/store/regist/detail' element={<StoreRegistDetail />} />
              <Route path='/store/main' element={<StoreMain />} />
              <Route path='/store/newlist' element={<StoreNewList />} />
              <Route path='/store/mylist' element={<StoreMyList />} />
              <Route path='/store/edit' element={<StoreMenu />} />
              <Route path='/store/edit/menu' element={<StoreMenuEdit />} />
              <Route path='/store/nftmarket' element={<StoreMarket />} />

              <Route path='/rider/signin' element={<RiderSignIn />} />
              <Route path='/rider/regist' element={<RiderRegist />} />
              <Route path='/rider/regist/detail' element={<RiderRegistDetail />} />
              <Route path='/rider/main' element={<RiderMain />} />
              <Route path='/rider/delivery' element={<RiderDeliveryStatus />} />
              <Route path='/rider/newlist' element={<RiderNewList />} />
              <Route path='/rider/nftmarket' element={<RiderMarket />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
