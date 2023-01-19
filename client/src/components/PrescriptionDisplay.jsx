import React from "react";
import styles from "../css/components/PrescriptionDisplay.module.css";

export default function PrescriptionDisplay({}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Current Prescriptions</div>
      <div className={styles.column}>
        <div className={styles.row}>
          <div className={styles.medicine_name}>Citamol</div>
          <div className={styles.duration}>2 days</div>
          <div className={styles.interval}>2 times after meal</div>
        </div>
        <div className={styles.row}>
          <div className={styles.medicine_name}>Citamol</div>
          <div className={styles.duration}>2 days</div>
          <div className={styles.interval}>2 times after meal</div>
        </div>
        <div className={styles.row}>
          <div className={styles.medicine_name}>Citamol</div>
          <div className={styles.duration}>2 days</div>
          <div className={styles.interval}>2 times after meal</div>
        </div>
      </div>
    </div>
  );
}
