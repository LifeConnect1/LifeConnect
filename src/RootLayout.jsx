import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function RootLayout() {
  const location = useLocation();
  const hideFooterPaths = ['/patientlogin', '/patientregister', '/'];

  return (
    <div>
      <Header />
      <div className="layout">
        <Outlet />
      </div>
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default RootLayout;
