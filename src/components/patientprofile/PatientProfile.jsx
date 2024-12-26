import React from 'react'
import './PatientProfile.css'
import { FaUser,  FaCalendarAlt, FaMars, FaFileUpload } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiSettingsLine } from "react-icons/ri";
import { MdMedicalServices } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { CiMobile1} from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
/*const UserProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    reports: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };*/

function PatientProfile() {
  return (
    <div>
       <div className="profile-container">
      <div className="profile-box">
        <div className="profile-header" >
          <div className="profile-header-1">
        <IoChevronBackOutline className='icon' />
          <h6 >Your Profile</h6>
          </div>

          <RiSettingsLine className='icon icon1' />
         
        </div>

         {/* Profile Photo Upload */}
         <div className='profile-user'>
         <div className="profile-photo">
            <label htmlFor="profile-photo">
              <img src="https://via.placeholder.com/100" alt="Profile" className="profile-photo-img" />
            </label>
            <input type="file" id="profile-photo" className="profile-photo-input" />
          </div>  
          <button className="edit-button ">Edit Profile</button>
          </div>

        <div className="profile-field">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Enter your name"
            className="line-input"
          />
        </div>
        <div className="profile-field">
          <CiMobile1 className="icon" />
          <input
            type="text"
            placeholder="Enter your phone number"
            className="line-input"
          />
        </div>
        <div className="profile-field">
          <HiOutlineMail className="icon" />
          <input
            type="email"
            placeholder="Enter your email"
            className="line-input"
          />
        </div>
        <div className="profile-field">
          <FaCalendarAlt className="icon" />
          <input
            type="number"
            placeholder="Enter your age"
            className="line-input"
          />
        </div>
        <div className="profile-field">
          <FaMars className="icon " />
          <select
            className="line-input"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="button-group">
          <MdMedicalServices className="icon"/>
          <button className="button consultation">Consultation</button>
          <button className="button follow-up">Follow-up</button>
        </div>
        <div className="profile-field">
          <FaFileUpload className="icon" />
          <input
            type="file"
            className="line-input"
          />
        </div>
        <div className="profile-field">
          < FiHome  className="icon" />
          <input
            type="text"
            placeholder="Enter your address"
            className="line-input"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default PatientProfile