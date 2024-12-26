import React from "react";
import { useNavigate } from "react-router-dom";
import "./Location.css";

function Location() {
  let places = [
    "Vijayawada",
    "Guntur",
    "Visakhapatnam",
    "Vizianagaram",
    "Kakinada",
    "Rajahmundry",
  ];

  const navigate = useNavigate();

  const handleCardClick = (place) => {
    console.log(place)
    navigate('/patient-portal')
  };

  return (
    <div>
      <div className="heading">
        <p className="title1">Select Your</p>
        <p className="title2">Location</p>
      </div>
      <div className="cards-container">
        {places.map((place, index) => (
          <div
            key={index}
            className='card'
            onClick={() => handleCardClick(place)}
          >
            <div className="card-body">
              <h5>{place}</h5>
              <p>View all doctors</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Location;