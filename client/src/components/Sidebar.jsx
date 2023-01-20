import React, { useContext } from "react";
import styles from "../css/components/Sidebar.module.css";
import { FaHospitalAlt, FaUser } from "react-icons/fa";
import { BsClipboardPlus } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import { ContextProvider } from "../config/Context";

const Sidebar = () => {
  const location = useLocation();
  const { hp, pt } = useContext(ContextProvider);
  const [hospitalData, setHospitalData] = hp;
  const htoken = localStorage.getItem("htoken");

  const [patientData, setPatientData] = pt;
  console.log(patientData);
  const { pathname } = location;
  const logout = () => {
    localStorage.removeItem("ptoken");
    localStorage.removeItem("htoken");
    window.location.href = "/";
  };
  return (
    <>
      <div className={styles.sidebar_con}>
        <NavLink to="/" className={styles.sidebar_top}>
          <FaHospitalAlt />
        </NavLink>
        {htoken && (
          <div className={styles.sidebar_mid}>
            <NavLink
              className={pathname === "/app" ? styles.active : styles.link_con}
              to="/app"
            >
              <div className={styles.link}>
                <BsClipboardPlus />
              </div>
            </NavLink>
            <NavLink
              className={
                pathname === "/app/patients" ? styles.active : styles.link_con
              }
              to="/app/patients"
            >
              <div className={styles.link}>
                <CiUser size={28} />
              </div>
            </NavLink>
            <NavLink
              className={
                pathname === "/app/reports" ? styles.active : styles.link_con
              }
              to="/app/reports"
            >
              <div className={styles.link}>
                <BsClipboardPlus />
              </div>
            </NavLink>
          </div>
        )}
        <div className={styles.sidebar_bottom}>
          <div className={styles.profile_con}>
            <img
              src={htoken ? hospitalData?.hm_profile : patientData?.p_profile}
              className={styles.pic}
            />
          </div>
          <div className={styles.logout_con} onClick={() => logout()}>
            <div className={styles.logout}>
              <FiLogOut />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
