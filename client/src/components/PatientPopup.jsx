import React from "react";
import Popup from "./Popup";
import styles from "../css/components/PatientPopup.module.css";
import { Button, TextField } from "@mui/material";
import instance from "../config/axios.js";

const PatientPopup = ({ state }) => {
  const { popup, setPopup } = state;
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const close = () => {
    setPopup({ ...popup, patient: !popup.patient });
  };

  const login = async () => {
    const login = await instance.post("/patient/login", {
      p_mid: id,
      p_password: pass,
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
