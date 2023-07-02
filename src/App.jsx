import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import StoreMain from './pages/store_main';
import StoreMenu from './pages/store_menu';
import { StoreNewList } from './pages/store_newList';
import { StoreMyList } from './pages/store_myList';
import RiderMain from './pages/rider_main';
import { RiderNewList } from './pages/rider_newList';
import { RiderDeliveryStatus } from './pages/rider_deliveryStatus';
import CustomerViewMenu from './pages/customer_viewMenu';
import StoreMenuEdit from './pages/store_menuEdit';
import CustomerOrderComplete from './pages/customer_orderComplete';
import { Header } from './components/Header';
import CustomerSelectMenu from './pages/customer_selectMenu';
import BtnNav from './components/BtnNav';
import LoginSelect from './pages/login_select';
import { CustomerSignIn } from './pages/customer_signIn';
import { StoreSignIn } from './pages/store_signIn';
import { RiderSignIn } from './pages/rider_signIn';
import { StoreRegist } from './pages/store_regist';
import { CustomerRegist } from './pages/customer_regist';
import { RiderRegist } from './pages/rider_regist';
import { StoreRegistDetail } from './pages/store_registDetail';
import { CustomerRegistDetail } from './pages/customer_registDetail';
import { RiderRegistDetail } from './pages/rider_registDetail';
import { CustomerMain } from './pages/customer_main';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-white border-2 rounded-2xl border-black w-screen max-w-screen-md max-h-[844px] h-screen mx-auto overflow-y-auto text-black tracking-tighter'>
          <Header />
          <BtnNav />
          <Routes>
            <Route path='/' element={<LoginSelect />} />

            <Route path='/customer/signin' element={<CustomerSignIn />} />
            <Route path='/customer/regist' element={<CustomerRegist />} />
            <Route path='/customer/regist/detail' element={<CustomerRegistDetail />} />
            <Route path='/customer/main' element={<CustomerMain />} />
            <Route path='/customer/viewmenu' element={<CustomerViewMenu />} />
            <Route path='/customer/selectmenu' element={<CustomerSelectMenu />} />
            <Route path='/customer/ordercomplete' element={<CustomerOrderComplete />} />

            <Route path='/store/signin' element={<StoreSignIn />} />
            <Route path='/store/regist' element={<StoreRegist />} />
            <Route path='/store/regist/detail' element={<StoreRegistDetail />} />
            <Route path='/store/main' element={<StoreMain />} />
            <Route path='/store/newlist' element={<StoreNewList />} />
            <Route path='/store/mylist' element={<StoreMyList />} />
            <Route path='/store/edit' element={<StoreMenu />} />
            <Route path='/store/edit/menu' element={<StoreMenuEdit />} />

            <Route path='/rider/signin' element={<RiderSignIn />} />
            <Route path='/rider/regist' element={<RiderRegist />} />
            <Route path='/rider/regist/detail' element={<RiderRegistDetail />} />
            <Route path='/rider/main' element={<RiderMain />} />
            <Route path='/rider/delivery' element={<RiderDeliveryStatus />} />
            <Route path='/rider/newlist' element={<RiderNewList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
