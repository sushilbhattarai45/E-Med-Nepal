import React from "react";
import styles from "../css/pages/Patients.module.css";
import { BsSearch } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { MdDelete } from "react-icons/md";

const Patients = () => {
  const columns = [
    {
      id: "sn",
      label: "SN",
      minWidth: 50,
    },
    {
      id: "pic",
      label: "Profile Pic",
      minWidth: 100,
    },
    {
      id: "name",
      label: "Name",
      minWidth: 100,
    },
    {
      id: "address",
      label: "Address",
      minWidth: 100,
    },
    {
      id: "contact",
      label: "Contact",
      minWidth: 80,
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 80,
    },
    {
      id: "blood_group",
      label: "Blood Group",
      minWidth: 80,
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      profile_pic: "/user.jpg",
      name: "John Doe",
      address: "Kathmandu",
      contact: "984567890",
      gender: "Male",
      blood_group: "A+",
    },
    {
      id: 1,
      profile_pic: "/user.jpg",
      name: "John Doe",
      address: "Kathmandu",
      contact: "984567890",
      gender: "Male",
      blood_group: "A+",
    },
    {
      id: 1,
      profile_pic: "/user.jpg",
      name: "John Doe",
      address: "Kathmandu",
      contact: "984567890",
      gender: "Male",
      blood_group: "A+",
    },
    {
      id: 1,
      profile_pic: "/user.jpg",
      name: "John Doe",
      address: "Kathmandu",
      contact: "984567890",
      gender: "Male",
      blood_group: "A+",
    },
  ];
  return (
    <>
      <div className={styles.patients_con}>
        <div className={styles.patients_top}>
          <p className={styles.title}>Patients</p>
          <div className={styles.search_con}>
            <input type="text" className={styles.search} placeholder="Search" />
            <div className={styles.icon_con}>
              <BsSearch className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.patients_listing}>
          <TableContainer sx={{ minWidth: 800 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
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
                {data.map((row, i) => {
                  return (
                    <TableRow hover tabIndex={-1} key={i}>
                      <TableCell key={row.id} style={{ fontFamily: "Poppins" }}>
                        {i + 1}
                      </TableCell>

                      <TableCell
                        align="right"
                        style={{ fontFamily: "Poppins" }}
                      >
                        <div className={styles.patient_pic}>
                          <img src={row.profile_pic} className={styles.img} />
                        </div>
                      </TableCell>

                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row.name}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row.address}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row.contact}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        <span className={styles.gender}>{row.gender}</span>
                      </TableCell>
                      <TableCell
                        style={{ fontFamily: "Poppins" }}
                        align="center"
                      >
                        {row.blood_group}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Patients;
