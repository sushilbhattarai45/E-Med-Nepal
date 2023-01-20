import React, { createContext, useEffect } from "react";
import axios from "../config/axios.js"
export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [hospitalData, setHospitalData] = React.useState({});
  const [patientData, setPatientData] = React.useState({});
  const ptoken = localStorage.getItem("ptoken");
  useEffect(() => {
    getPatientData();
  }, [ptoken])
  
  const getPatientData = async () => {
    const data = await axios.post("/patient/getonepatient", {
      p_mid: ptoken,
    });
    setPatientData(data.data.data[0]);
  };
  return (
    <ContextProvider.Provider
      value={{
        hp: [hospitalData, setHospitalData],
        pt: [patientData, setPatientData],
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
