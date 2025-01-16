import React from 'react';
import './hospitalregister.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function HospitalRegister() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  let [err, setErr] = useState('');
  let navigate = useNavigate();

  async function handleFormSubmit(hospitalObj) {
    console.log(hospitalObj);

    let existingHospitals = await fetch(`http://localhost:3000/hospitalMgmt?registrationNumber=${hospitalObj.registrationNumber}`);
    let existingHospitalsList = await existingHospitals.json();

    if (existingHospitalsList.length > 0) {
      setErr('Hospital with this Registration Number already exists.');
    } else {
      let res = await fetch(`http://localhost:3000/hospitalMgmt`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(hospitalObj)
      });

      if (res.status === 201) {
        navigate('/hospitallogin');
      }
    }
  }

  return (
    <div className=''>
      <div className="hospital-form">
        {err.length !== 0 && <p className='fs-4 text-danger text-center herror'>{err}</p>}
        <form className='p-4 border w-100' onSubmit={handleSubmit(handleFormSubmit)}>
          <h3 className='hlog'>Register Your Hospital with Us</h3>

          <div className='mb-3'>
            <label htmlFor="hospitalName" className="form-label">Hospital Name</label>
            <input type="text" id="hospitalName" className="form-control" {...register("hospitalName", { required: true })} placeholder='Hospital Name' />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" {...register("email", { required: true })} placeholder='Email' />
          </div>

          <div className="mb-3">
            <label htmlFor="registrationNumber" className="form-label">Registration Number</label>
            <input type="text" id="registrationNumber" className="form-control" {...register("registrationNumber", { required: true })} placeholder='Registration Number' />
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
            <input type="tel" id="contactNumber" className="form-control" {...register("contactNumber", { required: true, minLength: 10, maxLength: 10 })} placeholder='Contact Number' />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea id="address" className="form-control" {...register("address", { required: true })} placeholder='Hospital Address'></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" className="form-control" {...register("city", { required: true })} placeholder='City' />
          </div>

          <div className="mb-3">
            <label htmlFor="state" className="form-label">State</label>
            <input type="text" id="state" className="form-control" {...register("state", { required: true })} placeholder='State' />
          </div>

          <div className="mb-3">
            <label htmlFor="zipCode" className="form-label">Zip Code</label>
            <input type="number" id="zipCode" className="form-control" {...register("zipCode", { required: true })} placeholder='Zip Code' />
          </div>

          <div className='btn3'>
          <button type="submit" className="btn text-white ">Register Your Hospital</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HospitalRegister;
