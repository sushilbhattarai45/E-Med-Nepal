import React from "react";
import styles from "../css/components/PrescriptionDisplay.module.css";

export default function PrescriptionDisplay({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.title}>Current Prescriptions</div>
      <div className={styles.column}>
        <div className={styles.row}>
          <div className={styles.medicine_name}>Citamol</div>
          <div className={styles.duration}>4 days</div>
          <div className={styles.interval}>every 6 hours after meal</div>
        </div>
        <div className={styles.row}>
          <div className={styles.medicine_name}>De-Cold</div>
          <div className={styles.duration}>8 days</div>
          <div className={styles.interval}>every 3 hours after meal</div>
        </div>
        <div className={styles.row}>
          <div className={styles.medicine_name}>Synex</div>
          <div className={styles.duration}>12 days</div>
          <div className={styles.interval}>every 10 hours after meal</div>
        </div>
      </div>
    </div>
  );
}
