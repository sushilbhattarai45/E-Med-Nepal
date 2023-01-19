import React, { useState } from "react";
import styles from "../css/pages/Hero.module.css";
import { TbReportMedical } from "react-icons/tb";
import { HiDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
const Hero = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className={styles.hero_container}>
        <div className={styles.left_side}>
          <div className={styles.hero_text}>
            <h1>
              Introducing <span className={styles.name}>App Name</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              obcaecati ad dolorem, voluptatem dolorum maxime consectetur
              impedit sapiente excepturi consequatur nulla, asperiores saepe
              omnis
            </p>
          </div>
          <div className={styles.btn_con}>
            <div className={styles.login1_btn}>
              Login as Patient
            </div>
            <div className={styles.login2_btn}>
              Login as Doctor
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
    </>
  );
};

export default Hero;
