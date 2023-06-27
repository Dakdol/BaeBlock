import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { StoreNewList } from './pages/store_newList';
import { StoreMyList } from './pages/store_myList';
import { RiderNewList } from './pages/rider_newList';
import { RiderDeliveryStatus } from './pages/rider_deliveryStatus';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-grayTone-white border-2 border-grayTone-black max-w-screen-md max-h-[844px] h-screen m-auto overflow-y-auto pt-[44px] flex flex-col'>
        <Routes>
          <Route path='/store/newlist' element={<StoreNewList />} />
          <Route path='/store/mylist' element={<StoreMyList />} />
          <Route path='/rider/delivery' element={<RiderDeliveryStatus />} />
          <Route path='/rider/newlist' element={<RiderNewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
