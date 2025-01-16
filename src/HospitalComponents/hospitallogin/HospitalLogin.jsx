import React, { useContext, useEffect } from "react";
import "./HospitalLogin.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { hospitalLoginContext } from "../../Contexts/hospitalLoginContext";

function HospitalLogin() {
  const { hospitalLoginStatus, hospitalLogin, err } = useContext(hospitalLoginContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onHospitalLogin = (hospitalCred) => {
    hospitalLogin(hospitalCred);
  };

  useEffect(() => {
    if (hospitalLoginStatus) {
      navigate("/location");
    }
  }, [hospitalLoginStatus, navigate]);

  return (
    <div className="hloginform">
      <div className="text-center">
        <h3 className="hlogin mb-4">Login into your Account</h3>

        {err && <p className="text-danger mt-3 text-center">{err}</p>}

        <form
          className="hloginform p-4 mt-5 border rounded"
          onSubmit={handleSubmit(onHospitalLogin)}
        >
          <div className="mb-3">
            <label htmlFor="username" className="hlabel form-label">Hospital ID</label>
            <input
              type="text"
              id="username"
              className="form-control"
              {...register("username", { required: "*Hospital ID is required" })}
            />
            {errors.username && <p className="text-danger lead">{errors.username.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              {...register("password", { required: "*Password is required" })}
            />
            {errors.password && <p className="text-danger lead">{errors.password.message}</p>}
          </div>
          <button className="btn1 btn px-5 text-center text-white" type="submit">Signin</button>
          <h6 className="mt-3">
            Don't have an account? <Link to="/hospitalregister">Register</Link>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default HospitalLogin;
