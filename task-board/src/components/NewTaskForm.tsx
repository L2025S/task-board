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
}

return(
    <form onSubmit={handleSubmit}>
    <input 
    value={title}
    onChange={(event) => setTitle(event.target.value)} />;

    <textarea
    value={description} 
    onChange={(event) =>setDescription(event.target.value)}/>;


    <input 
    value={assignee}
    onChange={(event)=> setAssignee(event.target.value)} />;

    <select
    value={category}
    onChange={(event) => setCategory(event.target.value as Category)}> 
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
    <option value="Test">Test</option>
    <option value="Design">Design</option>
    <option value="API">API</option>
    </select>;

    <select
    value={priority}
    onChange={(event) => setPriority(event.target.value as Priority)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
    </select>;



    <select
    value={status}
    onChange={(event)=> setStatus(event.target.value as TaskStatus)}>
        <option value="Todo">Todo</option>
        <option value="Doing">Doing</option>
        <option value="Done">Done</option>
    </select>;

    <button type="submit">Create Task</button>

    </form>
);


};

export default NewTaskForm;


