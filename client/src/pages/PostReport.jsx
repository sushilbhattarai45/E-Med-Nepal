import React from "react";
import styles from "../css/pages/PostReport.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import { AiOutlinePlus, AiFillCamera } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
import axios from "../config/axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../config/Context";

const SeverityLabels = ["High", "Medium", "Low"];
const Departments = [
  "Physician",
  "Phychology",
  "Obstetrology &  Gynaecology ",
  "Neurology",
  "Radiology",
  "Cardiology",
];

const PostReport = () => {
  const { id, name } = useParams();
  const [formValues, setFormValues] = React.useState([
    { medicine: "", time: "", duration: "" },
  ]);
  const [reports, setReports] = React.useState([]);
  const { hp } = React.useContext(ContextProvider);
  const [hospitalData, setHospitalData] = hp;
  // console.log(hospitalData);
  //Image states
  const [imgText, setImgText] = React.useState();
  const [pic, setPic] = React.useState();
  const [imgUrl, setImgUrl] = React.useState();
  const [doctorList, setDoctorList] = React.useState([]);
  const htoken = localStorage.getItem("htoken");

  const [reportData, setReportData] = React.useState({
    p_mid: "",
    p_name: name,
    r_department: "",
    d_id: "",
    r_description: "",
    r_prescription: [{}],
    r_severity: "",
    r_reports: [],
    r_doctorname: "",
    r_bloodgroup: "",
    hm_id: "",
    hm_name: "",
  });

  let addFormFields = () => {
    //check the all element is not empty or not
    let isAllFieldFilled = reportData.r_prescription.every((item) => {
      return (
        item.medicine !== "" && item.interval !== "" && item.duration !== ""
      );
    });
    if (!isAllFieldFilled) {
      toast.error("Please fill all the fields");
      return;
    }

    setFormValues([
      ...formValues,
      { medicine: "", interval: "", duration: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const getImg = (e) => {
    const [file] = e.target.files;
    setPic(URL.createObjectURL(file));
    // console.log(file);
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
    // console.log(res.data);
    // console.log(imgUrl);
    setImgUrl(imgUrl);
  };

  const handleReportAddition = (data) => {
    if (data?.name?.trim() !== "" && data.photo) {
      setReportData((prev) => ({
        ...prev,
        r_reports: [...prev.r_reports, data],
      }));
      // setReports((prev) => [...prev, data]);
      setImgText("");
      setImgUrl("");
      setPic(null);
    } else {
      return;
    }
  };

  const getDoctors = async () => {
    const data = await axios.post("/hospital/getAllDoctors", {
      d_hid: htoken,
    });
    if (data.data.data) {
      setDoctorList(data.data.data);
    }
  };
  React.useEffect(() => {
    getDoctors();
  }, []);

  // console.log(formValues);
  const uploadReport = async () => {
    // //check the prescription fields are filled or not
    // for (let i = 0; i < formValues.length; i++) {
    //   if (
    //     reportData.formValues[i].medicine === "" ||
    //     reportData.formValues[i].time === "" ||
    //     reportData.formValues[i].duration === ""
    //   ) {
    //     toast.error("Please fill all the prescription fields");
    //     return;
    //   }
    // }

    // //check the report fields are filled or not
    // for (let i = 0; i < reportData.r_report.length; i++) {
    //   if (
    //     reportData.r_report[i].name === "" ||
    //     reportData.r_report[i].photo === ""
    //   ) {
    //     toast.error("Please fill all the report fields");
    //     return;
    //   }
    // }
    setReportData({
      ...reportData,
      p_mid: id,
      hm_id: htoken,
      d_id: doctorList[0].d_id,
      r_doctorname: doctorList[0].d_name,
      hm_name: hospitalData.hm_name,
    });

    try {
      // console.log(reportData);
      const res = await axios.post("/report/postreport", {
        p_mid: id,
        p_name: reportData.p_name,
        hm_id: htoken,
        r_prescription: reportData.r_prescription,
        r_reports: reportData.r_reports,
        d_id: doctorList[0].d_id,
        r_doctorname: doctorList[0].d_name,
        hm_name: hospitalData.hm_name,
        r_department: reportData.r_department,
        r_description: reportData.r_description,
        r_priority: reportData.r_severity,
        r_symptoms: reportData.r_symptoms,
      });
      if (res) {
        console.log(reportData);
        console.log(res.data);
        toast.success("Report added successfully");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  // console.log(reportData);
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
          {/* <div style={{ flex: 1, flexDirection: "row" }}> */}
          <TextField
            id="outlined-select-currency"
            select
            label="Department"
            //   sx={{ width: "40%" }}
            value={reportData.r_department}
            onChange={(e) => {
              setReportData({ ...reportData, r_department: e.target.value });
            }}
          >
            {Departments.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {doctorList && (
            <Autocomplete
              style={{ display: "inline-block" }}
              disablePortal
              id="combo-box-demo"
              options={[
                ...doctorList.map((doc) => ({
                  label: doc.d_name,
                  value: doc.d_name,
                })),
              ]}
              onChange={(e, value) => {
                setReportData({
                  ...reportData,
                  r_doctorname: value?.value,
                  d_id: value?.id,
                });
              }}
              value={reportData.r_doctorname}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ width: "100%", flex: 1 }}
                  label="Doctor's Name"
                />
              )}
            />
          )}
          {/*  */}
          <TextField
            id="outlined-select-currency"
            select
            label="Patient Severity"
            value={reportData.r_severity}
            onChange={(e) => {
              setReportData({ ...reportData, r_severity: e.target.value });
            }}
            //   style={{ width: "15%" }}
          >
            {SeverityLabels.map((option) => (
              <MenuItem key={`severity-${option}`} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          {/* </div> */}
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            style={{ width: "48%" }}
            value={reportData.r_description}
            onChange={(e) => {
              setReportData({ ...reportData, r_description: e.target.value });
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Symptoms (Eg: Cough, Fever) "
            multiline
            rows={4}
            style={{ width: "48%" }}
            value={reportData.r_symptoms}
            onChange={(e) => {
              const symptoms = e.target.value.split(",");
              setReportData({ ...reportData, r_symptoms: symptoms });
            }}
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
                  onChange={(e) => {
                    const values = [...reportData.r_prescription];
                    console.log(values);
                    if (!values[index])
                      values.push({ medicine: "", interval: "", duration: "" });
                    values[index].medicine = e.target.value;
                    setReportData({ ...reportData, r_prescription: values });
                    console.log(reportData.r_prescription[index]);
                  }}
                  id="outlined-select-currency"
                  label="Medicine Name"
                  style={{ width: "38%" }}
                />
                {/*  */}
                <TextField
                  onChange={(e) => {
                    const values = [...reportData.r_prescription];
                    if (!values[index])
                      values.push({ medicine: "", interval: "", duration: "" });
                    values[index].interval = e.target.value;
                    setReportData({ ...reportData, r_prescription: values });
                    console.log(reportData.r_prescription[index]);
                  }}
                  id="outlined-select-currency"
                  label="Interval/Note"
                  style={{ width: "38%" }}
                />
                {/*  */}
                <TextField
                  onChange={(e) => {
                    const values = [...reportData.r_prescription];
                    if (!values[index])
                      values.push({ medicine: "", interval: "", duration: "" });
                    values[index].duration = e.target.value;
                    setReportData({ ...reportData, r_prescription: values });
                    console.log(reportData.r_prescription[index]);
                  }}
                  id="outlined-select-currency"
                  label="Duration"
                  type={"number"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">days</InputAdornment>
                    ),
                  }}
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
          {reportData.r_reports.length > 0 &&
            reportData.r_reports?.map((report, index) => {
              // console.log(index);
              return (
                <div key={`image-${index}`} style={{ position: "relative" }}>
                  <RxCross2
                    style={{ position: "absolute", right: 0 }}
                    size={24}
                    onClick={() => {
                      setReportData({
                        ...reportData,
                        r_report: reportData.r_reports.filter(
                          (fruit, i) => i !== index
                        ),
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
          onClick={() => uploadReport()}
          size="large"
        >
          Upload Report
        </Button>
      </Box>
    </div>
  );
};

export default PostReport;
