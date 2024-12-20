import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function RootLayout() {
  const location = useLocation();

  // Paths where the footer should be hidden
  const hideFooterPaths = ['/login', '/register'];

  return (
    <div>
      <Header />
      <div style={{ minHeight: "150vh" }} className="layout">
        <Outlet />
      </div>
      {/* Conditionally render the Footer */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default RootLayout;
