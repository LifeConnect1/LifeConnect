import React from 'react';
import './Settings.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // To handle navigation

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="setting">
      <div className="settings-option" onClick={() => navigate('/about-us')}>
        <span>About Us</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      <div className="settings-option" onClick={() => navigate('/faq')}>
        <span>FAQ</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      <div className="settings-option" onClick={() => navigate('/change-language')}>
        <span>Change Language</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      <div className="settings-option" onClick={() => navigate('/contact-us')}>
        <span>Contact Us</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      <div className="logout text-danger" onClick={() => navigate('/choose')}>
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Settings;
