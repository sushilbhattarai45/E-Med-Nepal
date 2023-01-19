import React from "react";
import styles from "../css/components/PrescriptionDisplay.module.css";

export default function PrescriptionDisplay({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Current Prescriptions</div>
      <div className={styles.column}>
        {data?.map((item) => (
          <div className={styles.row}>
            <div className={styles.medicine_name}>
              {item?.r_prescription[0].medicine}
            </div>
            <div className={styles.duration}>
              {item?.r_prescription[0].duration} days
            </div>
            <div className={styles.interval}>
              {item?.r_prescription[0].interval}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
