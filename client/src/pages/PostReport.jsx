import React from "react";
import styles from "../css/pages/PostReport.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { AiOutlinePlus, AiFillCamera } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

const SeverityLabels = ["High", "Medium", "Low"];
import axios from "../config/axios";

const PostReport = () => {
  const [formValues, setFormValues] = React.useState([
    { medicine: "", time: "", duration: "" },
  ]);
  const [reports, setReports] = React.useState([]);

  //Image states
  const [imgText, setImgText] = React.useState();
  const [pic, setPic] = React.useState();
  const [imgUrl, setImgUrl] = React.useState();

  let addFormFields = () => {
    setFormValues([...formValues, { medicine: "", time: "", duration: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const getImg = (e) => {
    const [file] = e.target.files;
    setPic(URL.createObjectURL(file));
    console.log(file);
    getImgUrl(file);
  };
  const getImgUrl = async (file) => {
    const formData = new FormData();
    formData.append("pic", file);
    const res = await axios.post("report/web/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const { msg, imgUrl } = res.data;
    console.log(res.data);
    console.log(imgUrl);
    setImgUrl(imgUrl);
  };

  //   const getDoctors = async () => {
  //     const data = await axios.post("/hospital/getAllDoctors", {
  //       d_hid: "12345",
  //     });
  //     console.log(data.data);
  //     return data.data.data;
  //   };
  const handleReportAddition = (data) => {
    if (data?.name?.trim() !== "" && data.photo) {
      setReports((prev) => [...prev, data]);
      setImgText("");
      setImgUrl("");
      setPic(null);
    } else {
      return;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>Post Report</div>
      <Box
        className={styles.form}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {/* //doctor */}

          <TextField
            id="outlined-select-currency"
            select
            label="Department"
            style={{ width: "40%" }}
          >
            {[1, 2, 3].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/*  */}
          <TextField
            id="outlined-select-currency"
            select
            label="Doctor Name"
            style={{ width: "40%" }}
          >
            {[1, 2, 3, 4, 5]?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/*  */}
          <TextField
            id="outlined-select-currency"
            select
            label="Patient Severity"
            style={{ width: "15%" }}
          >
            {SeverityLabels.map((option) => (
              <MenuItem key={`severity-${option}`} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            style={{ width: "48%" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            style={{ width: "48%" }}
          />
          <div
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Prescription</div>
            <AiOutlinePlus className={styles.pre_add} onClick={addFormFields} />
          </div>
          {formValues.map((element, index) => {
            return (
              <div className={styles.medicine_con}>
                <TextField
                  id="outlined-select-currency"
                  label="Medicine Name"
                  style={{ width: "38%" }}
                />
                {/*  */}
                <TextField
                  id="outlined-select-currency"
                  label="Interval/Note"
                  style={{ width: "38%" }}
                />
                {/*  */}
                <TextField
                  id="outlined-select-currency"
                  label="Duration"
                  style={{ width: "15%" }}
                />
                {index ? (
                  <button
                    type="button"
                    className={styles.remove_btn}
                    onClick={() => removeFormFields(index)}
                  >
                    <RxCross2 />
                  </button>
                ) : null}
              </div>
            );
          })}

          <div
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Reports</div>
          </div>
          <div className={styles.medicine_con}>
            <div
              style={{ width: "60%", display: "flex", alignItems: "center" }}
            >
              <TextField
                id="outlined-select-currency"
                label="Report Name"
                style={{ width: "50%", flex: 1 }}
                onChange={(e) => setImgText(e.target.value)}
                value={imgText}
              />
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
                    type="submit"
                    variant="contained"
                    component="label"
                    startIcon={<AiFillCamera />}
                    style={{
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      required
                      value={imgUrl}
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={getImg}
                    />
                  </Button>
                )}
              </label>
            </div>
            {/*  */}
            <Button
              type="submit"
              variant="contained"
              component="label"
              startIcon={<AiOutlinePlus />}
              onClick={() =>
                handleReportAddition({ name: imgText, photo: imgUrl })
              }
              style={{
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
        </div>

        <div className={styles.reports}>
          {reports.length > 0 &&
            reports?.map((report, index) => {
              console.log(index);
              return (
                <div key={`image-${index}`} style={{ position: "relative" }}>
                  <RxCross2
                    style={{ position: "absolute", right: 0 }}
                    size={24}
                    onClick={() => {
                      setReports((oldValues) => {
                        return oldValues.filter((fruit, i) => i !== index);
                      });
                    }}
                    color="#fff"
                  />
                  <img className={styles.img2} src={report?.photo} />
                  <div className={styles.imageText}>{report?.name}</div>
                </div>
              );
            })}
        </div>

        <Button
          variant="contained"
          component="label"
          style={{ marginTop: 24, width: "100%" }}
          onClick={() => {}}
        >
          Upload Report
        </Button>
      </Box>
    </div>
  );
};

export default PostReport;
