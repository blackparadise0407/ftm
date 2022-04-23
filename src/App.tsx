import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';
import { LandingPage } from 'views';
import TourList from 'views/Tour/TourList';
import TourDetail from 'views/Tour/TourDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/tours/:id" element={<TourDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
