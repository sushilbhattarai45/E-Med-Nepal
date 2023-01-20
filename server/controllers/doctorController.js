import moment from "moment";
import doctorSchema from "../models/doctorsModel.js";
export const postdoctor = async (req, res) => {
  const {
    d_name,
    d_contact,
    d_address,
    d_id,
    d_hid,
    d_dob,
    d_bg,
    d_profile,
    d_specialization,
    d_gender,
  } = req.body;
  console.log(req.body);
  const d_toc = {
    date: moment().format("ll"),
    time: moment().format("LT"),
  };
  try {
    const doctor = new doctorSchema({
      d_toc,
      d_name,
      d_contact,
      d_address,
      d_dob,
      d_profile,
      d_specialization,
      d_id,
      d_hid,
      d_gender,
      d_bg,
    });
    const data = await doctor.save();

    return res.json({ message: "Done", statuscode: 200, data: data });
  } catch (e) {
    console.log(e);
    return res.json({ error: " Server side error", e: e });
  }
};
export const getOne = async (req, res) => {
  const { d_id } = req.body;
  try {
    const data = await doctorSchema.find({ d_id: d_id });
    return res.status(200).json({ message: "Done", data: data });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
export const deleteDoctor = async (req, res) => {
  const { d_id } = req.body;

  try {
    const data = await doctorSchema.deleteOne({
      d_id: d_id,
    });
    return res.status(200).json({
      message: "Deleted",
    });
  } catch (e) {
    return res.status(700).json({ error: " Server side error" });
  }
};
