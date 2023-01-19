import React from "react";
import Popup from "./Popup";
import { TextField, MenuItem, Button } from "@mui/material";
import styles from "../css/components/AddoctorPopup.module.css";
import { AiFillCamera } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import {MdCancel} from "react-icons/md"

const AddoctorPopup = ({ state }) => {
  const { popup, setPopup } = state;
  const [pic, setPic] = React.useState("");
  const close = () => {
    setPopup(!popup);
  };
  const gender = [
    {
      value: "male",
      label: "Male",
    },
    {
      value: "female",
      label: "Female",
    },
  ];

  const getImg = (e) => {
    const [file] = e.target.files;
    setPic(URL.createObjectURL(file));
  };
  return (
    <>
      <Popup
        title="Add doctor"
        close={close}
        style={{ width: "min(500px,90%)" }}
      >
        <div className={styles.add_con}>
          <label htmlFor="upload-photo">
            {pic ? (
              <div className={styles.img_con}>
                <img src={pic} alt="doctor_pic" className={styles.img} />
                <span onClick={() =>setPic("")}><MdCancel/></span>
              </div>
            ) : (
              <Button
                variant="contained"
                component="label"
                startIcon={<AiFillCamera />}
              >
                Upload Photo
                <input hidden accept="image/*" type="file" onChange={getImg} />
              </Button>
            )}
          </label>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            fullWidth
            type="number"
          />
          <TextField
            id="outlined-basic"
            label="Specialization"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            fullWidth
            select
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" endIcon={<BsArrowUpRight />} size="large">
            Add Doctor
          </Button>
        </div>
      </Popup>
    </>
  );
};

export default AddoctorPopup;
