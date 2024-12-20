import React from 'react'
import './patientregister.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { patientLoginContext } from '../../Contexts/patientLoginContext'



function PatientRegister() {

  let {register,  handleSubmit, formState:{error}, watch} = useForm();
  let [err,setErr] = useState('');

  let navigate = useNavigate();

  async function handleFormSubmit(clientObj){
    console.log(clientObj)
    let existingClients = await fetch(`http://localhost:3000/clients?username=${clientObj.username}`)
    let existingClientsList = await existingClients.json();
    if(existingClientsList.length>0){
      setErr('Username already existed')
    }

    else{
      let res = await fetch(`http://localhost:3000/clients`, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(clientObj)
      });

      if(res.status === 201){
        navigate('/patientlogin')
      }
    }
  }


  return (
    <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
    <div className="text-center">
    {err.length !== 0 && <p className='fs-4 text-danger text-center error'>{err}</p>}
    <form className='p-4 border ' onSubmit={handleSubmit(handleFormSubmit)}>
    <h3 className='h3log'>Let us know more about you</h3>
       <div className='mb-3'>
        <label htmlFor="username" className="form-label">UserName</label>
        <input type="text" id="fulname" className="form-control" {...register("username",{required:true})} placeholder='Username'/>
       </div>

       <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email"  id="email" className="form-control" {...register("email",{required:true})} placeholder='Email'/>
       </div>

       <div className="mb-3">
                <label htmlFor="password" className='form-label'>Password</label>
                <input type="password" id='password' className='form-control' {...register("password", { required: true })} placeholder='Password' />
              </div>

       <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile Number</label>
        <input type="tel" id="number"  className="form-control" {...register("mobile", { required: true, minLength: 10, maxLength: 10 })} placeholder='Mobile number'/>
       </div>
  
       <div className="mb-3">
        <label htmlFor="age" className="form-label">Age </label>
        <input type="number" id="age"  className="form-control" {...register("age",{required:true})} placeholder='Age'/>
       </div>
 
       <div className="mb-5">
        <label htmlFor="gender" className='form-label'>Gender</label>
        <select id='gender' className='form-control' {...register("gender",{ required: true })} placeholder='Gender'>
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
        </select>
       </div>

      <button type="submit" className="btn btn2">Connect your Life with Us!</button>
    </form>
    </div>
  </div>
)
}



export default PatientRegister