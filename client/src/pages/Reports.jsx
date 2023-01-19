import React from "react";
import ReportComponent from "../components/ReportComponent";
import styles from "../css/pages/Reports.module.css";
import { BsSearch } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import instance from "../config/axios.js";
const Reports = () => {
  const [data, setData] = React.useState([{}]);

  React.useEffect(() => {
    const getRecentPatients = async () => {
      const { data } = await instance.post("/hospital/getrecentreport", {
        hm_hid: "12345",
      });
      setData(data.data);
    };
    getRecentPatients();
  });

  // getRecentPatients();
  // console.log("meow" + JSON.stringify(data));

  const columns = [
    {
      id: "sn",
      label: "SN",
      minWidth: 50,
    },
    {
      id: "name",
      label: "Name",
      minWidth: 50,
    },
    {
      id: "department",
      label: "Department",
      minWidth: 100,
    },

    {
      id: "severity",
      label: "Severity",
      minWidth: 80,
    },
    {
      id: "symptoms",
      label: "Symptoms",
      minWidth: 100,
    },
    {
      id: "date",
      label: "Date",
      minWidth: 80,
    },
  ];
  // const data = [
  //   {
  //     id: 1,
  //     department: "Nag,Kan and ghati",
  //     severity: "High",
  //     symptoms: ["Fever", "Cough", "Cold"],
  //     date: "20 May, 2020",
  //   },
  //   {
  //     id: 2,
  //     department: "Nag,Kan and ghati",
  //     severity: "Medium",
  //     symptoms: ["Fever", "Cough", "Cold"],
  //     date: "20 May, 2020",
  //   },
  //   {
  //     id: 3,
  //     department: "Nag,Kan and ghati",
  //     severity: "Low",
  //     symptoms: ["Fever", "Cough", "Cold"],
  //     date: "20 May, 2020",
  //   },
  //   {
  //     id: 4,
  //     department: "Nag,Kan and ghati",
  //     severity: "High",
  //     symptoms: ["Fever", "Cough", "Cold", "Fever", "Cough", "Cold"],
  //     date: "20 May, 2020",
  //   },
  // ];
  const symptoms = [1, 2, 3, 4, 5];
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
        <TableContainer sx={{ minWidth: 700 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row, i) => {
                return (
                  <>
                    <TableRow hover tabIndex={-1} key={i}>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {i + 1}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row.p_name}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row.r_department}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row.r_priority === "HIGH" && (
                          <span className={styles.high}>{row.r_priority}</span>
                        )}
                        {row.r_priority === "MEDIUM" && (
                          <span className={styles.medium}>
                            {row.r_priority}
                          </span>
                        )}
                        {row.r_priority === "LOW" && (
                          <span className={styles.low}>{row.r_priority}</span>
                        )}
                      </TableCell>
                      <TableCell
                        style={{
                          fontFamily: "Poppins",
                          display: "flex",
                          gap: "6px",
                          flexWrap: "wrap",
                          width: "200px",
                        }}
                      >
                        {row?.r_symptoms?.map((symptom, i) => {
                          return (
                            <span className={styles.fever} key={i}>
                              {symptom}
                            </span>
                          );
                        })}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row?.r_toc?.date + "    " + row?.r_toc?.time}
                      </TableCell>
                    </TableRow>
                  </>
                );
              })}
              {/* <TableRow hover tabIndex={-1}>
                <TableCell style={{ fontFamily: "Poppins" }}>1</TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  Nag,Kan and ghati
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  <span className={styles.low}>Low</span>
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  <span className={styles.fever}>Fever</span>
                </TableCell>
                <TableCell style={{ fontFamily: "Poppins" }}>
                  2072/12/12
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Reports;
