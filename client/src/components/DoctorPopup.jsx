import React, { useState, useContext } from "react";
import Popup from "./Popup";
import styles from "../css/components/DoctorPopup.module.css";
import { Button, TextField } from "@mui/material";
import instance from "../config/axios.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../config/Context";

const DoctorPopup = ({ state }) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const { hp } = useContext(ContextProvider);
  const [hospitalData, setHospitalData] = hp;
  const navigate = useNavigate();
  const { popup, setPopup } = state;
  const close = () => {
    setPopup({ ...popup, doctor: !popup.doctor });
  };
  const login = async () => {
    console.log(id, pass);
    const res = await instance.post("/hospital/login", {
      hm_hid: id,
      hm_password: pass,
    });
    if (res.status === 200) {
      console.log(res.data);
      localStorage.setItem("htoken", res.data.data.hm_hid);
      setHospitalData(res.data.data);
      toast.success("Login Successfull");
      return navigate("/app");
    }
    toast.error("Something went wrong");
  };

  return (
    <>
      <Popup
        close={close}
        title="Hospital Login"
        style={{ width: "min(500px,90%)" }}
      >
        <div className={styles.login_con}>
          <TextField
            label={"Hospital Id"}
            fullWidth
            onChange={(e) => {
              setId(e.target.value);
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

export default DoctorPopup;
