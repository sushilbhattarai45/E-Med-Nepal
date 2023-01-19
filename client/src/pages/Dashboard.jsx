import React from "react";
import styles from "../css/pages/Doctor.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { MdDelete } from "react-icons/md";
import AddoctorPopup from "../components/AddoctorPopup";
import instance from "../config/axios.js";

const Dashboard = () => {
  React.useEffect(() => {
    const getDoctors = async () => {
      const data = await instance.post("/hospital/getalldoctors", {
        d_hid: "12345",
      });

      setDoctor(data.data.data);
    };
    getDoctors();
  },[]);
  
  const deleteDoctor = async (d_id) => {
    const data = await instance.post("/doctor/delete", {
      d_id: d_id,
    });
    window.location.reload();
  };
  const [doctor, setDoctor] = React.useState([{}]);

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

  // const data = [
  //   {
  //     id: 1,
  //     name: "Dr. John Doe",
  //     profile_pic: "/doctor.webp",
  //     address: "Kathmandu",
  //     contact: "984567890",
  //     specialization: "Cardiologist",
  //     gender: "Male",
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. John Doe",
  //     profile_pic: "/doctor.webp",
  //     address: "Kathmandu",
  //     contact: "984567890",
  //     specialization: "Cardiologist",
  //     gender: "Female",
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. John Doe",
  //     profile_pic: "/doctor.webp",
  //     address: "Kathmandu",
  //     contact: "984567890",
  //     specialization: "Cardiologist",
  //     gender: "Female",
  //   },
  //   {
  //     id: 4,
  //     name: "Dr. John Doe",
  //     profile_pic: "/doctor.webp",
  //     address: "Kathmandu",
  //     contact: "984567890",
  //     specialization: "Cardiologist",
  //     gender: "Female",
  //   },
  //   {
  //     id: 5,
  //     name: "Dr. John Doe",
  //     profile_pic: "/doctor.webp",
  //     address: "Kathmandu",
  //     contact: "984567890",
  //     specialization: "Cardiologist",
  //     gender: "Female",
  //   },
  // ];

  const [popup, setPopup] = React.useState(false);
  return (
    <>
    {popup && <AddoctorPopup state={{popup,setPopup}}/>}
      <div className={styles.doctors_con}>
        <div className={styles.doctors_top}>
          <p className={styles.title}>Doctors</p>
          <div className={styles.add_btn} onClick={() =>setPopup(!popup)}>
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
                {doctor.map((row, i) => {
                  console.log(row);
                  return (
                    <TableRow hover tabIndex={-1} key={i}>
                      <TableCell
                        key={row._id}
                        style={{ fontFamily: "Poppins" }}
                      >
                        {i + 1}
                      </TableCell>

                      <TableCell
                        align="right"
                        style={{ fontFamily: "Poppins" }}
                      >
                        <div className={styles.doctor_pic}>
                          <img src={row?.d_profile} className={styles.img} />
                        </div>
                      </TableCell>

                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row?.d_name}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row?.d_address}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row?.d_contact}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        {row?.d_specialization}
                      </TableCell>
                      <TableCell style={{ fontFamily: "Poppins" }}>
                        <span className={styles.gender}>{row?.d_gender}</span>
                      </TableCell>
                      <TableCell align="center">
                        <div
                          className={styles.dlt_btn}
                          onClick={async () => {
                            await deleteDoctor(row?.d_id);
                          }}
                        >
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
