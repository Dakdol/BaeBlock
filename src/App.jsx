import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { StoreNewList } from './pages/store_newList';
import { StoreMyList } from './pages/store_myList';
import { RiderNewList } from './pages/rider_newList';
import { RiderDeliveryStatus } from './pages/rider_deliveryStatus';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-colors-white border-2 rounded-2xl border-colors-black w-screen max-w-screen-md max-h-[844px] h-screen mx-auto overflow-y-auto pt-[44px] text-colors-black'>
          <Routes>
            <Route path='/store/newlist' element={<StoreNewList />} />
            <Route path='/store/mylist' element={<StoreMyList />} />
            <Route path='/rider/delivery' element={<RiderDeliveryStatus />} />
            <Route path='/rider/newlist' element={<RiderNewList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
