import React from 'react'
import './PatientPortal.css'
import { useLocation } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

function PatientPortal() {
    const location = useLocation();
    const {place} = location.state || {};
  return (
    <div>
         <div className="search-bar">
              <input
                type="text"
                // value={value}
                // onChange={onChange}
                placeholder="Search Hospitals, Doctors, Specialities"
                className="search-input"
              />
              <button  className="search-button" >
                Let's go
              </button>
            </div>
        <div className="advt">
            <h1 className='name'>Advertisements</h1>
        </div>
        <div className="hospitals">
            <div className="section1">
               <div className="heading1">
                 <h6>Hospital Speciality</h6>
               </div>
               <div className="listing">
                <p>View all <IoIosArrowForward /> </p>
               </div>
            </div>
            <div className="section2">
                <img src="https://cdn1.iconfinder.com/data/icons/entrails/500/Organ_liver-256.png" alt="" className="img1" />
                <img src="https://cdn1.iconfinder.com/data/icons/medical-health-care-flat/33/cardiology-256.png" alt="" className="img2" />
                <img src="https://cdn1.iconfinder.com/data/icons/medical-specialties-2-3/256/Dermatology-256.png" alt="" className="img3" />
                <img src="https://cdn1.iconfinder.com/data/icons/medical-specialties-1-3/380/Gynecology-512.png" alt="" className="img4" />
                <img src="https://cdn2.iconfinder.com/data/icons/human-body-anatomy-1/32/tooth_dentistry-18-512.png" alt="" className="img5" />
                <img src="https://cdn3.iconfinder.com/data/icons/miscellaneous-521-color-shadow/128/brain_cerebrum_mental_intellectual_organ_psychology_neurology_memory_mind_brainstorm-512.png" alt="" className="img6" />
                <img src="https://cdn0.iconfinder.com/data/icons/orthopedic-1/66/26-512.png" alt="" className="img7" />
                <img src="https://cdn1.iconfinder.com/data/icons/medical-specialties-1-3/380/Urology-256.png" alt="" className="img8" />
            </div>
        </div>
    </div>
  )
}

export default PatientPortal