import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";

function Header() {
   const navigate = useNavigate();
  
   const registerclick = () => {
      navigate('/patientregister');
   };
  
   const loginclick = () => {
      navigate('/choose');
   };
  
  return (
    <header className="header">
      <div className="logo">
        <img src="https://lifeconnect.lu/wp-content/uploads/2023/04/lifeconnect_logo_no-text.jpg"  alt="Logo" /> 
      </div>
      <div className="nav-icons d-flex rt-icons">
        <div onClick={registerclick} style={{ cursor: 'pointer' }}>
          <RiLoginCircleFill title='register' />
        </div>
        <div onClick={loginclick} style={{ cursor: 'pointer' }}>
          <CiUser title='login' />
        </div>
        <div onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
          <IoIosInformationCircle title='about' />
        </div>
      </div>
    </header>
  );
}

export default Header;
