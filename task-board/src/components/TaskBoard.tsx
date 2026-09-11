import type { Task } from "../types/Task";

type TaskBoardProps = {
    tasks: Task[];
    searchTerm: string;
    setSearchTerm:(value :string) => void;
    filteredTasks: Task[];
};

const TaskBoard = ({ searchTerm, setSearchTerm, filteredTasks}:TaskBoardProps) => {
    const todoTasks = filteredTasks.filter((task)=>task.status === "Todo");
    const doingTaks = filteredTasks.filter((task)=>task.status === "Doing");
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

        <div>
            
        </div>


        </>
    );
};
