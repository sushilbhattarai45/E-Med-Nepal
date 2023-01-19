import Express from "express";
import mongoose from "mongoose";
const router = Express.Router();
import {
  postReport,
  getReportOfOne,
  getOne,
} from "../controllers/reportController.js";
router.route("/postreport").post(postReport);
router.route("/getreportofone").post(getReportOfOne);
router.route("/getone").post(getOne);

export default router;
