import React from 'react'
import './PatientPortal.css'
import { useLocation } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import Slider from 'react-slick';

function PatientPortal() {
    const location = useLocation();
    const {place} = location.state || {};
    const settings = {
      dots: true, // Adds dots navigation
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 1, // Show one image at a time
      slidesToScroll: 1, // Scroll one image at a time
      autoplay: true, // Auto play enabled
      autoplaySpeed: 5000, // Auto play speed in milliseconds
    };
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
              <GrFormNextLink />
              </button>
            </div>
        <div className="advt">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src="https://quotefancy.com/media/wallpaper/3840x2160/2245689-Jonathan-Swift-Quote-The-best-doctors-in-the-world-are-Doctor-Diet.jpg" alt="ad1" />
          </div>
          <div className="carousel-item">
            <img src="https://i1.wp.com/www.uniquenewsonline.com/wp-content/uploads/2020/07/National-Doctors-Day-2020-Quotes-With-HD-Images-Thoughtful-Sayings.jpg?fit=1200%2C667&ssl=1&is-pending-load=1" alt="ad2" />
          </div>
          <div className="carousel-item">
            <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2020/06/30/Pictures/_c1f2d8e2-baa7-11ea-b411-fb55c265b659.jpg" alt="ad3" />
          </div>          
        </Slider>
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
                <div className="ic1">
                <img src="https://cdn1.iconfinder.com/data/icons/entrails/500/Organ_liver-256.png" alt="" className="img1" />
                <h6 className='spec'>Hepatology</h6>
                </div>
               <div className="ic2">
               <img src="https://cdn1.iconfinder.com/data/icons/medical-health-care-flat/33/cardiology-256.png" alt="" className="img2" />
               <h6 className='spec'>Cardiology</h6>
               </div>
               <div className="ic3">
               <img src="https://cdn1.iconfinder.com/data/icons/medical-specialties-2-3/256/Dermatology-256.png" alt="" className="img3" />
               <h6 className='spec'>Dermatology</h6>
               </div>
               <div className="ic4">
               <img src="https://cdn1.iconfinder.com/data/icons/medical-specialties-1-3/380/Gynecology-512.png" alt="" className="img4" />
               <h6 className='spec'>Gynaecology</h6>
               </div>
               <div className="ic5">
               <img src="https://cdn2.iconfinder.com/data/icons/human-body-anatomy-1/32/tooth_dentistry-18-512.png" alt="" className="img5" />
               <h6 className='spec'>Dentistry</h6>
               </div>        
              <div className="ic6">
              <img src="https://cdn3.iconfinder.com/data/icons/miscellaneous-521-color-shadow/128/brain_cerebrum_mental_intellectual_organ_psychology_neurology_memory_mind_brainstorm-512.png" alt="" className="img6" />
                <h6 className='spec'>Neurology</h6>
              </div>  
              <div className="ic7">
              <img src="https://cdn0.iconfinder.com/data/icons/orthopedic-1/66/26-512.png" alt="" className="img7" />
              <h6 className='spec'>Orthopaedic</h6>
              </div>     
              <div className="ic8">
              <img src="https://cdn1.iconfinder.com/data/icons/medical-specialties-1-3/380/Urology-256.png" alt="" className="img8" />
              <h6 className='spec'>Urology</h6>
              </div>
            </div>
        </div>
    </div>
  )
}

export default PatientPortal