import React, { useState } from "react";
import Popup from "./Popup";
import styles from "../css/components/DoctorPopup.module.css";
import { Button, TextField } from "@mui/material";
import instance from "../config/axios.js";
import toast, { Toaster } from "react-hot-toast";

const DoctorPopup = ({ state }) => {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const { popup, setPopup } = state;
  const close = () => {
    setPopup({ ...popup, doctor: !popup.doctor });
  };
  const login = async () => {
    const login = await instance.post("/hospital/login", {
      hm_hid: id,
      hm_password: pass,
    });
    if (login.data.statuscode == 200) {
      alert("right");
    } else {
      alert("wrong");
    }
  };

  return (
    <>
      <Popup
        close={close}
        title="Doctor Login"
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
