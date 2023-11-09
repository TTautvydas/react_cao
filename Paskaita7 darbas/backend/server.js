import express from "express";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
