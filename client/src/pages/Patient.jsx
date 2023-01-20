import React from "react";
import PrescriptionDisplay from "../components/PrescriptionDisplay";
import ReportComponent from "../components/ReportComponent";
import styles from "../css/pages/Patient.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import ReportEntryPopup from "../components/ReportEntryPopup";
import axios from "../config/axios.js";
import { useParams } from "react-router-dom";

const Patient = () => {
  const [currentmedicine, setCurrentMedicine] = React.useState();
  const [pdata, setPdata] = React.useState();
  const [pmedicaldata, setPMedicaldata] = React.useState();
  const [popup, setPopup] = React.useState(false);
  const {id} = useParams();
  React.useEffect(() => {
    getPatientData();
    getMedicalData();
    getCurrentPrescriptions();
  },[id]);
  const getPatientData = async () => {
    const data = await axios.post("/patient/getonepatient", {
      p_mid: id,
    });
    setPdata(data.data.data[0]);
  };
  const getCurrentPrescriptions = async () => {
    const data = await axios.post("/report/getcurrentprescription", {
      p_mid: id,
    });
    setCurrentMedicine(data.data.data);
  };

  const getMedicalData = async () => {
    const data = await axios.post("/report/getreportofone", {
      p_mid: id,
    });
    setPMedicaldata(data.data.data);
  };

  return (
    <>
      {popup && <ReportEntryPopup state={{ setPopup, popup }} />}
      <div className={styles.container}>
        <div className={styles.title}>Patient</div>
        <div className={styles.row}>
          <img
            className={styles.patient_image}
            src={pdata?.p_image}
            alt="Profile Image"
          />
          <div className={styles.profileContent}>
            <div>
              <div className={styles.patient_name}>{pdata?.p_name}</div>
              <div className={styles.age}>12 years old</div>
            </div>
            <div className={styles.phoneno}>Contact: {pdata?.p_contact}</div>
            <div className={styles.address}>Address: {pdata?.p_address}</div>
            <div className={styles.email}>Medical Id :{pdata?.p_mid}</div>
          </div>
          <div className={styles.extraContent}>
            <div className={styles.bloodgroup}>{pdata?.p_bg}</div>
            <div className={styles.gender}>{pdata?.p_gender}</div>
          </div>
          <div className={styles.prescription}>
            <PrescriptionDisplay data={currentmedicine} />
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <div className={styles.top}>
            <div className={styles.reportTitle}>Reports</div>
            <div className={styles.add_report} onClick={() => setPopup(!popup)}>
              <AiOutlinePlus className={styles.add_report_icon} />
              <p className={styles.add_report_btn}>Add Report</p>
            </div>
          </div>
          <div className={styles.reports}>
            {pmedicaldata?.map((data) => {
              return <ReportComponent data={data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
