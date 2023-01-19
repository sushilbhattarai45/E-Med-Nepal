import React from "react";
import PrescriptionDisplay from "../components/PrescriptionDisplay";
import ReportComponent from "../components/ReportComponent";
import styles from "../css/pages/Patient.module.css";

const Patient = () => {
  const reports = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className={styles.title}>Patient</div>
      <div className={styles.row}>
        <img
          className={styles.patient_image}
          src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
          alt="Profile Image"
        />
        <div className={styles.profileContent}>
          <div>
            <div className={styles.patient_name}>Roking Hard</div>
            <div className={styles.age}>12years old</div>
          </div>
          <div className={styles.phoneno}>9847190179</div>
          <div className={styles.address}>9847190179</div>
          <div className={styles.email}>9847190179</div>
        </div>
        <div className={styles.extraContent}>
          <div className={styles.bloodgroup}>AB+</div>
          <div className={styles.gender}>Female</div>
        </div>
        <div className={styles.prescription}>
          <PrescriptionDisplay />
        </div>
      </div>
      <div style={{ marginTop: 60 }}>
        <div className={styles.reportTitle}>Reports</div>
        <div className={styles.reports}>
          {reports.map((index) => {
            return <ReportComponent key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Patient;
