import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Task, NewTask } from "./types/Task";
import NewTaskForm from "./components/NewTaskForm";
import { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import TaskBoard from "./components/TaskBoard";

const API_URL ="http://localhost:3001/api/tasks";


const App = () => {

  // Use useState to manage tasks 
  const [tasks, setTasks]=useState<Task[]>([]);
  const  [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null> (null);

  const[searchTerm, setSearchTerm]=useState("");

 // =======================  Load data from backend ===================

 const fetchTasks = async () =>{
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTasks(data);
        setError(null);
      } catch (err){
        setError( err instanceof Error ? err.message :"Failed to load data.");
        console.error("Failed to fetch tasks:", err);
      } finally {
        setLoading(false);
      }
 };

 // Fetch data when the component loads

 useEffect(() =>{
  fetchTasks();
 }, []);


 // ================== Add New Tasks ==================================================

 const handleAddTask = async (newTask: NewTask) =>{
      try{
        const response = await fetch (API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        });

        if (!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const savedTask = await response.json();

        // Update tasks
        setTasks([...tasks, savedTask]);
        console.log("A new task is added:", savedTask);
      } catch (err){
        console.error("Failed to add task: ", err);
        alert("Failed to add task, please try again later.");
      }
 };
 
  

  // ========================== search  =========================================

  const filterTasks = (task : Task) =>{

    // If the search field is empty, show all the tasks.
    if(searchTerm.trim()===""){
      return true;
    }

    const searchLower = searchTerm.toLowerCase().trim();

    return(
      task.title.toLowerCase().includes(searchLower) ||
      task.description.toLowerCase().includes(searchLower)||
      task.category.toLowerCase().includes(searchLower)||
      task.assignee.toLowerCase().includes(searchLower)||
      task.priority.toLowerCase().includes(searchLower)
    );

  };

  // Filtered Tasks
  const filteredTasks = tasks.filter(filterTasks);

  // Filter tasks
  // const todoTasks = filteredTasks.filter((task) => task.status === "Todo");
  // const doingTasks = filteredTasks.filter((task) => task.status === "Doing");
  // const doneTasks = filteredTasks.filter((task) => task.status === "Done");

  // Loading
  
  if(loading){
    return(
      <div className="min-h-screen bg-[#f8edeb] flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>

    );
  }

  
  // Error while loading

  if(error){
    return(
      <div className="min-h-screen bg-[#f8edeb] flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl text-red-600">❌ Failed to load</p>
            <p className="text-gray-600">{error}</p>
            <button 
            onClick={fetchTasks}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Try Again
              </button>
          </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8edeb] font-sans">
      <Header
        title="Fullstack Programming"
        courseName=" Course: Java Developing "
      ></Header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

      <Routes>
        {/* Route 1: Task Board */}
        <Route 
        path="/"
        element={
          <TaskBoard
          tasks={tasks}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredTasks={filteredTasks} 
          />
        }
        />

        {/* Route 2: New Task Form */}
        <Route
        path="/new"
        element={
          <div className="max-w-2xl mx-auto">
            <NewTaskForm  onAddTask={handleAddTask}/>
          </div>
        }
         />
        
      </Routes>

       
      </main>

      <Footer creator="L.W." year={2026} />
    </div>
  );

  
};

export default App;