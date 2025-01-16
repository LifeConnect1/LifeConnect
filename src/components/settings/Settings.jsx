import React, { useContext, useState } from 'react';
import './Settings.css';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; 
import { patientLoginContext } from '../../Contexts/PatientLoginContext';

function Settings() {
  const navigate = useNavigate();
  const { clientLogout } = useContext(patientLoginContext); 
  const [showModal, setShowModal] = useState(false); 

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleLogoutConfirm = () => {
    clientLogout(); 
    navigate('/'); 
  };

  const handleLogoutCancel = () => {
    setShowModal(false); 
  };

  return (
   
     <div className="setting" >
        <div className={showModal ? "content blur" : "content"}>
      <div className="settings-option" onClick={() => navigate('/Aboutus')}>
        <span>About Us</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      <div className="settings-option" onClick={() => navigate('/Faq')}>
        <span>FAQ</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      {/* <div className="settings-option" onClick={() => navigate('/change-language')}>
        <span>Change Language</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div> */}
      <div className="settings-option" onClick={() => navigate('/Contactus')}>
        <span>Contact Us</span>
        <MdOutlineKeyboardArrowRight className="go-to-icon" />
      </div>
      <div className="logout text-danger" onClick={handleLogoutClick}>
        <span>Logout</span>
      </div>
      </div>

      {showModal && (
  <div className="logout-modal">
    <div className="modal-content">
      <div className="modal-body">
        <p>Are you sure you want to logout?</p>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger confirm-button"
          onClick={handleLogoutConfirm} 
        >
          Logout
        </button>
        <button
          type="button"
          className="btn btn-secondary cancel-button"
          onClick={handleLogoutCancel} 
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Settings;