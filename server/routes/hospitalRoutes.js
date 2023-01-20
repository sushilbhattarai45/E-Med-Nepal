import Express from "express";
import mongoose from "mongoose";
const router = Express.Router();
import {
  postHospital,
  login,
  getDoctors,
  getRecentReports,
  getRecentPatient,
  getone,
  //   getReportOfOne,
  //   getOne,
} from "../controllers/hospitalController.js";
router.route("/posthospital").post(postHospital);
router.route("/login").post(login);
router.route("/getalldoctors").post(getDoctors);
router.route("/getrecentreport").post(getRecentReports);
router.route("/getrecentpatient").post(getRecentPatient);
router.route("/getonehospital").post(getone);

// router.route("/recentpatients").post(getOne);
// router.route("/recentposts").post(getOne);

export default router;
