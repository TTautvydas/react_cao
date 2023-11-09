import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
