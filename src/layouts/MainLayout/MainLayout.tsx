import { Outlet } from 'react-router-dom';
import Footer from './Footer';

import Header from './Header';

export default function MainLayout() {
  return (
    <div style={{ backgroundColor: '#e5e5e5' }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
