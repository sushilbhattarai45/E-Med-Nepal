import React from "react";
import ReportComponent from "../components/ReportComponent";
import styles from "../css/pages/Reports.module.css";
import { BsSearch } from "react-icons/bs";

const Reports = () => {
  const getRecentReports = async () => {
    console.log("okkkk");
    const patientdata = await axiosinstance.post("/hospital/getrecentpatient", {
      hm_hid: "12345",
    });
    await setData(patientdata.data.data);
  };
  const [data, setData] = React.useState([{}]);
  getRecentReports();
  console.log(data);

  const column = [
    {
      id: "sn",
      label: "SN",
      minWidth: 50,
    },
    {
      id: "department",
      label: "Department",
      minWidth: 100,
    },

    {
      id: "date",
      label: "Date",
      minWidth: 100,
    },
    {
      id: "severity",
      label: "Severity",
      minWidth: 100,
    },
    {
      id: "symptoms",
      label: "Symptoms",
      minWidth: 100,
    },
  ];
  return (
    <div className={styles.reports_con}>
      <div className={styles.reports_top}>
        <p className={styles.title}>Reports</p>
        <div className={styles.search_con}>
          <input type="text" className={styles.search} placeholder="Search" />
          <div className={styles.icon_con}>
            <BsSearch className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.report_listing}>
        <ReportComponent column={column} />
      </div>
    </div>
  );
};

export default Reports;
