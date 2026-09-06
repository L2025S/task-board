type TaskStatus = "Todo" | "Doing" | "Done";
type Priority = "High" |  "Medium" | "Low";
type Category = "Frontend" | "Backend" | "Test" | "Design" | "API";

type Task = {
    id: number;
    title: string; 
    description: string;
    assignee: string;
    category: Category;
    priority: Priority;
    status: TaskStatus;
    
};

export type {TaskStatus, Priority, Category, Task} ;