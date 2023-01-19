import Express from "express";
import mongoose from "mongoose";
import { postdoctor, getOne } from "../controllers/doctorController.js";
const router = Express.Router();
router.route("/postdoctor").post(postdoctor);
router.route("/getoneDoctor").post(getOne);

export default router;
