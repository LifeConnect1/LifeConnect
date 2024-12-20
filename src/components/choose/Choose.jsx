import React from 'react';
import './Choose.css';
import { useNavigate } from 'react-router-dom';

function Choose() {
  const navigate = useNavigate();

  const handlePatientClick = () => {
    navigate('/patientlogin');
  };

  const handleDoctorClick = () => {
    navigate('/hospitallogin');
  };

  return (
    <div className="first">
      <div className='second p-5 rounded'>
        {/* Profile Picture */}
        <div className="profile-pic text-center">
          <img
            src="https://static-00.iconduck.com/assets.00/profile-circle-icon-1024x1022-cc95v9e3.png"
            alt="Profile" 
          />
        </div>

        {/* Choose Your Profile */}
        <h2 className="choose-text">Choose Your Profile</h2>

        {/* Buttons */}
        <div className="buttons">
          <button className="choose-btn" onClick={handlePatientClick}>
            I am a Patient
          </button>
          <button className="choose-btn" onClick={handleDoctorClick}>
            I am a Doctor
          </button>
        </div>
      </div>
    </div>
  );
}

export default Choose;
