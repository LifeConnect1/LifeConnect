import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import'./PatientLogin.css'
import { useNavigate } from 'react-router-dom'

function PatientLogin() {
  return (
    <div className="login d-flex text-center justify-content-center">
      <div className="text-center">
        <h3 className="h3login mb-4">Login into your Account</h3>
        <form className="p-4 mt-5 border rounded">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">UserName</label>
            <input type="text" id="username" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>
          <button className="btn2 btn px-5 text-center " type="submit">Signin</button>
          <h6 className="mt-3">Don't have an account? <Link to="/patientregister">Register</Link></h6>
        </form>
      </div>
    </div>
  );
}

export default PatientLogin