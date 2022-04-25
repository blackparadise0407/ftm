import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from 'layouts/MainLayout';
import {
  GuideDetailPage,
  GuideListPage,
  LandingPage,
  MyTourPage,
  NotFoundPage,
  OverviewPage,
  ProfilePage,
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
        <Route path="/profile/:id" element={<ProfilePage />}>
          <Route index element={<Navigate to="overview" />} />
          <Route path="/profile/:id/overview" element={<OverviewPage />} />
          <Route path="/profile/:id/mytour" element={<MyTourPage />} />
          <Route path="/profile/:id/reviews" element={<div>reviews</div>} />
          <Route path="/profile/:id/following" element={<div>following</div>} />
          <Route path="/profile/:id/snaps" element={<div>snaps</div>} />
          <Route path="/profile/:id/settings" element={<div>settings</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
