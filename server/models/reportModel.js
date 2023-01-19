import mongoose from "mongoose";

const reports = new mongoose.Schema({
  p_name: {
    type: String,
  },
  p_mid: {
    type: String,
  },
  hm_name: {
    type: String,
  },
  r_symptoms: {
    type: Array,
  },
  r_priority: {
    type: String,
  },
  r_bg: {
    type: String,
  },
  r_description: {
    type: String,
  },
  hm_id: {
    type: String,
  },
  r_prescription: {
    type: Array,
  },
  r_department: {
    type: String,
  },
  r_doctorname: {
    type: String,
  },
  r_toc: {
    date: { type: String },
    time: { type: String },
  },
  r_reports: {
    type: Array,
  },
  r_id: {
    type: String,
  },
  d_id: {
    type: String,
  },
});

const reportSchema = mongoose.model("report", reports);
export default reportSchema;
