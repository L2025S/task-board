const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Pool } = require("pg");

// const fs = require("fs");
// const path = require("path");

const app = express();
const PORT = 3001;

// Middleware

app.use(cors());
app.use(express.json());


// ============ Neon (PostgreSQL) connection pool =================

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:{rejectUnauthorized: false }, 
});


// =========== Test Connection ==================
pool.connect()
.then((client) =>{
  cconsole.log("✅ Connected to Neon PostgreSQL.");
  client.release();
})
.catch((err) => {
  console.error("❌ Failed to connec to Neon:", err.message);
});


// Data file path
// const DATA_FILE = path.join(__dirname, "data", "tasks.json");

// ======== Read data ==========

// const readTasks = () => {
//   try {
//     const data = fs.readFileSync(DATA_FILE, "utf8");
//     return JSON.parse(data);
//   } catch (error) {
//     console.error("Failed to read file.", error);
//     return [];
//   }
// };

// ======= Write data =======

// const writeTasks = (tasks) => {
//   try {
//     fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), "utf8");
//     return true;
//   } catch (error) {
//     console.error("Failed to write data to file.", error);
//     return false;
//   }
// };

// =====================================================================
// API endpoints
// =====================================================================

// GET  /api/tasks - Get all the task
app.get("/api/tasks", async(request, response) => {
  try{
    const result = await pool.query(
      "SELECT id, title, description, assignee, category, priority, status FROM tasks ORDER BY id ASC"
    );
    response.json(result.rows);
  } catch (err){
    console.error(err);
    response.status(500).json({error:"Failed to fetch tasks."});
  }
});

//GET  /api/tasks/:id - Get a single task

app.get("/api/tasks/:id", async (request, response) => {
  try{
    const { id } = request.params;
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);

    if(result.rows.length === 0) {
      return response.status(404).json({error: "Task not found."});
    }
    response.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    response.status(500).json({error: "Failed to fetch task."});
  }
});

// POST /api/tasks - create new tasks

app.post("/api/tasks", async(request, response) => {
  
  try{
    const {title, description, assignee, category, priority, status } = request.body;

    const result = await pool.query(
      `INSERT INTO tasks (title, description, assignee, category, priority, status)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        title,
        description,
        assignee,
        category,
        priority,
        status || "Todo", // Default value:  Todo
      ]
    );
    
    response.status(201).json(result.rows[0]);

  } catch(err){
    console.error(err);
    response.status(500).json({error: "Failed to save task."});
  }

});


// PUT /api/tasks/:id - Update tasks
app.put("/api/tasks/:id", async(request, response) => {
  try{
    const { id } = request.params;
    const {title, description, assignee, category, priority, status } = request.body;

    // Prevent null overwrites
    const existing = await pool.query ("SELECT * FROM tasks WHERE id = $1", [id]);
    if(exisiting.rows.length === 0){
      return response.status(404).json({error: "Task not found."});
    }

    const old = existing.rows[0];

    const result = await pool.query(
      `UPDATE tasks
       SET title = $1, description = $2, assignee = $3,
           category = $4, priority = $5, status = $6
       WHERE id = $7
       RETURNING *`,
      [
        title ?? old.title,
        description ?? old.description,
        assignee ?? old.assignee,
        category ?? old.category,
        priority ?? old.priority,
        status ?? old.status,
        id,
      ]
    );
    
    response.json(result.rows[0]);

  }catch(err){
    console.error(err);
    response.status(500).json({error: "Failed to update task."});
  }
});

// DELETE. /api/tasks/:id - Delete task
app.delete("/api/tasks/:id", async (request, response) => {
 try {
  const { id } = request.params;
  const result = await pool.query(
    "DELETE FROM tasks WHERE id = $1 RETURNING *",
      [id]
  );
  if (result.rows.length === 0) {
    return response.status(404).json({error: "Task not found."});
  }

  response.json({ message: " Task deleted successfully.", deleted: result.rows[0] });
 }catch(err){
  console.error(err);
  response.status(500).json({error: "Failed to delete task." });
 }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend runs at. http://localhost:${PORT}`);
  console.log(`Test Get: http://localhost:${PORT}/api/tasks`);
});
