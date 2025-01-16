import React, { useEffect, useState, useContext } from 'react';
import { patientLoginContext } from '../../Contexts/patientLoginContext'; 
import './PatientProfile.css';
import { data } from 'react-router-dom';

function PatientProfile() {
  const { currentPatient } = useContext(patientLoginContext); 
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (currentPatient?.username) {
          const res = await fetch(
            `http://localhost:3000/clients?username=${currentPatient.username}`
          );
          const data = await res.json();
          setUserData(data[0] || {}); 
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [currentPatient]);
  
  if (!currentPatient) {
    return <p>Please log in to view your profile.</p>;
  }

  if (!userData) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-header">{userData.username || "User's Profile"}</h2>
      
      <div className="profile-section">
        <label>Name</label>
        <p>{userData.username || 'Add Name'}</p>
      </div>
      <div className="profile-section">
        <label>Contact Number</label>
        <p>{userData.mobile || 'Add Contact Number'}</p>
      </div>
      <div className="profile-section">
        <label>Email ID</label>
        <p>{userData.email || 'Add Email'}</p>
      </div>
      <div className="profile-section">
        <label>Gender</label>
        <p>{userData.gender || 'Add Gender'}</p>
      </div>
      <div className="profile-section">
        <label>Date of Birth</label>
        <p>{userData.dob || 'YYYY-MM-DD'}</p>
      </div>
      <div className="profile-section">
        <label>Blood Group</label>
        <p>{userData.bloodGroup || 'Add Blood Group'}</p>
      </div>
      <div className="profile-section">
        <label>Height</label>
        <p>{userData.height || 'Add Height'}</p>
      </div>
      <div className="profile-section">
        <label>Weight</label>
        <p>{userData.weight || 'Add Weight'}</p>
      </div>
      <div className="profile-section">
        <label>Emergency Contact</label>
        <p>{userData.emergencyContact || 'Add Emergency Details'}</p>
      </div>
      <div className="profile-section">
        <label>Location</label>
        <p>{userData.location || 'Add Location'}</p>
      </div>
    </div>
  );
}
const calculateCompletion = (data) => {
  const totalFields = 10; 
  const completedFields = Object.values(data).filter(value => value).length;
  return Math.floor((completedFields / totalFields) * 100);
};

export default PatientProfile;
