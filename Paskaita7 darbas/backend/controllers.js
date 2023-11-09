import db from "./db.js";

export async function addTodo(req, res) {
  const { todo } = req.body;
  try {
    const { rows } = await db.query(
      `insert into todolist (todo) values ('${todo}') returning *`
    );
    res.status(201).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function checkServer(req, res) {
  try {
    res.status(200).json({ message: `200 Server is running as intended` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
