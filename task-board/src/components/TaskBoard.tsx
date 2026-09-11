import type { Task } from "../types/Task";
import TaskCard from "./TaskCard";

type TaskBoardProps = {
    tasks: Task[];
    searchTerm: string;
    setSearchTerm:(value :string) => void;
    filteredTasks: Task[];
};

const TaskBoard = ({ searchTerm, setSearchTerm, filteredTasks}:TaskBoardProps) => {
    const todoTasks = filteredTasks.filter((task)=>task.status === "Todo");
    const doingTasks = filteredTasks.filter((task)=>task.status === "Doing");
    const doneTasks = filteredTasks.filter((task) =>task.status ==="Done");

    return (
        <>
        {/* Search Column */}
        <div className="mb-6">
            <div className="max-w-xl mx-auto">
                <div className="relative">
                    <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="serach task"
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f9dcc4] focus:border-transparent outline-none transition bg-white shadow-sm" 
                    />

                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        🔍
                    </span>
                    { searchTerm && (
                        <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}

                </div>
                {searchTerm && (
                    <p className="text-sm text-gray-500 mt-2 text-center">
                        found {filteredTasks.length} matching tasks
                    </p>
                )}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            {/* TODO COLUMN */}
            <div className="bg-[#fec89a] rounded-lg p-4 shadow-md min-h-[200px]">
                <h2 className="text-xl font-bold text-black mb-3">Todo</h2>
                <div className="space-y-3">
                    {todoTasks.map((task) =>(
                        <TaskCard 
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        assignee={task.assignee}
                        category={task.category}
                        priority={task.priority}
                         />
                    ))}
                    {todoTasks.length ===0 &&(
                        <p className="text-gray-500 text-sm text-center py-4">
                            No matching task.
                        </p>
                    )}

                </div>
            </div>
            
            {/* DOING COLUMN */}
            <div className="bg-[#fec89a] rounded-lg p-4 shadow-md min-h-[200px]">
                <h2 className="text-xl font-bold text-black mb-3">Doing</h2>
                <div className="space-y-3">
                    {doingTasks.map((task)=> (
                        <TaskCard
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        assignee={task.assignee}
                        category={task.category}
                        priority={task.priority}
                         />
                    ))}
                    {doneTasks.length === 0 && (
                        <p className="text-gray-500 text-sm text-center py-4">
                            No matching task.
                        </p>
                    )}
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
                        priority={task.priority}
                        />
                    ))}
                    {doneTasks.length === 0 && (
                        <p className="text-gray-500 text-sm text-center py-4">
                            No matching task.
                        </p>
                    )}

                </div>

            </div>


        </div>


        </>
    );
};

export default TaskBoard;
