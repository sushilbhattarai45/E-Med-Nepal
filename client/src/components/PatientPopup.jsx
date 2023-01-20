import React from "react";
import Popup from "./Popup";
import styles from "../css/components/PatientPopup.module.css";
import { Button, TextField } from "@mui/material";
import instance from "../config/axios.js";

const PatientPopup = ({ state }) => {
  const { popup, setPopup } = state;

  const close = () => {
    setPopup({ ...popup, patient: !popup.patient });
  };

  return (
    <>
      <Popup
        close={close}
        title="Patient Login"
        style={{ width: "min(500px,90%)" }}
      >
        <div className={styles.login_con}>
          <TextField label={"Medical Id"} fullWidth />
          <TextField label={"Password"} fullwidth />
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
            <Button variant="contained" color="primary" fullWidth size="large">
              Login
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PatientPopup;
