import { useState } from "react";
import { hospitalLoginContext } from "./hospitalLoginContext";

function HospitalLoginStore({ children }) {
  const [currentHospital, setCurrentHospital] = useState(null);
  const [hospitalLoginStatus, setHospitalLoginStatus] = useState(false);
  const [err, setErr] = useState("");

  // Hospital Login Function
  async function hospitalLogin(hospitalCred) {
    try {
      let res = await fetch(
        `http://localhost:3000/hospitalMgmt?username=${hospitalCred.username}&password=${hospitalCred.password}`
      );
      let hospitalList = await res.json();

      if (hospitalList.length === 0) {
        setCurrentHospital(null);
        setHospitalLoginStatus(false);
        setErr("Invalid Username or Password");
      } else {
        setCurrentHospital(hospitalList[0]);
        setHospitalLoginStatus(true);
        setErr("");
      }
    } catch (error) {
      setErr("Something went wrong. Please try again later.");
    }
  }

  // Hospital Logout Function
  function hospitalLogout() {
    setCurrentHospital(null);
    setHospitalLoginStatus(false);
    setErr("");
  }

  return (
    <hospitalLoginContext.Provider
      value={{
        currentHospital,
        hospitalLoginStatus,
        err,
        hospitalLogin,
        hospitalLogout,
      }}
    >
      {children}
    </hospitalLoginContext.Provider>
  );
}

export default HospitalLoginStore;
