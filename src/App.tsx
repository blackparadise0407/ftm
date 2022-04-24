import { Route, Routes } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';
import {
  GuideDetailPage,
  GuideListPage,
  LandingPage,
  ThemeListPage,
  TourDetailPage,
  TourListPage,
} from 'views';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/tours" element={<TourListPage />} />
        <Route path="/tours/:id" element={<TourDetailPage />} />
        <Route path="/guides/" element={<GuideListPage />} />
        <Route path="/guides/:id" element={<GuideDetailPage />} />
        <Route path="/themes" element={<ThemeListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
