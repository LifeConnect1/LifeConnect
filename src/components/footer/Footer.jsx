import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

function Footer() {
   const navigate = useNavigate();

   return (
      <footer className="footer">
         <div className="nav-icons">
            <div onClick={() => navigate('/patient-portal')} style={{ cursor: 'pointer' }}>
               <IoHomeOutline title="Home" />
            </div>
            <div onClick={() => navigate('/calendar')} style={{ cursor: 'pointer' }}>
               <SlCalender title="Calendar" />
            </div>
            <div onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}>
               <TiMessages title="Notifications" />
            </div>
            <div onClick={() => navigate('/patientprofile')} style={{ cursor: 'pointer' }}>
               <FaRegUser title="Profile" />
            </div>
         </div>
      </footer>
   );
}

export default Footer;
