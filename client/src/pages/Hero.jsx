import React, { useState } from "react";
import styles from "../css/pages/Hero.module.css";
import { TbReportMedical } from "react-icons/tb";
import { HiDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import PatientPopup from "../components/PatientPopup";
import DoctorPopup from "../components/DoctorPopup";
const Hero = () => {
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState({ patient: false, doctor: false });
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      {popup.patient && <PatientPopup state={{ popup, setPopup }} />}
      {popup.doctor && <DoctorPopup state={{ popup, setPopup }} />}
      <div className={styles.hero_container}>
        <div className={styles.left_side}>
          <div className={styles.hero_text}>
            <h1>
              Introducing <span className={styles.name}>UN Health system</span>
            </h1>
            <p>
              Unified Health System is a platform which helps to centralize the
              medical reports of a patient which can only be accessible by
              Hospital which will further give clarity to the doctors about the
              existing medical history of the patient.
            </p>
          </div>
          <div className={styles.btn_con}>
            <div
              className={styles.login1_btn}
              onClick={() => setPopup({ ...popup, patient: true })}
            >
              Login as Patient
            </div>
            <div
              className={styles.login2_btn}
              onClick={() => setPopup({ ...popup, doctor: true })}
            >
              Login as Hospital
            </div>
          </div>
        </div>
        <div className={styles.right_side}>
          <img src="/hero.svg" className={styles.illus} />
        </div>
        <div className={styles.box1}>
          <TbReportMedical />
        </div>
        <div className={styles.box2}>
          <HiDocumentSearch />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.right}>
          <span>
            Made with <span className={styles.heart}>❤</span> by Team Haskmukh
          </span>
        </div>
        <div className={styles.left}>
          <span>Copyright © 2023 Team Haskmukh. All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
