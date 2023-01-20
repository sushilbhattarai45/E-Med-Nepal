import React from 'react'
import Popup from './Popup';
import styles from "../css/components/DoctorPopup.module.css"
import { Button, TextField } from '@mui/material';

const DoctorPopup = ({state}) => {
    const {popup,setPopup} = state;
    const close = () => {
        setPopup({...popup,doctor:!popup.doctor})
    }
  return (
    <>
      <Popup
        close={close}
        title="Doctor Login"
        style={{ width: "min(500px,90%)" }}
      >
        <div className={styles.login_con}>
          <TextField label={"Hospital Id"} fullWidth />
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
}

export default DoctorPopup;