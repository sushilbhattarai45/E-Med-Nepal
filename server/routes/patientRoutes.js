import Express from "express";
import mongoose from "mongoose";
const router = Express.Router();
import { testuser } from "../controllers/patientController.js";
router.route("/testuser").get(testuser);
export default router;
