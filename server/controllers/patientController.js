import moment from "moment";
import patientSchema from "../models/patientsModel.js";
export const postPatient = async (req, res) => {
  console.log(req.body);
  const {
    p_name,
    p_status,
    p_contact,
    p_address,
    p_dob,
    p_bg,
    p_profile,
    p_gender,
  } = req.body;
  const p_mid = Math.floor(
    1000000000 + Math.random() * (9999999999 - 1000000000 + 1)
  );
  const p_toc = {
    date: moment().format("ll"),
    time: moment().format("LT"),
  };
  try {
    const patient = new patientSchema({
      p_toc,
      p_name,
      p_status,
      p_contact,
      p_address,
      p_dob,
      p_bg,
      p_profile,
      p_mid,
      p_gender,
    });
    console.log("ok" + patient);
    const exists = await patientSchema.findOne({ p_mid: p_mid });

    if (!exists || exists.length == 0) {
      const data = await patient.save();
      return res.json({ message: "Done", statuscode: 200, data: data });
    } else {
      return res.status(600).json({ message: "Already Exists" });
    }
  } catch (e) {
    return res.json({ error: " Server side error" });
  }
};
export const getOne = async (req, res) => {
  const { p_mid } = req.body;
  try {
    console.log(p_mid);
    const data = await patientSchema.find({ p_mid: p_mid });
    return res.status(200).json({ message: "Done", data: data });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
