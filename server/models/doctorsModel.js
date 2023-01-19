import mongoose from "mongoose";

const doctors = new mongoose.Schema({
  d_id: {
    type: String,
  },
  d_name: {
    type: String,
  },
  d_specialization: {
    type: String,
  },
  d_address: {
    type: String,
  },
  d_contact: {
    type: Number,
  },
  d_hid: {
    type: String,
  },
  d_gender: {
    type: String,
  },
  d_profile: {
    type: String,
  },

  d_status: {
    type: String,
    default: "ACTIVE",
  },
  d_dob: {
    type: String,
  },
  d_toc: {
    date: { type: String },
    time: { type: String },
  },
});

const doctorSchema = mongoose.model("doctor", doctors);
export default doctorSchema;
