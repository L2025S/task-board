const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;






// Middleware

app.use(cors());
app.use(express.json());

// Data file path 
constDATA_FILE = path.join(__dirname, "data", "tasks.json");


// ======== Read data ==========

const readTasks = () =>{

    try{
        const data = fs.readFileSync(DATA_FILE,"utf8");
        return JSON.parse(data);

    }catch (error){
        console.error("Failed to read file.", error);
        return [];

    }
};


// ======= Write data =======

const writeTasks = (tasks) =>{
    try{
        fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), "utf8");
        return true;
    } catch ( error){
        console.error("Failed to write data to file.", error);
        return false;
    }
};


// =====================================================================
// API endpoints
// =====================================================================

// GET  /api/tasks - Get all the task
app.get("/api/tasks", (request, response) =>{
    const tasks = readTasks();
    response.json(tasks);
})


//GET  /api/tasks/:id - Get a single task

app.get("/api/tasks/:id", (request, response)=>{
   
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(request.params.id));

    if (!task){
        return response.status(404).json({error: "Task not found."});
    }
    response.json(task);

});


// POST /api/tasks - create new tasks

app.post("/api/tasks", (request, response) =>{

    const tasks = readTasks();

    // Generate ID ( current maximum ID + 1)

    const maxId = tasks.reduce((max, task) =>(task.id > max ? task.id : max ), 0);
    const newTask = {
        id: maxId +1,
        ...request.body,
        status:request.body.status || "Todo"
    };

    tasks.push(newTask);

    if(writeTasks(tasks)){
        response.status(201).json(newTask);
    } else {
        response.status(500).json({error: "Failed to save task."});
    }
});


// PUT /api/tasks/:id - Update tasks
app.put("/api/tasks/:id", (request, response) =>{
    const tasks = readTasks();
    const id = parseInt(request.params.id);
    const index = tasks.findIndex(t =>t.id ===id);

    if (index === -1) {
        return response.status(404).json({error: "Task not found."});
    }

    // Update the task and keep the old ID.

    tasks[index] = {...tasks[index], ...request.body, id};

    if(writeTasks(tasks)){
        response.json(tasks[index]);
    } else{
        response.status(500).json({error: "Failed to update task."});
    }
});


// DELETE. /api/tasks/:id - Delete task
app.delete("/api/tasks/:id", (request, response)=>{
    const tasks = readTasks();
    const id = parseInt(request.params.id);
    const newTasks = tasks. filter(t => t.id !==id);

    if(newTasks.length === tasks.length){
        return response.status(404).json({error: "Task not found."});
    }

    if(writeTasks(newTasks)){
        response.json({message: "Task deleted successfully."});

    } else {
        response.status(500).json({error: "Failed to delete task."})
    }
});


// Start server
app.listen(PORT, ()=>{
    console.log("Backend runs at. http://localhost:${PORT}");
    console.log("Test Get: http://localhost:${PORT}/api/tasks");
});


