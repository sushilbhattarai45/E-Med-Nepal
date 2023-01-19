import React from "react";
import styles from "../css/pages/Report.module.css";
import { BiArrowBack } from "react-icons/bi";

const Report = () => {
  return (
    <>
      <div className={styles.report_con}>
        <div className={styles.report_header}>
          <span className={styles.back}>
            <BiArrowBack />
          </span>
          <p className={styles.header}>Report Information</p>
        </div>
        <div className={styles.report_body}>
          <div className={styles.body_top}>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
