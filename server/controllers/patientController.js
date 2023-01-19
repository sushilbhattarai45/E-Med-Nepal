import moment from "moment";
export const postPatient = async (req, res) => {
  try {
    res.status(200).json({ error: false, msg: "testuser" });
  } catch (error) {
    res.status(400).json({ error: true, msg: error.message });
  }
};
