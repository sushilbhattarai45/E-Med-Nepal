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
            <div className={styles.report_info}>
              <div className={styles.top}>
                <div className={styles.top_left}>
                  <p className={styles.title}>Patients Name</p>
                  <p className={styles.value}>John Doe</p>
                </div>
                <div className={styles.top_right}>
                  <p className={styles.depart_name}>Kathmandu</p>
                </div>
              </div>
              <div className={styles.mid}>
                <span className={styles.title}>Description</span>
                <span className={styles.des}>
                  hello hi ta tatjsaakdhdakdjhsjd sgdnsd dsh h 
                  hello hi ta tatjsaakdhdakdjhsjd sgdnsd dsh h 
                </span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.title}>Symptoms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
