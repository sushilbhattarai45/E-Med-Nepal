import moment from "moment";
import doctorSchema from "../models/doctorsModel.js";
export const postdoctor = async (req, res) => {
  console.log(req.body);
  const {
    d_name,
    d_status,
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
  //   const d_mid = Math.floor(
  //     1000000000 + Math.random() * (9999999999 - 1000000000 + 1)
  //   );
  const d_toc = {
    date: moment().format("ll"),
    time: moment().format("LT"),
  };
  try {
    const doctor = new doctorSchema({
      d_toc,
      d_name,
      d_status,
      d_contact,
      d_address,
      d_dob,
      d_profile,
      d_specialization,
      d_id,
      d_hid,
      d_gender,
    });
    console.log("ok" + doctor);

    const data = await doctor.save();
    return res.json({ message: "Done", statuscode: 200, data: data });
  } catch (e) {
    return res.json({ error: " Server side error" });
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
