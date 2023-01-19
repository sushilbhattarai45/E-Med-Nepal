import Express from "express";
import mongoose from "mongoose";
const router = Express.Router();
import { postPatient, getOne } from "../controllers/patientController.js";
router.route("/postpatient").post(postPatient);
router.route("/getonepatient").post(getOne);

export default router;
