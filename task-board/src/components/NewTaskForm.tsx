import { useState } from "react";
import type {Category, Priority, TaskStatus } from "../types/Task";


const NewTaskForm = ()=>{


const [title, setTitle] = useState("");
const [description, setDescription] =useState("");
const [assignee, setAssignee] = useState("");
const [category, setCategory] =useState<Category>("Frontend");
const [priority, setPriority] =useState<Priority>("Medium");
const [status, setStatus] =useState<TaskStatus>("Todo");

const handleSubmit = ( event: React.SubmitEvent<HTMLFormElement>) =>{
    event.preventDefault();

    console.log("Submit the formula.");
    console.log("Title: ", title);
    console.log("Description: ", description);
    console.log("Assignee: ", assignee);
    console.log("Category: ", category);
    console.log("Priority: ", priority);
    console.log("Status: ", status);
}

return(
    <div className="bg-white rounded-lg p-6 shadow-lg border border-[#fcd5ce]">
    <h2 className="text-2xl font-bold text-black mb-6">New Task</h2>
    <form onSubmit={handleSubmit} className="space-y-4">

    {/* Title */}
    <div>
    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
        Title
    </label>
    <input 
    id="title"
    name="title"
    value={title}
    onChange={(event) => setTitle(event.target.value)} 
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f9dcc4] focus:border-transparent outline-none transition"
    placeholder="Enter task title"/>
    </div>







    <label htmlFor="description" className="task-description">Description</label>
    <textarea
    id="description"
    name="description"
    value={description} 
    onChange={(event) =>setDescription(event.target.value)}/>


    <label htmlFor="assignee" className="task-responsible">Assignee</label>
    <input 
    id="assignee"
    name="assignee"
    value={assignee}
    onChange={(event)=> setAssignee(event.target.value)} />


    <label htmlFor="category" className="task-category">Category</label>
    <select
    id="category"
    name="category"
    value={category}
    onChange={(event) => setCategory(event.target.value as Category)}> 
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
    <option value="Test">Test</option>
    <option value="Design">Design</option>
    <option value="API">API</option>
    </select>

    <label htmlFor="priority" className="task-priority">Priority</label>
    <select
    id="priority"
    name="priority"
    value={priority}
    onChange={(event) => setPriority(event.target.value as Priority)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
    </select>



    <label htmlFor="status" className="task-status">Status</label>
    <select
    id="status"
    name="status"
    value={status}
    onChange={(event)=> setStatus(event.target.value as TaskStatus)}>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
    </select>

    <button type="submit" className="task-submit">Create Task</button>

    </form>
    </div>
);


};

export default NewTaskForm;


