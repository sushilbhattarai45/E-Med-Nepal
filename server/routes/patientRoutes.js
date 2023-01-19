import Express from "express";
import mongoose from "mongoose";
const router = Express.Router();
import { postPatient } from "../controllers/patientController.js";
router.route("/postpatient").get(postPatient);
export default router;
