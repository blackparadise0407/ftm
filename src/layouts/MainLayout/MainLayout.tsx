import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import './styles.scss';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
