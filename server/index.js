import Express from "express";
import mongoose from "mongoose";
import cors from "cors";
const App = Express();
App.use(cors());
const PORT = 3000;
App.use(Express.json());

import patientRoutes from "./routes/patientRoutes.js";

App.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT);
});
App.use(Express.json());
App.use("/v1/api/patient", patientRoutes);
