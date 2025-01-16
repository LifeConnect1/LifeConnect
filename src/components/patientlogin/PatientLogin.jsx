import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import'./PatientLogin.css'
import { useNavigate } from 'react-router-dom'
import { patientLoginContext } from '../../Contexts/PatientLoginContext'
import { useContext } from 'react'
import { useEffect } from 'react'

function PatientLogin() {
  let {clientLoginStatus,clientLogin, clientLogout,err} = useContext(patientLoginContext);
  let {register, handleSubmit, formState:{errors}} = useForm();
  const navigate = useNavigate()

  function onClientLogin(clientCred){
    console.log(clientCred);
    clientLogin(clientCred);
  }

  useEffect(()=>{
    if(clientLoginStatus === true)
    {
      navigate('/location')
    }
  },[clientLoginStatus])




  return (
    <div className="loginform">
      <div className="text-center">
        <h3 className="h3login mb-4">Login into your Account</h3>

          {
            err.length != 0 && <p className='text-danger mt-3 text-center'>{err}</p>
          }


        <form className="loginform p-4 mt-5 border rounded" onSubmit={handleSubmit(onClientLogin)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">UserName</label>
            <input type="text" id="username" className="form-control" {...register("username", {required: true})}  />
             {errors.username?.type === 'required' && <p className='text-danger lead'>*Username is required</p>} 
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" {...register("password", {required:true})}/>
            {errors.password?.type === 'required' && <p className='text-danger lead'>*Password is required</p>} 
          </div>
          <button className="btn2 btn px-5 text-center text-white " type="submit">Signin</button>
          <h6 className="mt-3">Don't have an account? <Link to="/patientregister">Register</Link></h6>
        </form>
      </div>
    </div>
  );
}

export default PatientLogin