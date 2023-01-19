import mongoose from "mongoose";

const hospital = new mongoose.Schema({
  hm_hid: {
    type: String,
  },
  hm_name: {
    type: String,
  },
  hm_contact: {
    type: String,
  },
  hm_address: {
    type: String,
  },
  hm_password: {
    type: String,
  },

  hm_profile: {
    type: String,
  },
  hm_toc: {
    date: { type: String },
    time: { type: String },
  },
});

const hospitalSchema = mongoose.model("hospital", hospital);
export default hospitalSchema;
