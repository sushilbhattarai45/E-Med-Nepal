import React from "react";
import styles from "../css/pages/Doctor.module.css";
import { AiOutlinePlus } from "react-icons/ai";
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

const Dashboard = () => {
  const columns = [
    {
      id: "sn",
      label: "SN",
      minWidth: 50,
    },
    {
      id: "pic",
      label: "Profile Pic",
      minWidth: 120,
    },
    {
      id: "name",
      label: "Name",
      minWidth: 150,
    },
    {
      id: "address",
      label: "Address",
      minWidth: 150,
    },
    {
      id: "contact",
      label: "Contact",
      minWidth: 150,
    },
    {
      id: "specialization",
      label: "Specialization",
      minWidth: 150,
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 100,
    },
    {
      id: "action",
      label: "Action",
      minWidth: 80,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Dr. John Doe",
      profile_pic: "/doctor.webp",
      address: "Kathmandu",
      contact: "984567890",
      specialization: "Cardiologist",
      gender: "Male",
    },
    {
      id: 2,
      name: "Dr. John Doe",
      profile_pic: "/doctor.webp",
      address: "Kathmandu",
      contact: "984567890",
      specialization: "Cardiologist",
      gender: "Female",
    },
    {
      id: 3,
      name: "Dr. John Doe",
      profile_pic: "/doctor.webp",
      address: "Kathmandu",
      contact: "984567890",
      specialization: "Cardiologist",
      gender: "Female",
    },
    {
      id: 4,
      name: "Dr. John Doe",
      profile_pic: "/doctor.webp",
      address: "Kathmandu",
      contact: "984567890",
      specialization: "Cardiologist",
      gender: "Female",
    },
    {
      id: 5,
      name: "Dr. John Doe",
      profile_pic: "/doctor.webp",
      address: "Kathmandu",
      contact: "984567890",
      specialization: "Cardiologist",
      gender: "Female",
    },
  ];
  return (
    <>
      <div className={styles.doctors_con}>
        <div className={styles.doctors_top}>
          <p className={styles.title}>Doctors</p>
          <div className={styles.add_btn}>
            <p className={styles.add_text}>Add Doctor</p>
            <AiOutlinePlus className={styles.add_plus} />
          </div>
        </div>

        <div className={styles.doctors_listing_con}>
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
                        <div className={styles.doctor_pic}>
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
                        {row.specialization}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        <span className={styles.gender}>{row.gender}</span>
                      </TableCell>
                      <TableCell align="center">
                        <div className={styles.dlt_btn}>
                          <MdDelete />
                        </div>
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

export default Dashboard;
