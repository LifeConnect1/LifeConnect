import React from 'react';
import './Header.css';
import { FaUser, FaSignInAlt, FaInfoCircle } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="" alt="Logo" /> {/* Replace src with the path to your logo */}
      </div>
      <div className="nav-icons d-flex">
        <div>
        <a href="/register"><FaSignInAlt title="Register" /></a>
        </div>
        <div>
        <a href="/login"><FaUser title="Login" /></a>
        </div>
        <div>
        <a href="/about"><FaInfoCircle title="About" /></a>

        </div>
      </div>
    </header>
  );
}

export default Header;
