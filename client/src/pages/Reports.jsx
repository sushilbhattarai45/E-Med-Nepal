import React from "react";
import ReportComponent from "../components/ReportComponent";
import styles from "../css/pages/Reports.module.css";

const Reports = () => {
  return (
    <div className={styles.reports_con}>
      <div className={styles.title} >Reports</div>
      <ReportComponent />
    </div>
  );
};

export default Reports;
