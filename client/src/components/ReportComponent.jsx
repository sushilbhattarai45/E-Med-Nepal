import React from "react";
import styles from "../css/components/ReportComponent.module.css";
const symptoms = [1, 2, 3];
export default function ReportComponent() {
  return (
    <div className={styles.outsideContainer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.main_content}>
            <h2>20 May, 2020</h2>
            <div className={styles.department}>Department Name</div>
          </div>
          <div className={styles.severity_con}>
            <div className={styles.severity_heading}>Severity</div>
            <div className={styles.severity_cond}>High</div>
          </div>
        </div>
        <div className={styles.symptoms_text}>Symptoms</div>
        <div className={styles.symptoms}>
          {symptoms.map(() => (
            <div className={styles.symptom_con}>Fever</div>
          ))}
        </div>
      </div>
      <div className={styles.severity_indicator} ></div>
    </div>
  );
}
