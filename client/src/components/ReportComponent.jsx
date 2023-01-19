import React from "react";
import styles from "../css/components/ReportComponent.module.css";
const symptoms = [1, 2, 3];
export default function ReportComponent({ data }) {
  console.log(data);
  return (
    <div className={styles.outsideContainer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.main_content}>
            <h2>{data?.r_toc?.date + "  " + data?.r_toc?.time}</h2>
            <div className={styles.department}>{data?.r_department}</div>
          </div>
          <div className={styles.severity_con}>
            <div className={styles.severity_heading}>Severity</div>
            <div className={styles.severity_cond}>{data?.r_priority}</div>
          </div>
        </div>
        <div className={styles.symptoms_text}>Symptoms</div>
        <div className={styles.symptoms}>
          {symptoms.map(() => (
            <div className={styles.symptom_con}>{data?.r_symptoms}</div>
          ))}
        </div>
      </div>
      <div className={styles.severity_indicator}></div>
    </div>
  );
}
