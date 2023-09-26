import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
const App = Express();
import {} from "dotenv/config";

import { connectDB } from "./database/connect.js";
App.use(cors());
const PORT = 3000;
App.use(Express.json());
connectDB();
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import hospitalRoutes from "./routes/hospitalRoutes.js";
App.use("/uploads", Express.static("uploads"));

App.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
App.use(Express.json());

App.use("/v1/api/patient", patientRoutes);
App.use("/v1/api/doctor", doctorRoutes);
App.use("/v1/api/report", reportRoutes);
App.use("/v1/api/hospital", hospitalRoutes);
// App.use(Express.static("../client/dist"));
// App.get("*", (req, res) => {
//   res.sendFile("/root/unifiedhealthsystem/client/dist/index.html"); // absolute path configured for server
// });
