import React, { useState, useContext } from "react";
import Popup from "./Popup";
import styles from "../css/components/PatientPopup.module.css";
import { Button, TextField } from "@mui/material";
import instance from "../config/axios.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ContextProvider } from "../config/Context";

const PatientPopup = ({ state }) => {
  const { pt } = useContext(ContextProvider);
  const [patientData, setPatientData] = pt;
  const { popup, setPopup } = state;
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const close = () => {
    setPopup({ ...popup, patient: !popup.patient });
  };

  const login = async () => {
    try {
      const res = await instance.post("/patient/login", {
        p_mid: id,
        p_password: pass,
      });
      if (res.status == 200) {
        toast.success("Login Successfull");
        console.log(res.data);
        setPatientData(res.data.data);
        localStorage.setItem("ptoken", res.data.data.p_mid);
        return navigate(`/app/patient/${res.data.data.p_mid}`, {
          from: "patient",
        });
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Popup
        close={close}
        title="Patient Login"
        style={{ width: "min(500px,90%)" }}
      >
        <div className={styles.login_con}>
          <TextField
            label={"Medical Id"}
            fullWidth
            onChange={(value) => {
              setId(value.target.value);
            }}
          />
          <TextField
            label={"Password"}
            fullwidth
            onChange={(value) => {
              setPass(value.target.value);
            }}
          />
          <div className={styles.btn_con}>
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#f44336",
              }}
              size="large"
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={login}
            >
              Login
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PatientPopup;
