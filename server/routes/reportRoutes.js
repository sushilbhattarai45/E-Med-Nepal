import Express from "express";
import mongoose from "mongoose";
const router = Express.Router();
import multer from "multer";

import {
  postReport,
  getReportOfOne,
  prescription,
  getOne,
} from "../controllers/reportController.js";
router.route("/postreport").post(postReport);
router.route("/getreportofone").post(getReportOfOne);
router.route("/getone").post(getOne);
router.route("/getcurrentprescription").post(prescription);

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "." + file.originalname.split(".")[1]);
  },
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
});

const upload = multer({ storage: storage });

//Img Url Route
router.post("/web/upload", upload.single("pic"), async (req, res) => {
  try {
    if (req.file === undefined)
      return res
        .status(400)
        .json({ error: false, msg: "You must select a file." });
    const url =
      req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
    res
      .status(200)
      .json({ error: false, msg: "File uploaded successfully!", imgUrl: url });
  } catch (error) {
    res.status(400).json({ error: true, msg: "Img upload failed" });
  }
});

export default router;
