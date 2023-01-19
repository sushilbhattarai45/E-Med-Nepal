import React from "react";
import styles from "../css/pages/Report.module.css";
import { BiArrowBack } from "react-icons/bi";
import PrescriptionDisplay from "../components/PrescriptionDisplay";
import ReportComponent from "../components/ReportComponent";

const symptoms = [1, 2, 3];
const images = [1, 2, 3, 4, 5, 6, 7];

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
                <div className={styles.top_right}>Kathmandu</div>
              </div>
              <div className={styles.mid}>
                <span className={styles.title}>Description</span>
                <span className={styles.des}>
                  hello hi ta tatjsaakdhdakdjhsjd sgdnsd dsh h hello hi ta
                  tatjsaakdhdakdjhsjd sgdnsd dsh h
                </span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.title}>Symptoms</div>
                <div className={styles.symptoms}>
                  {symptoms.map(() => (
                    <div className={styles.symptom_con}>Fever</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <PrescriptionDisplay />
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <div className={styles.top}>
            <div className={styles.reportTitle}>Reports</div>
          </div>
          <div className={styles.reports}>
            {images.map((index) => {
              return (
                <div key={index}>
                  <img
                    className={styles.img}
                    src="https://picsum.photos/200/300"
                  />
                  <div className={styles.imageText}>Xray</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
