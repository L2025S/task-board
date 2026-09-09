import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import type { Task, NewTask } from "./types/Task";
import NewTaskForm from "./components/NewTaskForm";
import { useState, useEffect} from "react";

const API_URL ="http://localhost:3001/api/tasks";



// const initialTasks: Task[] = [
//   {
//     id: 1,
//     title: "Implement Authentication",
//     description: " Add JWT-based login and registration flow.",
//     assignee: "Alice",
//     category: "Backend",
//     priority: "High",
//     status: "Todo",
//   },
//   {
//     id: 2,
//     title: "Create UI Layout",
//     description: "Design the main dashboard layout using React and Tailwind.",
//     assignee: "Bob",
//     category: "Frontend",
//     priority: "Medium",
//     status: "Todo",
//   },
//   {
//     id: 3,
//     title: "Write Unit Tests",
//     description: "Add Jest tests for core utility functions.",
//     assignee: "Charlie",
//     category: "Test",
//     priority: "Low",
//     status: "Todo",
//   },
//   {
//     id: 4,
//     title: "Build API Endpoints",
//     description: "Connect CRUD endpoints for project resources.",
//     assignee: "Diana",
//     category: "Backend",
//     priority: "High",
//     status: "Doing",
//   },
//   {
//     id: 5,
//     title: "Integrate Payment Gateway",
//     description: "Connect Stripe API and handle payment flow.",
//     assignee: "Evan",
//     category: "API",
//     priority: "High",
//     status: "Doing",
//   },
//   {
//     id: 6,
//     title: "Build Resuable Components",
//     description: "Create shared UI components like buttons, modals, and forms.",
//     assignee: "Fiona",
//     category: "Frontend",
//     priority: "Medium",
//     status: "Doing",
//   },
//   {
//     id: 7,
//     title: "Set Up Project Structure",
//     description:
//       "Initialize repository, configure TypeScript, ESLint, and Prettier.",
//     assignee: "George",
//     category: "Backend",
//     priority: "Medium",
//     status: "Done",
//   },
//   {
//     id: 8,
//     title: "Configure CI/CD",
//     description:
//       "Add GitHub Actions workflow for automated testing and deployment.",
//     assignee: "Hannah",
//     category: "Backend",
//     priority: "High",
//     status: "Done",
//   },
//   {
//     id: 9,
//     title: "Implement Logging",
//     description: "Add Winston-based logging with error tracking.",
//     assignee: "Ian",
//     category: "Backend",
//     priority: "Low",
//     status: "Done",
//   },
// ];

const App = () => {

  // Use useState to manage tasks 
  const [tasks, setTasks]=useState<Task[]>([]);
  const  [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null> (null);

 // =======================  Load data from backend ===================

 const fetchTasks = async () =>{
      try{
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
 
  //const handleAddTask = (newTask: NewTask )=> {
    // generate new Id 
   // const maxId = tasks.reduce((max, task) =>(task.id && task.id > max? task.id: max), 0);
    
   // const newTaskWithId: Task = {
    //  ...newTask,
   //   id: maxId +1,
   //   status:"Todo",
   // };

   // setTasks([...tasks, newTaskWithId]);

   // console.log("Updated tasks:",[...tasks, newTaskWithId]);
  //}

  


  // Filter tasks
  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const doingTasks = tasks.filter((task) => task.status === "Doing");
  const doneTasks = tasks.filter((task) => task.status === "Done");

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* TODO COLUMN */}
          <div className="bg-[#fec89a] rounded-lg p-4 shadow-md min-h-[200px]">
            <h2 className="text-xl font-bold text-black mb-3">Todo</h2>
              <div className="space-y-3">
            {todoTasks.map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}
              />
            ))}
              </div>
          </div>

          {/*DOING COLUMN */}
          <div className="bg-[#fec89a] rounded-lg p-4 shadow-md min-h-[200px]">
            <h2 className="text-xl font-bold text-black mb-3">Todo</h2>
              <div className="space-y-3">
              {doingTasks.map((task) =>(
              <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
            
              />
            ))}
              </div>
          </div>



          {/* DONE COLUMN */}
          <div className="bg-[#fec89a] rounded-lg p-4 shadow-md min-h-[200px]">
            <h2 className="text-xl font-bold text-black mb-3">Done</h2>
                <div className="space-y-3">
                {doneTasks.map((task)=>(
                <TaskCard 
                key={task.id}
                title={task.title}
                description={task.description}
                assignee={task.assignee}
                category={task.category}
                priority={task.priority}/>
              ))}
              </div>
          </div>

              <div className="mt-8 max-w-2xl mx-auto">
                <NewTaskForm onAddTask={handleAddTask}/>
              </div>

        </div>

       
      </main>

      <Footer creator="L.W." year={2026} />
    </div>
  );

  
};

export default App;