import { patientLoginContext } from "./patientLoginContext";
import { useState } from "react";

function PatientLoginStore({children}){
    const [currentClient,setCurrentClient] = useState(null);
    const [clientLoginStatus, setClientLoginStatus] = useState(false)
    const [err,setErr] = useState("");

    //client Login
    async function clientLogin(clientCred){
        try{
            let res = await fetch(
                `http://localhost:3000/clients?username=${clientCred.username}&password=${clientCred.password}`
            );
            let clientList= await res.json();
            console.log("clients List", clientList);

            if(clientList.length == 0){
                setCurrentClient(null);
                setClientLoginStatus(false);
                setErr("Invalid Username or Password");
            } else{
                setCurrentClient(clientList[0]);
                setClientLoginStatus(true);
                setErr("");
            }
        }
        catch(error){
            setErr(error.message);
        }
    }

    //client logout
    function clientLogout(){
        setCurrentClient(null);
        setClientLoginStatus(false);
        setErr("");
    }


    return(
        <patientLoginContext.Provider
         value={{currentClient,
            clientLoginStatus,
            err,
            clientLogin,
            clientLogout,}}
        >
            {children}
        </patientLoginContext.Provider>
    );
}

export default PatientLoginStore;