import React from "react";
import styles from "../css/pages/Report.module.css";
import { BiArrowBack } from "react-icons/bi";
import PrescriptionDisplay from "../components/PrescriptionDisplay";

const symptoms = [1, 2, 3];
const images = [1, 2, 3, 4, 5, 6, 7];
import instance from "../config/axios.js";

const Report = () => {
  React.useEffect(() => {
    const getCurrentPrescriptions = async () => {
      const data = await instance.post("/report/getcurrentprescription", {
        p_mid: "9893586891",
      });

      setCurrentMedicine(data.data.data);
    };

    const getReportData = async () => {
      const data = await instance.post("report/getone", {
        r_id: "2498992348",
      });

      setRdata(data.data.data[0]);
      setReports(data.data.data[0].r_reports);
    };
    getReportData();
    getCurrentPrescriptions();
    console.log(rdata);
  });
  const [currentmedicine, setCurrentMedicine] = React.useState();

  const [rdata, setRdata] = React.useState();
  const [reports, setReports] = React.useState();
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
                  <p className={styles.title}>Name</p>
                  <p className={styles.value}>{rdata?.p_name}</p>
                </div>
                <div className={styles.top_right}>{rdata?.r_department}</div>
              </div>
              <div className={styles.mid}>
                <span className={styles.title}>Description</span>
                <span className={styles.des}>{rdata?.r_description}</span>
              </div>
              <div className={styles.bottom}>
                <div className={styles.title}>Symptoms</div>
                <div className={styles.symptoms}>
                  {rdata?.r_symptoms?.map((item) => (
                    <div className={styles.symptom_con}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <PrescriptionDisplay data={currentmedicine} />
          </div>
        </div>
        <div style={{ marginTop: 60 }}>
          <div className={styles.top}>
            <div className={styles.reportTitle}>Reports</div>
          </div>
          <div className={styles.reports}>
            {reports?.map((item) => {
              return (
                <div>
                  <img className={styles.img} src={item.photo} />
                  <div className={styles.imageText}>Xray</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.hospitalName}>{rdata?.hm_name}</div>
        <div className={styles.docInfo}>
          <img
            className={styles.docProfile}
            src="https://picsum.photos/200/200"
          />
          <div>{rdata?.r_doctorname}</div>
        </div>
      </div>
    </>
  );
};

export default Report;
