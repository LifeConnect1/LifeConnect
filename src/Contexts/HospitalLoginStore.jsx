import React, { Children } from "react";
import { useState } from "react";
import { hospitalLoginContext } from "./hospitalLoginContext";

function HospitalLoginStore({children}){

    

    return(
        <hospitalLoginContext.Provider
        
        >
            {children}
        </hospitalLoginContext.Provider>
    )
}