import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import './Header.css';

function Header() {
   const navigate = useNavigate();
   const location = useLocation();

   const goBack = () => {
      navigate(-1);
   };

   const openSettings = () => {
      navigate('/settings'); // Navigate to the settings page
   };

   return (
      <header className="header ">
         {location.pathname === '/' ? (
            // Display logo only on the main homepage
            <div className="logo">
               <img src="https://lifeconnect.lu/wp-content/uploads/2023/04/lifeconnect_logo_no-text.jpg" alt="Logo" />
            </div>
         ) : (
            // Display Go Back and Settings icons on other pages
            <div className="header-nav">
               <div className="go-back" onClick={goBack} style={{ cursor: 'pointer' }}>
                  <IoIosArrowBack title="Go Back" />
               </div>
               <div className="settings" onClick={openSettings} style={{ cursor: 'pointer' }}>
                  <FiSettings title="Settings" />
               </div>
            </div>
         )}
      </header>
   );
}

export default Header;
