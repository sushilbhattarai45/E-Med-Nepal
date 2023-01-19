import moment from "moment";
import reportSchema from "../models/reportModel.js";
export const postReport = async (req, res) => {
  console.log(req.body);
  const {
    p_mid,
    p_name,
    d_id,
    hm_name,
    r_symptoms,
    r_priority,
    r_bg,
    r_doctorname,
    hm_id,
    r_prescription,
    r_reports,
    r_description,
    r_department,
  } = req.body;

  const r_id = Math.floor(
    1000000000 + Math.random() * (9999999999 - 1000000000 + 1)
  );
  const r_toc = {
    date: moment().format("ll"),
    time: moment().format("LT"),
  };
  try {
    const report = new reportSchema({
      p_mid,
      r_id,
      p_name,
      hm_name,
      r_symptoms,
      r_priority,
      r_bg,
      d_id,
      r_doctorname,
      hm_id,
      r_prescription,
      r_reports,
      r_toc,
      r_description,
      r_department,
    });
    const data = await report.save();
    return res.json({ message: "Done", statuscode: 200, data: data });
  } catch (e) {
    return res.json({ error: " Server side error" });
  }
};
export const getReportOfOne = async (req, res) => {
  const { p_mid } = req.body;
  try {
    console.log(p_mid);
    const data = await reportSchema.find({ p_mid: p_mid }).sort({ _id: -1 });
    return res.status(200).json({ message: "Done", data: data });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
export const getOne = async (req, res) => {
  const { r_id } = req.body;
  try {
    const data = await reportSchema.find({ r_id: r_id }).sort({ _id: -1 });
    return res.status(200).json({ message: "Done", data: data });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
export const prescription = async (req, res) => {
  const { p_mid } = req.body;
  try {
    const data = await reportSchema.find({ p_mid: p_mid }).sort({ _id: -1 });
    let i = 0;
    let prescription = [];
    data.map((item) => {
      var result = new Date(item?.r_toc?.date);
      const day = item.r_prescription[0]?.duration;
      console.log(day);
      result.setDate(result.getDate() + day);
      const durationdate = result.toISOString().split("T")[0];
      const todaydate = moment().format().split("T")[0];
      if (!(todaydate > durationdate)) {
        prescription.push(item);
      }
    });

    return res.status(200).json({ message: "Done", data: prescription });
  } catch (e) {
    return res.status(400).json({ error: " Server side error" });
  }
};
