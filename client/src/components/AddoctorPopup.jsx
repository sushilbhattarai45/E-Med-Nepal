import React from "react";
import Popup from "./Popup";
import { TextField, MenuItem, Button } from "@mui/material";
import styles from "../css/components/AddoctorPopup.module.css";
import { AiFillCamera } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import axios from "../config/axios";
import { LoadingButton } from "@mui/lab";

const AddoctorPopup = ({ state }) => {
  const { popup, setPopup } = state;
  const [pic, setPic] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({
    d_name: "",
    d_address: "",
    d_contact: "",
    d_id: Date.now(),
    d_hid: "12345",
    d_dob: "",
    d_profile: "",
    d_gender: "",
    d_bg: "",
    d_specialization: "",
  });

  const close = () => {
    setPopup(!popup);
  };
  const gender = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "female",
      label: "female",
    },
  ];

  const blood_group = [
    {
      value: "A+",
      label: "A+",
    },
    {
      value: "A-",
      label: "A-",
    },
    {
      value: "B+",
      label: "B+",
    },
    {
      value: "B-",
      label: "B-",
    },
    {
      value: "AB+",
      label: "AB+",
    },
    {
      value: "AB-",
      label: "AB-",
    },
    {
      value: "O+",
      label: "O+",
    },
    {
      value: "O-",
      label: "O-",
    },
  ];

  const getImg = (e) => {
    const [file] = e.target.files;
    setPic(URL.createObjectURL(file));
    getImgUrl(file);
  };

  const getImgUrl = async (file) => {
    const formData = new FormData();
    formData.append("pic", file);
    const res = await axios.post("report/web/upload", formData, {
      headersContent: {
        "-Type": "multipart/form-data",
      },
    });
    const { msg, imgUrl } = res.data;
    console.log(imgUrl);
    setImgUrl(imgUrl);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    //check if all fields are filled
    if (
      data.d_name &&
      data.d_address &&
      data.d_contact &&
      data.d_id &&
      data.d_hid &&
      data.d_dob &&
      data.d_gender &&
      data.d_bg &&
      imgUrl &&
      data.d_specialization
    ) {
      setLoading(true);
      const res = await axios.post("doctor/postdoctor", {...data,d_profile:imgUrl});
      const { message } = res.data;
      console.log(message);
      setLoading(false);
      window.location.reload();
    }
  };
  console.log(data);
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
                <span onClick={() => setPic("")}>
                  <MdCancel />
                </span>
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
            name="d_name"
            onChange={handleChange}
            value={data.d_name}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            name="d_address"
            onChange={handleChange}
            value={data.d_address}
          />
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            fullWidth
            type="number"
            name="d_contact"
            onChange={handleChange}
            value={data.d_contact}
          />
          <TextField
            id="outlined-basic"
            label="Specialization"
            variant="outlined"
            fullWidth
            name="d_specialization"
            onChange={handleChange}
            value={data.d_specialization}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            type="date"
            name="d_dob"
            onChange={handleChange}
            value={data.d_dob}
          />
          <TextField
            id="outlined-basic"
            label="Blood Group"
            variant="outlined"
            fullWidth
            select
            name="d_bg"
            onChange={handleChange}
            value={data.d_bg}
          >
            {blood_group.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-basic"
            label="Gender"
            variant="outlined"
            fullWidth
            select
            name={"d_gender"}
            onChange={handleChange}
            value={data.d_gender}
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <LoadingButton
            variant="contained"
            endIcon={<BsArrowUpRight />}
            size="large"
            loading={loading}
            onClick={handleClick}
          >
            Add Doctor
          </LoadingButton>
        </div>
      </Popup>
    </>
  );
};

export default AddoctorPopup;
