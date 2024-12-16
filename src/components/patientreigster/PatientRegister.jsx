import React from 'react'
import './patientregister.css'
function PatientRegister() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
    <div className="text-center">
      
    <form className='p-4 border '>
    <h3 className='h3log'>Let us know more about you</h3>
       <div className='mb-3'>
        <label htmlFor="fullname text-algin-left" className="form-label">FullName</label>
        <input type="text" id="fulname" className="form-control" {...{required:true}}/>
       </div>

       <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email"  id="email" className="form-control" {...{required:true}}/>
       </div>

       <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="tel" id="number"  className="form-control" minlength="10" maxlength="10" {...{required:true}}/>
       </div>
  
       <div className="mb-3">
        <label htmlFor="age" className="form-label">Age </label>
        <input type="number" id="age"  className="form-control" {...{required:true}}/>
       </div>
 
       <div className="mb-5">
        <label htmlFor="gender" className='form-label'>Gender</label>
        <select id='gender' className='form-control' {...{ required: true }}>
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
        </select>
       </div>

<button type="button" className="btn btn2">Connect your Life with Us!</button>
    </form>
    </div>
  </div>
)
}



export default PatientRegister
