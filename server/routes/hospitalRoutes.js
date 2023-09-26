import Express from "express";
const router = Express.Router();
import {
  postHospital,
  loginH,
  getDoctors,
  getRecentReports,
  getRecentPatient,
  getone,
} from "../controllers/hospitalController.js";
console.log("ok");
router.route("/posthospital").post(postHospital);
router.route("/login").post(loginH);
router.route("/getalldoctors").post(getDoctors);
router.route("/getrecentreport").post(getRecentReports);
router.route("/getrecentpatient").post(getRecentPatient);
router.route("/getonehospital").post(getone);
export default router;
