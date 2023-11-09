import express from "express";
import { addTodo, checkServer } from "./controllers.js";

const router = express.Router();

router.get("/", checkServer);

router.get("/todos");

router.post("/todos/", addTodo);

router.delete("/todos/:id");

export default router;
