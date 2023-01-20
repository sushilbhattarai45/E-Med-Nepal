import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/components/ReportComponent.module.css";
const symptoms = [1, 2, 3];
export default function ReportComponent({ data }) {
  console.log(data);
  return (
    <NavLink
      to={"../report/" + data?.r_id + "/" + data?.p_mid}
      style={{
        textDecoration: "none",
      }}
    >
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
        {data?.r_priority == "HIGH" || data?.r_prority == "High" ? (
          <div className={styles.severity_indicator_high}></div>
        ) : null}
        {data?.r_priority == "MIDDLE" ? (
          <div className={styles.severity_indicator_middle}></div>
        ) : null}{" "}
        {data?.r_priority == "LOW" ? (
          <div className={styles.severity_indicator_low}></div>
        ) : null}{" "}
      </div>
    </NavLink>
  );
}
