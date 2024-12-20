import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { RiLoginCircleFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";

function Footer({ isLoggedIn }) {
   const navigate = useNavigate();

   const registerClick = () => {
      navigate('/patientregister');
   };

   const loginClick = () => {
      navigate('/choose');
   };

   return (
      <footer className="footer">
         <div className="nav-icons">
            {isLoggedIn ? (
               <>
                  <div onClick={() => navigate('/patient')} style={{ cursor: 'pointer' }}>
                     {/* Assuming there's an icon for patient page */}
                     <CiUser title="patient" />
                  </div>
                  <div onClick={() => navigate('/calendar')} style={{ cursor: 'pointer' }}>
                     <IoIosInformationCircle title="calendar" />
                  </div>
                  <div onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                     <IoIosInformationCircle title="profile" />
                  </div>
                  <div onClick={() => navigate('/notifications')} style={{ cursor: 'pointer' }}>
                     <IoIosInformationCircle title="notifications" />
                  </div>
               </>
            ) : (
               <>
                  <div onClick={registerClick} style={{ cursor: 'pointer' }}>
                     <RiLoginCircleFill title="register" />
                  </div>
                  <div onClick={loginClick} style={{ cursor: 'pointer' }}>
                     <CiUser title="login" />
                  </div>
                  <div onClick={() => navigate('/about')} style={{ cursor: 'pointer' }}>
                     <IoIosInformationCircle title="about" />
                  </div>
               </>
            )}
         </div>
      </footer>
   );
}

export default Footer;
