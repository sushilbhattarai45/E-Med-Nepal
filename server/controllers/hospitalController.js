import moment from "moment";
import hospitalSchema from "../models/hospitalSchema.js";
import doctorSchema from "../models/doctorsModel.js";
import reportSchema from "../models/reportModel.js";
import patientSchema from "../models/patientsModel.js";
export const postHospital = async (req, res) => {
  const { hm_hid, hm_contact, hm_name, hm_address, hm_password, hm_profile } =
    req.body;
  console.log(hm_hid);
  const hm_toc = {
    date: moment().format("ll"),
    time: moment().format("LT"),
  };
  console.log(hm_toc);

  try {
    const hospital = new hospitalSchema({
      hm_name: hm_name,
      hm_hid: hm_hid,
      hm_contact: hm_contact,
      hm_address: hm_address,
      hm_password: hm_password,
      hm_profile: hm_profile,
      hm_toc: hm_toc,
    });
    const exists = await hospitalSchema.find({ hm_hid: hm_hid });

    if (!exists || exists.length == 0) {
      const data = await hospital.save();
      return res.json({ message: "Done", statuscode: 200, data: data });
    } else {
      return res.status(600).json({ message: "Already Exists" });
    }
  } catch (e) {
    return res.status(700).json({ error: " Server side error" });
  }
};
export const login = async (req, res) => {
  const { hm_hid, hm_password } = req.body;
  try {
    const exists = await hospitalSchema.findOne({
      hm_hid: hm_hid,
      hm_password: hm_password,
    });

    if (!exists || exists.length == 0) {
      return res.status(400).json({ message: "Wrong Credentials" });
    } else {
      return res
        .status(200)
        .json({ message: "Done", statuscode: 200, data: exists });
    }
  } catch (e) {
    return res.status(700).json({ error: " Server side error" });
  }
};
export const getDoctors = async (req, res) => {
  const { d_hid } = req.body;
  try {
    const data = await doctorSchema.find({ d_hid: d_hid }).sort({ id: -1 });
    return res.status(200).json({ message: "Done", data: data });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
export const getRecentReports = async (req, res) => {
  const { hm_hid } = req.body;
  try {
    const data = await reportSchema.find({ hm_id: hm_hid }).sort({ _id: -1 });
    return res.status(200).json({ message: "Done", data: data });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
export const getRecentPatient = async (req, res) => {
  const { hm_hid } = req.body;
  try {
    const data = await reportSchema.find({ hm_id: hm_hid }).sort({ _id: -1 });
    const newData = await Promise.all(
      data.map(async (item) => {
        const { p_mid } = item;
        console.log(p_mid);
        const patientdata = await patientSchema
          .find({ p_mid: p_mid })
          .sort({ _id: -1 });
        return patientdata;
      })
    );
    console.log(data);

    return res.status(200).json({ message: "Done", data: newData });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
