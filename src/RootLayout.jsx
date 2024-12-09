import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/header/Header';

function RootLayout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Header />}
      <div style={{ minHeight: "100vh" }} className="layout">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
